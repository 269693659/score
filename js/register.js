function Register(){
	this.uname=$("#username");
	this.pwd=$("#password");
	this.btn=$(".btn");
	this.init();
}
$.extend(Register.prototype,{
	init:function(){
		this.btnClick();
	},
	btnClick:function(){
		this.btn.on("click",$.proxy(this.setAjax,this))
	},
	setAjax:function(){
		var nameVal=this.uname.val();
		var pwdVal=this.pwd.val();

		$.ajax({
			type:'post',
			url:'../php/register.php',
			data:{name:nameVal,password:pwdVal},
			dataType:'json',
			success:$.proxy(this.handleAjax,this)
		})
	},
	handleAjax:function(data){
		var data=data.code;
		if(data==1){
			alert("注册成功")
			location.href="../html/login.html"
		}else{
			alert("注册失败")
		}
	}
})
new Register();