var audio = new Audio;	// create an audio object firstly
var index;	// the global index for current audio

//Hide pause button
$( document ).ready(function() {
	$('#pause_btn').hide();

	//Initializer - Play First Song
	//initAudio($('#playlist li:first-child'));
	shuffle($('#playlist li'));
	
	function shuffle(element){
		var list=element;
		index = Math.floor(Math.random()*list.length);
		initAudio(list.eq(index));
	};
	
	function initAudio(element){
		var song = element.attr('song');
		var title = element.attr('title');
		var cover = element.attr('cover');
		
		//create audio object
		audio.src = 'music/' + song;	
		$('#right_player .song_name').text(title);
		audio.currentTime = 0;
		
		//Insert Cover Image
		$('img.cover').attr('src','img/covers/' + cover);	
		$('#playlist li').removeClass('active');
		element.addClass('active');
		
	};
	
	// Auto play the next song
	audio.addEventListener("ended", function(){
		var rand_ind = Math.floor(Math.random()*$('#playlist li').length);	// shuffle function
		if(index == rand_ind){
			rand_ind = Math.floor(Math.random()*$('#playlist li').length);
		}
		else{
			index = rand_ind;
		}
		var next = $('#playlist li').eq(index);
		if (next.length == 0) {
			next = $('#playlist li:first-child');
		}
		initAudio(next);		// create a new audio object in each inital
		audio.play();
		showDuration();
	});
	
	//Play Button
	$('#play_btn').click(function(){
		if(!audio.currentTime){
			$('#cur').html('0'+"'"+ '00'+'"');
			   	
		}
		var length = audio.duration;
		var length_s = parseInt(length % 60);
		var length_m = parseInt((length / 60) % 60);
		$('#dur').html(length_m + "'" + length_s + '"'); 
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
		$('#dur').fadeIn(400);
		showDuration();
	});
	
	//Pause Button
	$('#pause_btn').click(function(){
		audio.pause();
		$('#pause_btn').hide();
		$('#play_btn').show();
	});
		
	
	//Next Button
	$('#play_next').click(function(){
		audio.pause();
		var next = $('#playlist li.active').next();
		if (next.length == 0) {
			next = $('#playlist li:first-child');
		}
		initAudio(next);
		audio.play();
		showDuration();
	});
	
	//Prev Button
	$('#play_prev').click(function(){
		audio.pause();
		var prev = $('#playlist li.active').prev();
		if (prev.length == 0) {
			prev = $('#playlist li:last-child');
		}
		initAudio(prev);
		audio.play();
		showDuration();
	});
	
	
	
	//Volume Control
	/*$('.volume').change(function(){
		audio.volume = parseFloat(this.value / 10);
	});*/
	
	$('#volume_slider').slider({
		orientation: "horizontal",
		value : 0.6,
		step  : 0.1,
		range : 'min',
		min   : 0,
		max   : 1,
		slide : function(event, ui){
			audio.volume = ui.value;
    	}
	});
		
	//Time Duration
	function showDuration(){
		$(audio).bind('timeupdate', function(){
			//Get hours and minutes
			var s = parseInt(audio.currentTime % 60);
			var m = parseInt((audio.currentTime / 60) % 60);
			//Add 0 if seconds less than 10
			if (s < 10) {
				s = '0' + s;
			}
			$('#cur').html(m + "'" + s + '"');	
			var value = 0;
			if (audio.currentTime > 0) {
				value = Math.floor((100 / audio.duration) * audio.currentTime);
			}
			$('.load_bar').css('width',value+'%');
		});
	}

});