$(function(){
	$(".category").mouseover(function(){  
		 $('.cate-list').css("display","block");
	});
	$(".category").mouseout(function(){  
		 $('.cate-list').css("display","none");
	}); 	
	//�������չ��
	$('.more').click(function(){
		if($('.more').text()=='����'){
			$('.recommended_brand').css('max-height','none');
			$('.more').text('����');
			$('.more').css('background','url(./images/pack_up.png) 38px 7px no-repeat');
		}else if($('.more').text()=='����'){
			$('.recommended_brand').css('max-height','95px');
			$('.more').text('����');
			$('.more').css('background','url(./images/pack_up.png) 38px -18px no-repeat');
		}
	});
});
function add_follow(user_id){
	if(user_id==0){
		alert('���ȵ�¼��');
		location.href='/member/login.php';
	}
	else{
		alert('��ע�ɹ�');
	}
}
function by_price(){
	sp = document.getElementById('start_price').value;
	ep = document.getElementById('end_price').value;
	p_url = "<?=$urler?>sp="+sp+"&ep="+ep;
	location.replace(p_url);
}

function ale(){
	alert("����ѯ����Ϣ���ύ�����ǻᾡ����ϵ��");
}