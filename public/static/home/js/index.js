$(function(){
		var aw=$(".tt9").height()
		var tt=setInterval(movez,5000);
		function movez(){
			$(".ttxxk1").animate({top:-aw},function(){
				$(".ttxxk1 tbody tr:first-child").appendTo($(".ttxxk1 tbody"));
				$(".ttxxk1").css("top",0);
			});
			$(".ttxxk2").animate({top:-aw},function(){
				$(".ttxxk2 tbody tr:first-child").appendTo($(".ttxxk2 tbody"));
				$(".ttxxk2").css("top",0);
			});
			
		}


        $(".infor_t").eq(0).css("color","#FF4200")
        $(".know-lists").css("display","none").eq(0).css("display","block")
        $(".infor_t").mouseover(function(){
            var index=$(this).index();
            $(".know-lists").css("display","none").eq(index).css("display","block");
            $(".infor_t").css("color","#666")
            $(this).css("color","#FF4200")
        })
		
	
	
	//热销产品
	$('.hot_con_list li').css('display','none').eq(0).css('display','block');
	$('.hot_title_list').mouseover(function(){
		var index=$(this).index();
		$('.hot_title_list').css({'background':'#eee','color':'#666'});
		$(this).css({'background':'#fff','color':'#FF4200'});
		$('.hot_con_list li').css('display','none').eq(index).css('display','block');
	})
	//热销产品
	//$('.p_tab_key.cur').css("borderBottomColor","#fff").eq(0).css("borderBottomColor","#ff6600");
	
	$('.p_tab_key.cur').css("color","#666").eq(0).css("color","#FF4200");
	$('.p_tab_val').css('display','none').eq(0).css('display','block');
	$('.p_tab_key.cur').mouseover(function(){
		var index=$(this).index();
		$('.p_tab_key.cur').css("color","#666");
		$(this).css("color","#FF4200");
		$('.p_tab_val').css('display','none').eq(index).css('display','block');
	})
	
	//head
	
		var now=0;
		var next=0;
		var flag=true;
		$('.wrap-box div').css('opacity',0).eq(0).css('opacity',1);
		var imgs=$(".pic ul li");
		var yuan=$(".banner-y");
		imgs.css({overflow:"hidden","background":"none"})
		var width=$(".pic").width();
		var t=setInterval(move,8000);
		imgs.css({opacity:0});
		 imgs.eq(0).animate({opacity:1});
		//imgs.css({left:width})
		//imgs.eq(0).css({left:0})
		yuan.eq(0).css("background","#EC6300");
		function move(){
			if(flag==false){
				 return
				}
				flag=false;
			 next++;
			  if(next==imgs.length){
				next=0
			  }
			  imgs.eq(now).animate({opacity:0})
			  .end().eq(next).animate({opacity:1},function(){
			  flag=true;
			});
			 yuan.css("background","#ccc")
			  .eq(next).css("background","#EC6300")
			$('.wrap-box div').eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
			  now=next;

		}
		function movel(){
			if(flag==false){
				 return
				}
				flag=false;
			 next--;
			  if(next<0){
				next=imgs.length-1
			  }
			  imgs.eq(now).animate({opacity:0})
			  .end().eq(next).animate({opacity:1},function(){
				flag=true
			  })
			  yuan.css("background","#ccc")
			  .eq(next).css("background","#EC6300");
			 $('.wrap-box div').eq(now).animate({opacity:0}).end().eq(next).animate({opacity:1});
			  now=next;

		}
		yuan.click(function(){
			if(flag==false){
				  return
			  }
			  flag=false;
			var index=$(this).index()
			
			imgs.eq(now).animate({opacity:0})
			imgs.eq(index).animate({opacity:1},function(){
				flag=true
			})
			yuan.css("background","#ccc");
			$(this).css("background","#EC6300");
			$('.wrap-box div').eq(now).animate({opacity:0}).end().eq(index).animate({opacity:1});
			now=index;
			next=index;

		})	
		$(".banner_down").click(function(){
			if(flag){
			move()
			flag=false;
		   }
		})
		$(".banner_up").click(function(){
			if(flag){
			movel()
			flag=false;
		   }
		})
		
		
    // 楼层
	var floor_now=0;
		var floor=$('.product_floor');
		var floor_box=$('#floor');
	    var box_top=$('.product-line').position().top;
		var cWidth=document.documentElement.clientWidth;
        var cHeight=document.documentElement.clientHeight;
         floor_box.css({"display":"none","top":(cHeight-256)/2+'px'});
         
        $(window).scroll(function(){
        	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        	var top=$(obj).scrollTop(); 
        	 if((top>=floor.eq(0).position().top-300)){
	           floor_box.css("display","block");

	        }
	        if((top<floor.eq(0).position().top-300)){
	             floor_box.css("display","none");
	        }   
        	floor.each(function(index,obj){      
		        if(top>=$(this).position().top-300){ 
		       $('#floor li').css({"background":"#999"});
		 		$('#floor li').eq(index).css({"background":"#FF4200"});
		           floor_now=index;
		       }
		   })
        })
        
		$('#floor li').click(function(){
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			var index=$(this).index();
			console.log(index,floor.eq(index).position().top,top)
			$(obj).animate({scrollTop:floor.eq(index).position().top},400);
	          floor_now=index;
		})
		$('#floor li').mouseover(function(){
			$('#floor li').css({"background":"#999"})
			$(this).css({"background":"#FF4200"})
			$('#floor li').eq(floor_now).css({"background":"#FF4200"})
		})
		$('#floor li').mouseout(function(){
			$('#floor li').css({"background":"#999"})
			$('#floor li').eq(floor_now).css({"background":"#FF4200"})
		})
	//foot
		$(".email_tishi").css('display','none')
		$('#subscribe_email').focus(function(){
			$(this).val("")
		})
		$('#subscribe_but').click(function(){
			var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var mail=$('#subscribe_email').val()
			 if (filter.test(mail)) {
			 	$(".email_tishi").css('display','none')
			 	 alert('提交成功');
			 }else {
			 	$(".email_tishi").css('display','block')
				
			}
		})	

		
})


