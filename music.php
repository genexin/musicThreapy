<?php
	header('Content-type: application/json');
	if(isset($_POST['input'])){
	  include 'connect.php';
	  include 'getIP.php';
	  $IP=getIpAddr();
	  date_default_timezone_set("UTC+8");
	  $time=date("Y-m-d H:i:s");
	  $comment=$_POST['input'];
	  $put=mysqli_query($con, "INSERT INTO comment VALUES (NULL, '$IP', '$time', '$comment')");
	  if($put){
	  	 $_POST['status'] = 'success';
	  }else{
		 $_POST['status'] = 'error';
	  }
  }
  mysqli_close($con);
?>
