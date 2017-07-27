//询价按钮闪动
	var num=$('.width1').val();
	function add1(){
		num++;
		$('.width1').val(num);
		$('#whouse_id').val(num);
	}
	// 商品数量加
	function min1(){
		if(num<=1){
			return;
		}else{
			num--;
			$('.width1').val(num);
			$('#whouse_id').val(num);
		}	
	}
	
	//商品数量减
// window.setInterval(fade,2000);

function fade(){
	$(".enquiry").fadeOut(111);
	$(".enquiry").fadeIn(222);
}
	
function ale(){
	alert("您的询价信息已提交，我们会尽快联系您");
}

function buycart(shop_id,goods_id){
	var real_price = $("#real_price").val(); 
	var buy_number = $("#qty").val(); 
	var urler = '';
	$("input[id^=v_f_]").each(function(){
		urler += "&fields[]="+$(this).val();
	}); 

	var cart_url = '/member/do.php?ac=cart_add&shop_id='+shop_id+'&goods_id='+goods_id+'&buy_number='+buy_number+'&real_price='+real_price+urler;

	location.href=cart_url;
}

function typeof_price(obj, field_id, field_item_id, field_name, field_item_name){ 

	$("#f"+field_id).children("li").children("a").attr('class', ''); 

	obj.className = "hover";
 
	$("#v_field_item_"+field_id).val('f'+field_id+'i'+field_item_id);
 
	$("#v_f_"+field_id).val(field_name+'/'+field_item_name);
  
	var join_array = new Array();
	var n = 0;
	$(".v_field_item").each(function(){
		if($(this).val()!=''){
			join_array[n] = $(this).val();
			n++;
		}
	}); 

	join_array.sort(); 
	var tmp = '';
	for(var m=0; m<join_array.length; m++){  
		tmp += join_array[m];
	}

	var is_typeof = true;
	try {
	   typeof(eval('v_'+tmp));
	} catch(err) {
	   is_typeof = false;
	} 
	
	if(is_typeof == true){
		if(typeof(eval('v_'+tmp))=='number'){
			var this_real_price = eval('v_'+tmp); 
			$("#real_price").val(this_real_price);

			if(!/\./.test(this_real_price)){
				this_real_price += '.00';
			}
			$("#real_price_box").html(this_real_price); 
		} 
	} else {
		var src_real_price = $("#src_real_price").val();

		$("#real_price").val(src_real_price);

		if(!/\./.test(src_real_price)){
				src_real_price += '.00';
			}
		$("#real_price_box").html(src_real_price); 
	}

	return false;
}

function jg(obj, field_id, field_item_id, field_name, field_item_name){ 
 
		$("#real_price").val(field_item_id);
	$("#real_price_box").html(field_item_id); 

	$("#f"+field_id).children("li").children("a").attr('class', ''); 

	obj.className = "hover";
 
	$("#v_field_item_"+field_id).val('f'+field_id+'i'+field_item_id);
 
	$("#v_f_"+field_id).val(field_name+'/'+field_item_name);
 

	return false;
}

function add_collection(type,shop_id,goods_id,user_id){
	if(user_id==0){
		alert('请先登录。');
		location.href='/member/login.php';
	}
	else{
		$.ajax({
			type: "POST",
			url: "/member/do.php",
			data: {ac:'add_collection_ajax',type:type,shop_id:shop_id,goods_id:goods_id,user_id:user_id},
			dataType: "text",
			success: function(data){
				var content='';
				content='<p class="col_p">';
				if(data==1){//商品收藏成功
					content+='<span class="span1">';
					content+='成功加入<a href="">收藏夹！</a>';
					content+='</span>';
				}else if(data==2){//商品收藏失败
					content+='<span class="span2">';
					content+='已经<a href="">收藏</a>过此宝贝！';
					content+='</span>';				
				}
				else if(data==3){//店铺收藏成功
					content+='<span class="span1">';
					content+='成功加入<a href="">收藏夹！</a>';
					content+='</span>';			
				}
				else if(data==4){//商品收藏失败
					content+='<span class="span2">';
					content+='已经<a href="">收藏</a>过此店铺！';
					content+='</span>';				
				}
				else if(data==5){//官方自营
					content+='<span class="span2">';
					content+='官方自营';
					content+='</span>';				
				}
				content+='</p>';
				content+=$('#and_like').html();
						
				layer.open({
					type: 1,
					title:['','background-color:white;border-bottom:none;'],
					area: ['600px', '350px'],
					shadeClose: true, //点击遮罩关闭
					content: '<div class="col_res">'+content+'</div>'
				});	
			}
		}); 
	}
}
