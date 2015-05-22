// JavaScript Document
var styleChange = {pause:{}, play:{}};
//var audio;

styleChange.play.change = function(){
		$('#play_btn').addClass('hidden');
		$('#pause_btn').removeClass('hidden');
};

styleChange.pause.change = function(){
		$('#pause_btn').addClass('hidden');
		$('#play_btn').removeClass('hidden');
};

function initAudio(elem) {
        var title = elem.attr('title');
        var cover = elem.attr('cover');
        var song = elem.attr('song');
		console.log( elem.attr('title'));
		
		
        $('#right_player .song_name').text(title);
        $('img.cover').attr('src','img/covers/' + cover);
		//audio = new Audio('music/' + song);	
		// how to set the duration?
};
		
$(document).ready(function(){
		var dur, durM, val, mus, elem, prog;		
		
		initAudio($('#playlist li:first-child'));
		$('#error').text('');
		styleChange.play.change();
		console.log(mus);
		if(mus){
			mus[0].pause();
			mus[0].currentTime = 0;
			$('li').removeClass('active');
		}
		mus = $('#playlist').next('audio');
		$('#playlist').parent("li").addClass('active');	
		mus[0].play();

			
		$('#progress_bar').slider({
			value: 0,
			orientation: "horizontal",
			range: "min",
			animate: true,
			step: 1
		});
			
		$('audio').on("timeupdate", function() {
			mus[0].volume = val/100;
			d = this.duration;
			c = this.currentTime;
			curM = Math.floor(c/60);
			curS = Math.round(c - curM*60);
			$('#cur').text(curM + ':' + curS);
				$('#progress_bar').slider({
						max: d,
						min: 0,
						value: c
				});
			});
				
			$('audio').on("playing", function () {
					dur = this.duration;
					durM = Math.floor(dur/60) + ':' + Math.round((dur - Math.floor(dur/60))/10);
        			$('#dur').text(durM);
					$(this).parent("li").addClass('active');
    		});
			
			$('audio').on("ended", function(){
					mus = $(this).parent('li').next('li').first();
					mus = mus.children('audio');
					$(this).parent("li").addClass('active');
					var next = $('li.active').next();
					$('li').removeClass('active');
					if(mus[0]){
						initAudio(next);
						mus[0].play();
					}// what if go to the end of song list?
				});
			
			//play button
			$('#play_btn').click(function(){
				if(mus){
					mus[0].play();
					styleChange.play.change();
				$('#error').text('');
				}	
			}); 
			
			// pause button
			$('#pause_btn').click(function() {
				
				if(mus){
					mus[0].pause();
					styleChange.pause.change();
				}	
			});
			
			//next button
			$('#play_next').click(function(){
					mus[0].pause();
					mus[0].currentTime = 0;
					mus = mus.parent('li').next('li').first();
					mus = mus.children('audio');
					var next = $('li.active').next();
					$('li').removeClass('active');
					if(mus[0]){
						initAudio(next);
						mus[0].play();
					}
					else{
					}
				});
				
			//prev button
			$('#play_prev').click(function(){
					mus[0].pause();
					mus[0].currentTime = 0;
					mus = mus.parent('li').prev('li').last();
					mus = mus.children('audio');
					var prev = $('li.active').prev();
					$('li').removeClass('active');
					if(mus[0]){
						initAudio(prev);
						mus[0].play();
					}
				});

			//volume
			$('.inner').slider({
					value: 60,
					orientation: "horizontal",
					range: "min",
					animate: true,
					step: 1
			});
		
	
			// progress
			$('#progress_bar').slider({
				start: function( event, ui ) {
					mus[0].pause();
					},
				stop: function( event, ui ) {
					prog = ui.value;
					mus[0].currentTime = prog;
					mus[0].play();
					styleChange.play.change();
				}
			});
			
});