window.onload=function(){
	
	//网页头部小三角箭头特效
	var collection_span=document.getElementById('collection_span');
	var collection_li=document.getElementById('collection_li');
	var fnInitArr2=document.getElementById('fnInitArr2');
	var collection_hidden_ul=document.getElementById('collection_hidden_ul');
	collection_li.onmouseover=function(){
		this.style.backgroundColor='white';
		fnInitArr2.className='arrow-on';
		collection_hidden_ul.style.display='block';
	}
	collection_li.onmouseout=function(){
		this.style.backgroundColor='';
		fnInitArr2.className='arrow-off';
		collection_hidden_ul.style.display='none';
	}
	collection_hidden_ul.onmouseover=function(){
		collection_span.style.backgroundColor='white';
		fnInitArr2.className='arrow-on';
		collection_hidden_ul.style.display='block';
	}
	collection_hidden_ul.onmouseout=function(){
		collection_span.style.backgroundColor='';
		fnInitArr2.className='arrow-off';
		collection_hidden_ul.style.display='none';
	}	
	
	
	var arrow_span=document.getElementById('arrow_span');
	var arrow_li=document.getElementById('arrow_li');
	var fnInitArr=document.getElementById('fnInitArr');
	var shop_hidden_ul=document.getElementById('shop_hidden_ul');
	arrow_li.onmouseover=function(){
		fnInitArr.className='arrow-on';
		shop_hidden_ul.style.display='block';
	}
	arrow_li.onmouseout=function(){
		
		fnInitArr.className='arrow-off';
		fnInitArr.className='arrow-off';
		shop_hidden_ul.style.display='none';
	}
	shop_hidden_ul.onmouseover=function(){
		arrow_span.style.backgroundColor='white';
		fnInitArr.className='arrow-on';
		shop_hidden_ul.style.display='block';
	}
	shop_hidden_ul.onmouseout=function(){
		arrow_span.style.backgroundColor='';
		fnInitArr.className='arrow-off';
		shop_hidden_ul.style.display='none';
	}
}
$('#errSubmit').css('display','none');
	$('.div_err1_R').css('display','none');
var flag=true;
function showForm(){	
	if(flag){
		$('#errSubmit').css('display','block');
		$('.div_err1_R').css('display','block');
		flag=false;
	}else{
		$('#errSubmit').css('display','none');
		$('.div_err1_R').css('display','none');
		flag=true;
	}
	
}




function hideForm(){
	var model_id=$('.model_id').val();
	var old_model=$('.old_model').val();
	var new_model=$('.new_model').val();
	var thickness=$('.thickness').val();
	var internal_diameter=$('.internal_diameter').val();
	var external_diameter=$('.external_diameter').val();
	var weight=$('.weight').val();
	var brand_name=$('.brand_name').val();
	var grease_lubrication_speed=$('.grease_lubrication_speed').val();
	var oil_lubrication_speed=$('.oil_lubrication_speed').val();
	var cor=$('.cor').val();
	var cr=$('.cr').val();
	$.ajax({
			type: "POST",
			url: "/member/do.php",
			data: {ac:'model_edit',model_id:model_id,old_model:old_model,new_model:new_model,thickness:thickness,internal_diameter:internal_diameter,external_diameter:external_diameter,weight:weight,brand_name:brand_name,grease_lubrication_speed:grease_lubrication_speed,oil_lubrication_speed:oil_lubrication_speed,cor:cor,cr:cr},
			dataType: "text",
			success: function(data){
				if(data==1){
					alert('提交成功')
					$('#errSubmit').css('display','none');
					$('.div_err1_R').css('display','none');
				}
				else{
					console.log('提交失败')
				}
			}
		});
}
function StartDownTimer(b, c) {
    var a = [];
    $(b).each(function() {
        var d = $(this);
        a.push({
            "el": d.find(".last_time"),
            "time": d.find(".limitBuyRemainTime").val()
        });
    }), setInterval(function() {
        for (i = 0, j = a.length; i < j; i++) {
            var t = a[i], v = t.time, d = t.el, w = v / 1e3;
            if (w >= 0) {
                var e = Math.floor(w % 60), g = Math.floor(w / 60 % 60), s = Math.floor(w / 3600 % 24), u = Math.floor(w / 3600 / 24);
                g >= 0 && g <= 9 && (g = "0" + g), e >= 0 && e <= 9 && (e = "0" + e);
                var f = "<em>" + u + "</em>天<em>" + s + "</em>小时<em>" + g + "</em>分<em>" + e + "</em>秒";
                c && (f = c(f)), (s != 0 || g != 0 || e != 0) && $(d).html(f);
            }
            a[i].time -= 1e3;
        }
    }, 1e3);
}

