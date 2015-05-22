// JavaScript Document
$( document ).ready(function() {
	$.ajaxSetup({cache: false });
	$(".fadelayer").hide();
	$(".alert_box").hide();
	$(".alert_box_big").hide();
	$(function(){
		$("#ques_sub").click(function(e){
			$("form#dass_ques").trigger('submit');
			e.preventDefault();
		});
		$("form#dass_ques").submit(function(){
			var item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11, item_12, 
			item_13, item_14, item_15, item_16, item_17, item_18, item_19, item_20, item_21, item_22, item_23, item_24,
			item_25, item_26, item_27, item_28, item_29, item_30;
			var recommend='';
			var das = new Array(3);
			item_1=$('input[name="1st"]:checked').val();
			item_2=$('input[name="2nd"]:checked').val();
			item_3=$('input[name="3rd"]:checked').val();
			item_4=$('input[name="4th"]:checked').val();
			item_5=$('input[name="5th"]:checked').val();
			item_6=$('input[name="6th"]:checked').val();
			item_7=$('input[name="7th"]:checked').val();
			item_8=$('input[name="8th"]:checked').val();
			item_9=$('input[name="9th"]:checked').val();
			item_10=$('input[name="10th"]:checked').val();
			item_11=$('input[name="11th"]:checked').val();
			item_12=$('input[name="12th"]:checked').val();
			item_13=$('input[name="13th"]:checked').val();
			item_14=$('input[name="14th"]:checked').val();
			item_15=$('input[name="15th"]:checked').val();
			item_16=$('input[name="16th"]:checked').val();
			item_17=$('input[name="17th"]:checked').val();
			item_18=$('input[name="18th"]:checked').val();
			item_19=$('input[name="19th"]:checked').val();
			item_20=$('input[name="20th"]:checked').val();
			item_21=$('input[name="21th"]:checked').val();
			item_22=$('input[name="22th"]:checked').val();
			item_23=$('input[name="23th"]:checked').val();
			item_24=$('input[name="24th"]:checked').val();
			item_25=$('input[name="25th"]:checked').val();
			item_26=$('input[name="26th"]:checked').val();
			item_27=$('input[name="27th"]:checked').val();
			item_28=$('input[name="28th"]:checked').val();
			item_29=$('input[name="29th"]:checked').val();
			item_30=$('input[name="30th"]:checked').val();
			
			if(item_1==undefined||item_2==undefined||item_3==undefined||item_4==undefined||item_5==undefined||item_6==undefined
			||item_7==undefined||item_8==undefined||item_9==undefined||item_10==undefined||item_11==undefined||item_12==undefined
			||item_13==undefined||item_14==undefined||item_15==undefined||item_16==undefined||item_17==undefined||item_18==undefined
			||item_19==undefined||item_20==undefined||item_21==undefined||item_22==undefined||item_23==undefined||item_24==undefined
			||item_25==undefined||item_26==undefined||item_27==undefined||item_28==undefined||item_29==undefined||item_30==undefined){
				$(".alert_box").html("请完成所有问题");
				$(".alert_box").fadeIn('slow').delay(1500).fadeOut('slow');
				return false;
			}
			
			das[0] = item_5+item_7+item_10+item_11+item_17+item_18+item_23+item_25+item_27+item_29;	//stress	
			das[1] = item_1+item_3+item_7+item_9+item_13+item_14+item_15+item_16+item_20+item_24;	// anxiety(mania)
			das[2] = item_2+item_4+item_8+item_12+item_19+item_21+item_22+item_26+item_28+item_30;	// depression
			
			if(das[0]>19||das[1]>19||das[2]>19){
				if(das[2]>19) recommend += ' 消沉 ';
				if(das[1]>19) recommend += ' 焦虑 ';
				if(das[0]>119) recommend += ' 压力 ';
			}else{
				if(Math.max.apply(null, das) == das[0]){
					recommend += ' 压力 ';
				}else if(Math.max.apply(null, das) == das[1]){
					recommend += ' 焦虑 ';
				}else if(Math.max.apply(null, das) == das[2]){
					recommend += ' 消沉 ';
				}
			}
			
			$.ajax({
					url:"dass.php",
					type:"POST",
					data:{item_1:item_1, item_2:item_2, item_3:item_3, item_4:item_4, item_5:item_5, item_6:item_6, item_7:item_7,
					item_8:item_8,item_9:item_9,item_10:item_10,item_11:item_11,item_12:item_12,item_13:item_13,item_14:item_14,item_15:item_15,item_16:item_16,
					item_17:item_17,item_18:item_18,item_19:item_19,item_20:item_20,item_21:item_21, item_22:item_22, item_23:item_23, item_24:item_24, 
					item_25:item_25, item_26:item_26, item_27:item_27, item_28:item_28, item_29:item_29, item_30:item_30},
					dataType:"json",
					success: function(data){
						$(".alert_box").html("提交成功");
						$(".alert_box_big").html('请前往跳转页面选择'+'<strong>'+recommend+'</strong>'+'类歌曲<br/>'+
							'如浏览器未自动跳转，请<a href="music.html" target="_self">按此</a>');
						$(".alert_box").fadeIn('slow').delay(1500).fadeOut('slow').$(".alert_box_big").fadeIn('slow').delay(4000).window.location.href='music.html';
					},
					error:function(x,e){
						if(x.status==0){
							$(".alert_box").html('请检查网络连接');
						}else if(x.status==404){
							$(".alert_box").html('访问页面不存在');
						}else if(x.status==500){
							$(".alert_box").html('服务器出错');
						}else if(e=='parsererror'){
							$(".alert_box").html('提交成功');
						}else if(e=='timeout'){
							$(".alert_box").html('请求超时');
						}else {
							$(".alert_box").html('未知错误'+ x.responseText);
						}
						$(".alert_box").fadeIn('slow').delay(1500).fadeOut('slow');
						if(e=='parsererror'){
							$(".alert_box_big").html('请前往跳转页面选择'+'<strong>'+recommend+'</strong>'+'类歌曲<br/>'+
							'如浏览器未自动跳转，请<a href="music.html" target="_self">按此</a>');
							$(".alert_box_big").delay(2000).fadeIn('slow');
							window.setTimeout("window.location.href='music.html'", 5000);	//auto jump to music.html
						}
					}
			});
			return false;
		});
	});
});

