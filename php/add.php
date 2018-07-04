<?php
	include "public.php";

	$name=$_REQUEST['uname'];

	$scroe=$_REQUEST['uscroe'];

	$mack=$_REQUEST['umack'];

	$sql="INSERT INTO `score_list`(`score`, `name`, `mark`) VALUES ('$scroe','$name','$mack')";

	$rows=mysqli_query($conn,$sql);
 
	if($rows){
		echo json_encode(array("code"=>1,"text"=>"成功"));
	}else{
		echo json_encode(array("code"=>0,"text"=>"失败"));
	}
?>