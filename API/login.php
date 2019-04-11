<?php
	require_once('config.php');
	//make sure a username and password was submitted
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
	//Generate an authentication token
	$token = bin2hex(openssl_random_pseudo_bytes(8));
	
	//Grab the password hash of the account the user is signing in to
	$query = $connection->prepare("SELECT `PHash` FROM `User` WHERE Name=?");
	$query->bind_param("s", $_POST["username"]);
	$query->execute();
	$account = $query->get_result();
	
	//if the account the user is trying to sign in to exists
	if ($account->num_rows > 0) {
		$row = $account->fetch_assoc();
		$hash = $row["PHash"];
		//Check if the password is correct
		if(password_verify($_POST["password"], $hash)){
			//Generate a new token
			$cookie_name = "token";
			$cookie_value = $token;
			$TTL = 3600; //login valid for one hour
			//Store the token in the users cookies
			setcookie("token", $token, time()+$TTL, "/");
			$query->close();
					
			//Grab the accounts UserID, and stores it in the users cookies
			$AccountExistQuery = $connection->prepare("SELECT `idUser` FROM `User` WHERE Name=?");
			$AccountExistQuery->bind_param("s", $_POST["username"]);
			$AccountExistQuery->execute();
			$AccountExistQuery->bind_result($UserID);
			$AccountExistQuery->fetch();
			$AccountExistQuery->close();
			setcookie("UserID", $UserID, time()+$TTL, "/");
			
			//Update the players authentication token and authentication time in the database
			$query = $connection->prepare("UPDATE `User` SET `AuthToken` = ?, `AuthCreated` = NOW() WHERE `idUser` = ?");
			$query->bind_param("sd", $token, $PlayerID);
			$query->execute();
			
			echo("True");
		}else{
			die("False");
		}
	} else {
		die("False");
	}
	$connection->close();
?>