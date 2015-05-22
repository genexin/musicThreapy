var audio = new Audio;	// create an audio object firstly
var index;	// the global index for current audio
var play_list;	//the current play list

//Hide pause button
$( document ).ready(function() {
	// The ajax code for the input button 
	$(function(){
		$("#comment_sub").click(function(e){
			$("form#comment").trigger('submit');
			e.preventDefault();	// the key
		});
		$("form#comment").submit(function(){
			var input = $('#content').val();
			if(input.length==0){
				$(".fadelayer").html('您的留言为空');
				$(".fadelayer").fadeIn('slow').delay(1500).fadeOut('slow');
				return false;
			}
				
			$.ajax({
				url:"music.php",
				type:"POST",
				data:{input:input},
				dataType:"json",
				success: function(data){
					$(".fadelayer").html('评论成功');
					$(".fadelayer").fadeIn('slow').delay(1500).fadeOut('slow');
				},
				error:function(x,e){
					if(x.status==0){
						$(".fadelayer").html('请检查网络连接');
					}else if(x.status==404){
						$(".fadelayer").html('访问页面不存在');
					}else if(x.status==500){
						$(".fadelayer").html('服务器出错');
					}else if(e=='parsererror'){
						$(".fadelayer").html('评论成功');
					}else if(e=='timeout'){
						$(".fadelayer").html('请求超时');
					}else {
						$(".fadelayer").html('未知错误'+ x.responseText);
					}
					$(".fadelayer").fadeIn('slow').delay(1500).fadeOut('slow');
				}
			});
			return false;
		});
	});
		
	//--------------------------------//
	//----code for music player ------//
	//--------------------------------//
	play_list=$('#total');
	$('#pause_btn').hide();
	$(".fadelayer").hide();

	//Initializer - Play First Song
	//initAudio($('#total li:first-child'));
	shuffle(play_list);
	
	function shuffle(element){
		index = Math.floor(Math.random()*play_list.children('li').length);
		var audio_li= play_list.children('li')[index];
		initAudio(audio_li);
	};
	
	function initAudio(element){
		var song = $(element).attr('song');
		var title = $(element).attr('title');
		var cover = $(element).attr('cover');
		
		//create audio object
		audio.src = 'music/' + song;	
		$('.song_name').text(title);
		
		//Insert Cover Image
		$('img.cover').attr('src','img/covers/' + cover);	
		$(play_list.children('li')).removeClass('active');
		$(element).addClass('active');
		
		// Insert the duration
		audio.addEventListener("loadedmetadata", function(_event) {
    		var length = audio.duration;
			var length_s = parseInt(length % 60);
			var length_m = parseInt((length / 60) % 60);
			$('#dur').html(length_m + "'" + length_s + '"'); 
		});
		
	};
	
	// Auto play the next song
	audio.addEventListener("ended", function(){
		
		var rand_ind;	// shuffle function
		do {
			rand_ind = Math.floor(Math.random()*play_list.children('li').length);
		} while(index == rand_ind);
		index = rand_ind;
		var next = play_list.children("li")[index];
		if (next.length == 0) {
			next = play_list.firstChild;
		}
		initAudio(next);		// create a new audio object in each inital
		audio.play();
		showDuration();
	});
	
	//Play Button on player
	$('#play_btn').click(function(){

		if(!audio.currentTime){
			$('#cur').html('0'+"'"+ '00'+'"');
			   	
		}
		// hack for the duration
		/*audio.addEventListener("loadedmetadata", function(_event) {
    		var length = audio.duration;
			var length_s = parseInt(length % 60);
			var length_m = parseInt((length / 60) % 60);
			$('#dur').html(length_m + "'" + length_s + '"'); 
		});*/
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
		$('#dur').fadeIn(400);
		showDuration();
	});
	
	// play buttons for emotion
	$('#depression_btn').click(function(){
		play_list=$('#depression');
		$('#pause_btn').hide();
		shuffle(play_list);
		if(!audio.currentTime){
			$('#cur').html('0'+"'"+ '00'+'"');
			   	
		}
		// hack for the duration
		/*audio.addEventListener("loadedmetadata", function(_event) {
    		var length = audio.duration;
			var length_s = parseInt(length % 60);
			var length_m = parseInt((length / 60) % 60);
			$('#dur').html(length_m + "'" + length_s + '"'); 
		});*/
		
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
		$('#dur').fadeIn(400);
		showDuration();
	});
	$('#stress_btn').click(function(){
		play_list=$('#stress');
		$('#pause_btn').hide();
		shuffle(play_list);
		if(!audio.currentTime){
			$('#cur').html('0'+"'"+ '00'+'"');
			   	
		}
		// hack for the duration
		/*audio.addEventListener("loadedmetadata", function(_event) {
    		var length = audio.duration;
			var length_s = parseInt(length % 60);
			var length_m = parseInt((length / 60) % 60);
			$('#dur').html(length_m + "'" + length_s + '"'); 
		});*/
		
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
		$('#dur').fadeIn(400);
		showDuration();
	});
	$('#anxiety_btn').click(function(){
		play_list=$('#anxiety');
		$('#pause_btn').hide();
		shuffle(play_list);
		if(!audio.currentTime){
			$('#cur').html('0'+"'"+ '00'+'"');
			   	
		}
		
		// hack for the duration
		/*audio.addEventListener("loadedmetadata", function(_event) {
    		var length = audio.duration;
			var length_s = parseInt(length % 60);
			var length_m = parseInt((length / 60) % 60);
			$('#dur').html(length_m + "'" + length_s + '"'); 
		});*/
		
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
		var next = (play_list.children('li.active')).next();
		if (next.length == 0) {
			next = play_list.children('li')[0];
		}
		initAudio(next);
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
		showDuration();
	});
	
	//Prev Button
	$('#play_prev').click(function(){
		audio.pause();
		var prev = (play_list.children('li.active')).prev();
		if (prev.length == 0) {
			prev = play_list.children('li')[play_list.children('li').length-1];
		}
		initAudio(prev);
		audio.play();
		$('#play_btn').hide();
		$('#pause_btn').show();
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

