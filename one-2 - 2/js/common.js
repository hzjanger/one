$(function(){
	
	//登录输入框效果
	$('.form_text_ipt input').focus(function(){
		$(this).parent().css({
			'box-shadow':'0 0 3px #bbb',
		});
	});
    $(".form_text_ipt input").keydown(function(){
        $(".login_error").css("display","none");
        console.log(123);
    });
	$('.form_text_ipt input').blur(function(){
		$(this).parent().css({
			'box-shadow':'none',
		});
		//$(this).parent().next().hide();
	});
	
	//表单验证
	$('.form_text_ipt input').bind('input propertychange',function(){
		if($(this).val()==""){
			$(this).css({
				'color':'red',
			});
			$(this).parent().css({
				'border':'solid 1px red',
			});
			//$(this).parent().next().find('span').html('helow');
			$(this).parent().next().show();
		}else{
			$(this).css({
				'color':'#ccc',
			});
			$(this).parent().css({
				'border':'solid 1px #ccc',
			});
			$(this).parent().next().hide();
		}
	});
});

function doLogin() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/login",
        data: $('#form1').serialize(),
        success: function () {
            window.location.href="@routes.Applications.index()"
        },
        error : function () {
            //document.getElementById("txtHint").style.display = "block";
            $(".login_error").css("display","block");
            $("#txtHint").animate({
                left: '+=20px'
            },200)
                .animate({
                    left: "-=20px"
                },200)
        }
    });
}