function InitDownTimer(d, c) {
    var e;
    if (typeof c == "undefined" || c == undefined) {
        var a = new Date;
        e = new Array(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
    } else e = c.split("-");
    var b = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5]), f = b.getTime();
    $(d).each(function() {
        var k = $(this), q = k.find(".endTime").val();
        if (q != "0") {
            var r = q.split("-");
            if (r.length == 6) {
                var g = new Date(r[0], r[1] - 1, r[2], r[3], r[4], r[5]), h = g.getTime();
                k.find(".limitBuyRemainTime").val(h - f);
            }
        }
    });
}

$.ajaxSetup({
    "cache": !1
}), function() {
    function n(o) {
        var p = -o * c;
        $(".focus ul").stop(!0, !1).animate({
            "left": p
        }, 500), $(".focus .btn span").removeClass("on").eq(o).addClass("on");
    }
    function b() {
        $(".focus ul").append($(".focus ul li:first").clone());
        var o = -h * c;
        $(".focus ul").stop(!0, !1).animate({
            "left": o
        }, 500, function() {
            $(".focus ul").css("left", "0"), $(".focus ul li:last").remove();
        }), $(".focus .btn span").removeClass("on").eq(0).addClass("on");
    }
    var c = $(".focus").width(), h = $(".focus ul li").length, g = 0, a, d = "<div class='btnBg'></div><div class='btn'>";
    for (var e = 0; e < h; e++) d += "<span></span>";
    d += "</div>", $(".focus").append(d), $(".focus .btnBg").css("opacity", .5), $(".focus .btn span").mouseenter(function() {
        g = $(".focus .btn span").index(this), n(g);
    }).eq(0).trigger("mouseenter"), $(".focus ul").css("width", c * (h + 1)), $(".focus ul li div").hover(function() {
        $(this).siblings().css("opacity", .7);
    }, function() {
        $(".focus ul li div").css("opacity", 1);
    }), $(".focus").hover(function() {
        clearInterval(a);
    }, function() {
        a = setInterval(function() {
            g == h ? (b(), g = 0) : n(g), g++;
        }, 2500);
    }).trigger("mouseleave"), $(".J_Tabs").each(function() {
        function s(w) {
            q.removeClass("cur"), w.addClass("cur");
            var v = q.index(w);
            p.hide(), $(p.get(v)).show();
        }
        function u(v) {
            clearTimeout(r), r = setTimeout(function() {
                s(v), clearTimeout(r);
            }, t);
        }
        function o() {
            clearTimeout(r);
        }
        var t = 300, r = 0, q = $(this).find("a"), p = $(this).next().children("div");
        q.hover(function() {
            var v = $(this);
            u(v);
        }, function() {
            o();
        }), q.click(function() {
            var v = $(this);
            s(v);
        });
    }), $(".saleprice").bxSlider({
        "auto": !0,
        "autoControls": !1,
        "autoHover": !1,
        "pager": !1,
        "moveSlides": 1,
        "minSlides": 5,
        "maxSlides": 5,
        "slideWidth": 183,
        "speed": 500,
        "pause": 5e3,
        "nextSelector": "#slider-next",
        "prevSelector": "#slider-prev"
    });
    var k = $("#promisesdiv"), f = k.find("a"), m = k.find(".promises_detail"), l = k.find("li");
    f.hover(function() {
        m.show();
    }), l.hover(function() {
        var o = l.index(this), p = o + 1;
        m.find(".spot").removeClass("cur1"), m.find(".preferential").removeClass("cur2"), m.find(".post").removeClass("cur3"), $(this).addClass("cur" + p), m.find("p").hide().eq(o).show();
    }), m.mouseleave(function() {
        m.hide();
    }), $.sme_Ajax({
        "url": "/ajax/AjaxHandler.ashx?ct=319&r=" + Math.random(),
        "data": "",
        "success": function(o) {
            o.status == 1 && (InitDownTimer("#salepriceDiv dl", o.data), StartDownTimer("#salepriceDiv dl", function(p) {
                return "剩余" + p;
            }));
        }
    }), $(function() {
        $(".brand").show(), $(".brand-line1").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        }), $(".brand-line2").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        }), $(".brand-line3").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        }), $(".brand-line4").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        }), $(".brand-line5").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        }), $(".brand-line6").jCarouselLite({
            "visible": 6,
            "scroll": 3,
            "auto": 8e3,
            "speed": 1500
        });
    });
}();





