<?php
	header('Content-type: application/json');
	if(isset($_POST['item_1'])&& isset($_POST['item_2'])&& isset($_POST['item_3'])
	&& isset($_POST['item_4'])&& isset($_POST['item_5'])&& isset($_POST['item_6'])&& isset($_POST['item_7'])
	&& isset($_POST['item_8'])&& isset($_POST['item_9'])&& isset($_POST['item_10'])&& isset($_POST['item_11'])
	&& isset($_POST['item_12'])&& isset($_POST['item_13'])&& isset($_POST['item_14'])&& isset($_POST['item_15'])
	&& isset($_POST['item_16'])&& isset($_POST['item_17'])&& isset($_POST['item_18'])&& isset($_POST['item_19'])
	&& isset($_POST['item_20'])&& isset($_POST['item_21'])){
	  include 'connect.php';
	  include 'getIP.php';
	  $IP=getIpAddr();
	  date_default_timezone_set("UTC+8");
	  $time=date("Y-m-d H:i:s");
	  $input1=$_POST['item_1'];
	  $input2=$_POST['item_2'];
	  $input3=$_POST['item_3'];
	  $input4=$_POST['item_4'];
	  $input5=$_POST['item_5'];
	  $input6=$_POST['item_6'];
	  $input7=$_POST['item_7'];
	  $input8=$_POST['item_8'];
	  $input9=$_POST['item_9'];
	  $input10=$_POST['item_10'];
	  $input11=$_POST['item_11'];
	  $input12=$_POST['item_12'];
	  $input13=$_POST['item_13'];
	  $input14=$_POST['item_14'];
	  $input15=$_POST['item_15'];
	  $input16=$_POST['item_16'];
	  $input17=$_POST['item_17'];
	  $input18=$_POST['item_18'];
	  $input19=$_POST['item_19'];
	  $input20=$_POST['item_20'];
	  $input21=$_POST['item_21'];
	  $input22=$_POST['item_22'];
	  $input23=$_POST['item_23'];
	  $input24=$_POST['item_24'];
	  $input25=$_POST['item_25'];
	  $input26=$_POST['item_26'];
	  $input27=$_POST['item_27'];
	  $input28=$_POST['item_28'];
	  $input29=$_POST['item_29'];
	  $input30=$_POST['item_30'];
	  
	  $put=mysqli_query($con, "INSERT INTO dass VALUES (NULL, '$IP', '$time', '$input1', '$input2', '$input3', 
	  '$input4', '$input5', '$input6', '$input7', '$input8', '$input9', '$input10', '$input11', '$input12', '$input13', 
	  '$input14', '$input15', '$input16', '$input17', '$input18', '$input19', '$input20', '$input21', '$input22', '$input23', 
	  '$input24', '$input25', '$input26', '$input27', '$input28', '$input29', '$input30')");
	  if($put){
	  	 $_POST['status'] = 'success';
	  }else{
		 $_POST['status'] = 'error';
	  }
  }
  mysqli_close($con);
?>
