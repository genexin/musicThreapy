<?php
	$con = mysqli_connect("localhost", "genexin", "19860614zy", "music_therapy");
	if(!$con){
		die('Could not connect.');
	}
	mysqli_query("SET NAMES 'utf8'");
?>