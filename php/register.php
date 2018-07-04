<?php
 	include "public.php";

 	$name=$_REQUEST['name'];

 	$pwd=$_REQUEST['password'];

 	$sql="INSERT INTO `user_info`( `name`, `password`) VALUES ('$name','$pwd')";

 	$rows=mysqli_query($conn,$sql);

 	if($rows){
 		echo json_encode(array("code"=>1,"text"=>"成功"));
 	}else{
 		echo json_encode(array("code"=>0,"text"=>"失败"));
 	}
?>