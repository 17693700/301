window.onload = function(){
    var account = document.getElementById('account');
    if(account.value=='') {
        account.focus();
    } else {
        document.getElementById('password').focus();
    }
}

function verify(the){
    var tip = document.getElementById('feedback');
    
    if(the.account.value==""){ 
        tip.innerHTML="请输入账号！";
        the.account.focus();
        return false;
    }
    if(the.password.value==""){ 
        tip.innerHTML="请输入密码！";
        the.password.focus();
        return false;
    } 
}