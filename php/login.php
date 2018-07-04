<?php
	include "public.php";

	$name=$_REQUEST['name'];

	$pwd=$_REQUEST['password'];

	$sql="SELECT * FROM `user_info` WHERE name='$name'";

	$res=mysqli_query($conn,$sql);

	$n = mysqli_num_rows($res);

	if($n ){
		$data=mysqli_fetch_assoc($res);

		if($data['password'] == $pwd){
			echo json_encode(array("code"=>0,"text"=>"成功"));
		}else{
			echo json_encode(array("code"=>1,"text"=>"密码错误"));
		}
	}else{
		echo json_encode(array("code"=>2,"text"=>"不存在"));
	}
?>