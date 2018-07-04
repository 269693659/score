<?php
	include "public.php";

	$id=$_REQUEST["id"];

	$sql="DELETE FROM `score_list` WHERE id='$id='";

	$rows=mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array("code"=>1,"text"=>"成功"));
	}else{
		echo json_encode(array("code"=>0,"text"=>"失败"));
	}


?>