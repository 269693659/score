<?php
	header("content-type:text/html;charset=utf-8");

	$conn=new mysqli("localhost","root","","db_1803");

	if($conn->connect_error){
		die("连接失败".$conn->connect_error);
	}

	$conn->query("set names utf8");
?>