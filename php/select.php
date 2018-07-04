<?php
	include "public.php";

	$sql="SELECT * FROM `score_list`";

	$res=mysqli_query($conn,$sql);

	$data=array(array('code'=>1),array());

	while($arr=mysqli_fetch_assoc($res)){
		array_push($data[1], $arr);
	}

	echo json_encode($data);

?>