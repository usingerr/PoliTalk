<?php
	require_once('config.php');

	$connection = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
	if ($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	
	/*
		BEGIN AUTHENTICATION SNIPPET
		* This code checks to make sure the users authentication token is valid for their submitted user ID
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
	
	if ($_POST["For"] === "" || is_null($_POST["For"])){
		die("False");
	}
	if ($_POST["Against"] === "" || is_null($_POST["Against"])){
		die("False");
	}
	if ($_POST["Topic"] === "" || is_null($_POST["Topic"])){
		die("False");
	}
	
	$query = "SELECT MAX(idDebates) FROM `Debates`;";
	$max_id_result = $connection->query($query);
	$IDToUse = $max_id_result->fetch_row()[0]+1;
	$max_id_result->free();
	
	$query = $connection->prepare("INSERT INTO `Debates` (`idDebates`, `Topic`, `For`, `Against`, `Date`) VALUES(?, ?, ?, ?, NOW())");
	$query->bind_param("dsdd", $IDToUse, $_POST["Topic"], $_POST["For"], $_POST["Against"]);
	$query->execute();
	$query->close();
	die("True");
?>