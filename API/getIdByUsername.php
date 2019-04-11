<?php
	require_once('config.php');

	if ($_POST["username"] === "" || is_null($_POST["username"])){
		echo("-1");
		die();
	}

	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	
	//Select any players with the name that a user is trying to register
	$AccountExistQuery = $connection->prepare("SELECT `idUser` FROM `User` WHERE Name=?");
	$AccountExistQuery->bind_param("s", $_POST["username"]);
	$AccountExistQuery->execute();
	$AccountExistQuery->bind_result($UserID);
	$AccountExistQuery->fetch();
	$AccountExistQuery->close();
	
	//If the username is already registered, output an error message to screen
	if ($UserID > 0) {
		global $UserID;
		echo($UserID);
	} else {
		echo("-1");
	}
	$connection->close();
?>