<?php
	require_once('config.php');
	
	//make sure a password and username was submitted
	if ($_POST["password"] === "" || is_null($_POST["password"])){
		die("False");
	}
	if ($_POST["username"] === "" || is_null($_POST["username"])){
		die("False");
	}

	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	//find the next UserID to use
	$query = "SELECT MAX(idUser) FROM `User`;";
	$max_id_result = $connection->query($query);
	$IDToUse = $max_id_result->fetch_row()[0]+1;
	$max_id_result->free();
	
	//Select any players with the name that a user is trying to register
	$AccountExistQuery = $connection->prepare("SELECT `idUser` FROM `User` WHERE Name=?");
	$AccountExistQuery->bind_param("s", $_POST["username"]);
	$AccountExistQuery->execute();
	$AccountExistQuery->bind_result($UserID);
	$AccountExistQuery->fetch();
	$AccountExistQuery->close();
	//If the username is already registered, output an error message to screen
	if ($UserID > 0) {
		die("False");
	} else {
		//Otherwise calculate a password hash, and add a new user
		$hashed = password_hash($_POST["password"], PASSWORD_DEFAULT);
		$query = $connection->prepare("INSERT INTO `User` (`Name`, `PHash`, `idUser`) VALUES(?, ?, ?)");
		$query->bind_param("ssd", $_POST["username"], $hashed, $IDToUse);
		$query->execute();
		$query->close();
	}
	$connection->close();
	die("True");
?>