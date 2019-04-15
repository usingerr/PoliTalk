<?php
	require_once('config.php');

	if ($_POST["id"] === "" || is_null($_POST["id"])){
		echo("-1");
		die();
	}

	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	
	//Select any players with the name that a user is trying to register
	$AccountExistQuery = $connection->prepare("SELECT `Name` FROM `User` WHERE idUser=?");
	$AccountExistQuery->bind_param("s", $_POST["id"]);
	$AccountExistQuery->execute();
	$AccountExistQuery->bind_result($userName);
	$AccountExistQuery->fetch();
	$AccountExistQuery->close();
	
	if(is_null($userName))
	{
		echo(-1);
	}else{
		echo($userName);
	}
	$connection->close();
?>