$(function(){
	$(".category").mouseover(function(){  
		 $('.cate-list').css("display","block");
	});
	$(".category").mouseout(function(){  
		 $('.cate-list').css("display","none");
	}); 	
	//点击收起展开
	$('.more').click(function(){
		if($('.more').text()=='更多'){
			$('.recommended_brand').css('max-height','none');
			$('.more').text('收起');
			$('.more').css('background','url(./images/pack_up.png) 38px 7px no-repeat');
		}else if($('.more').text()=='收起'){
			$('.recommended_brand').css('max-height','95px');
			$('.more').text('更多');
			$('.more').css('background','url(./images/pack_up.png) 38px -18px no-repeat');
		}
	});
});
function add_follow(user_id){
	if(user_id==0){
		alert('请先登录。');
		location.href='/member/login.php';
	}
	else{
		alert('关注成功');
	}
}
function by_price(){
	sp = document.getElementById('start_price').value;
	ep = document.getElementById('end_price').value;
	p_url = "<?=$urler?>sp="+sp+"&ep="+ep;
	location.replace(p_url);
}

function ale(){
	alert("您的询价信息已提交，我们会尽快联系您");
}