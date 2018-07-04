function Login(){
	this.uname=$("#username");
	this.pwd=$("#password");
	this.btn=$(".btn");
	this.init();
}
$.extend(Login.prototype,{
	init:function(){
		this.btnClick();
	},
	btnClick:function(){
		this.btn.on("click",$.proxy(this.handlebBtnClick,this))
	},
	handlebBtnClick:function(){
		var nameVal=this.uname.val();
		var pwdVal=this.pwd.val();
		$.ajax({
			type:'post',
			url:'../php/login.php',
			dataType:'json',
			data:{name:nameVal,password:pwdVal},
			success:$.proxy(this.handleAjax,this)
		})
	},
	handleAjax:function(data){
		var data=data.code;
		if(data==0){
			alert("登录成功");
			location.href="../html/list.html"
		}
		else if(data==1){
			alert("密码错误")
		}else{
			alert("用户名不存在")	
		}
	}
})
new Login();