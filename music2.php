<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- main style sheet -->
<link rel="stylesheet" href="style/style_4.css">
<!-- scroller style sheet -->
<link rel="stylesheet" href="style/nanoscroller.css">
<!-- latest jQuery direct from google's and Microsoft's CDN -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<!-- scroller script -->
<script type="text/javascript" src="script/jquery.nanoscroller.min.js"></script>
<!-- jquery ui js -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<!-- music player js -->
<script type="text/javascript" src="script/musicplayer.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
         $(".nano").nanoScroller();
    });
</script>
<title>乐疗小站</title>
</head>

<body>
<div class="out_container">
	<!-- left side navigator -->
	<div id="left_nav">
    	<div id="left_nav_shadow1">
        	<div id="left_nav_shadow2">
    			<div class="ver_nav">
                	<ul>
                		<li><a href="index.html" target="_self" title="乐疗小站"><h2 style="color:#333;">乐疗小站</h2></a></li>
                        <li><a href="team.html" target="_self" title="专业团队"><h2 style="color:#333;">专业团队</h2></a></li>
                        <li><a href="reseach.html" target="_self" title="研究成果"><h2 style="color:#333;">研究成果</h2></a></li>
                        <li><a href="http://www.comp.polyu.edu.hk/~csyuzhao" target="_self" title="研究成果"><h2 style="font-size:16px; color:#333;">认知计算实验室</h2></a></li>
                        <li><a href="http://www.polyu.edu.hk/uhs/hk/" target="_self" title="医疗保健处"><h2 style="font-size:18px; color:#333;">医疗保健处</h2></li>
                        <li><a href="http://www.musicrazy.com/phpbb" target="_self" title="讨论区"><h2 style="font-size:18px; color:#333;">讨论区</h2></a></li>
                    </ul>
                </div>
    		</div>
        </div>
    </div>

    <!-- right side player -->
	<div id="right_player">
    	<div id="right_player_shadow1">
        	<div id="right_player_shadow2">
            	<div id="player">
                	<div>
                    	<img class="cover" />
                    </div>
                    <div id="audio_info">
                    	<p class="song_name"></p>
                    </div>
                    <div id="control_area">
                    	<!-- Progress par -->
                        <div id="duration">
                        	<div id="error"></div>
                            <div id="cur">0'0"</div>
                    		<div id="dur">0'0"</div>
                            <div class="clearfix"></div>
                        </div>
    					<div class="progress_bar ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
    						<div class="load_bar" style="100%"></div>
                            <div class="clearfix"></div>
                        </div> 
                        <!-- Control buttons: play/pause, prev, next, volume -->
                        <div class="control_btns">
                            <a href="#" title="播放"><span id="play_btn"></span></a>
                            <a href="#" title="暂停"><span id="pause_btn"></span></a>
                            <a href="#" title="上一首"><span id="play_prev"></span></a>
                            <a href="#" title="下一首"><span id="play_next"></span></a>

                            <span class="volume">
                            	<i class="volume_ico"></i>
                                <span class="voice_control" style="width:0px;">
                           			 <div id="volume_slider" class="inner ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
                                        <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left:60%;"></a>
                                     </div>
                                </span>
                            </span>
                            <div class="clearfix"></div>
                        </div>
                        <ul class="playlist" id="total">
                        	<li song="gaoshanliushui_short.mp3" cover="gaoshanliushui.jpg" title="高山流水"></li>
                            <li song="guanglingsan_short.mp3" cover="guanglingsan.jpg" title="广陵散"></li>
                            <li song="yuqiaowenda_short.mp3" cover="yuqiaowenda.jpg" title="渔樵问答"></li>
                            <li song="meihuasannong_short.mp3" cover="meihuasannong.jpg" title="梅花三弄"></li>
                            <li song="shimianmaifu_short.mp3" cover="shimianmaifu.jpg" title="十面埋伏"></li>
                            <li song="yangchunbaixue_short.mp3" cover="yangchunbaixue.jpg" title="阳春白雪"></li>
                            <li song="hangongqiuyue_short.mp3" cover="hangongqiuyue.jpg" title="汉宫秋月"></li>
                            <li song="yuqiaowenda_short.mp3" cover="yuqiaowenda.jpg" title="渔樵问答"></li>
                        </ul>
                        <ul class="playlist" id="depression">
                        	<li song="gaoshanliushui_short.mp3" cover="gaoshanliushui.jpg" title="高山流水"></li>
                            <li song="guanglingsan_short.mp3" cover="guanglingsan.jpg" title="广陵散"></li>
                            <li song="yuqiaowenda_short.mp3" cover="yuqiaowenda.jpg" title="渔樵问答"></li>
                        </ul>
                        <ul class="playlist" id="anxiety">
                        	<li song="meihuasannong_short.mp3" cover="meihuasannong.jpg" title="梅花三弄"></li>
                            <li song="shimianmaifu_short.mp3" cover="shimianmaifu.jpg" title="十面埋伏"></li>
                            <li song="yangchunbaixue_short.mp3" cover="yangchunbaixue.jpg" title="阳春白雪"></li>
                        </ul>
                        <ul class="playlist" id="stress">
                        	<li song="hangongqiuyue_short.mp3" cover="hangongqiuyue.jpg" title="汉宫秋月"></li>
                            <li song="yuqiaowenda_short.mp3" cover="yuqiaowenda.jpg" title="渔樵问答"></li>
                        </ul>
            		</div>
                </div>
                <div class="seg_line"></div>
                <div id="feedback">
                	<form id="comment" method="post" action="music2.php" target="action_target">
                    	<textarea rows="8" cols="26" name="content" form="comment" onfocus="if(value=='请留下您宝贵的意见……'){value=''}" onblur="if (value ==''){value='请留下您宝贵的意见……'}">请留下您宝贵的意见……</textarea>
                        <input type="submit" value="提交">
                    </form>
                    <iframe id="action_target" name="action_target" style="display:none;"></iframe>
                </div>
                <div class="footer_seg_line"></div>
                <div class="share">
                	<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a></div>
					<script>
					window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"欢迎来到我们的乐疗小站","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"2","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
					</script>
                </div>
            </div>
        </div>
    </div>
    
   <!-- main body area -->
   <div id="center_body">
       <div id="nano_wrapper" class="nano">
           <div class="nano-content">
               <div id="content_wrapper">
               		<div id="emotion_wrapper">
                    	<div class="emotion_label">
                        	<a href="#" target="_self" title="消沉"><div class="circle" id="depression_btn"><span class="inner_text">消沉</span></div></a>
                            <div class="emotion_detail">
                            	<p>春节长假过后感觉自己很难开始工作？
                                <br/>对任何事也提不起兴趣？
                                <br/>对未来没有什么可期盼？
                                <br/>如果是，请选择此类歌曲。</p>
                            </div>
                        </div>
                        <div class="emotion_label">
                        	<a href="#" target="_self" title="压力"><div class="circle" id="stress_btn"><span class="inner_text">压力</span></div></a>
                            <div class="emotion_detail">
                            	<p>很难让自己平静下来？<br/>
                                很难放松自己？<br/>
                                平白无故消耗很多精神？<br/>
                                如果是，请选择此类音乐。
                                </p>
                            </div>
                        </div>
                        <div class="emotion_label">
                        	<a href="#" target="_self" title="焦虑"><div class="circle" id="anxiety_btn"><span class="inner_text">焦虑</span></div></a>
                            <div class="emotion_detail">
                            	<p>感到呼吸困难、口感舌燥？<br/>
                                担心自己在公共场合出丑，逃避社交？<br/>
                                无源无故地害怕？<br/>
                                如果是，请选择此类音乐。</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="footer_seg_line"></div>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr><td align="center"><div class="footer_info"> Copyright ©2015 <a href="http://www.comp.polyu.edu.hk/~csyuzhao" target="_self">香港理工大学计算学系认知科学实验室</a> & <a href="http://www.polyu.edu.hk/uhs/hk/"> 香港理工大学医疗保健处</a>. All Rights Reserved.</div><td></tr>
                                    <tr><td align="center">
                                    <div class="footer_info">This website is best viewed with Microsoft Internet Explorer 7.0, Firefox 3.0, Chrome 10.0 or above.</div>
                                    </td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- main body end tag -->
    <!-- <br style="clear:both;"/> -->
</div>
</body>
</html>
