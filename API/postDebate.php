<?php
	require_once('config.php');

	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	/*
		BEGIN AUTHENTICATION SNIPPET
		* This code checks to make sure the players authentication token is valid for their submitted player ID
	*/
	if(!isset($_COOKIE["token"]) || !isset($_COOKIE["UserID"])) {
		die("NOT LOGGED IN");
	}
		
	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	$query = $connection->prepare("SELECT `AuthToken` FROM `User` WHERE idUser=?");
	$query->bind_param("d", $_COOKIE["UserID"]);
	$query->execute();
	$ServerAuthToken = $query->get_result();
	
	if(!$ServerAuthToken || $ServerAuthToken->num_rows == 0){
		die("NOT LOGGED IN");
	}
	
	$ServerAuthToken = $ServerAuthToken->fetch_assoc()["AuthToken"];
	$query->close();
	
	$TTL = 3600;
	$query = $connection->prepare("SELECT UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`AuthCreated`) FROM `mydb`.`User` WHERE `idUser` = ?");
	$query->bind_param("d", $_COOKIE["UserID"]);
	$query->execute();
	$query->bind_result($TimeElapsed);
	$query->fetch();
	$query->close();
	if($TimeElapsed === null || $TimeElapsed >= $TTL || strcmp($ServerAuthToken, $_COOKIE["token"]) != 0){
		die("NOT LOGGED IN");
	}
	/*
		END AUTHENTICATION SNIPPET
	*/
	die("we gud");
?>