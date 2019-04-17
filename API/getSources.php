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
	
	/*$query = "SELECT MAX(idArticle) FROM `Article`;";
	$max_id_result = $connection->query($query);
	$IDToUse = $max_id_result->fetch_row()[0]+1;
	$max_id_result->free();
	
	$query = $connection->prepare("INSERT INTO `Article` (`idArticle`, `Title`, `Body`, `Poster`, `Date`) VALUES(?, ?, ?, ?, NOW())");
	$query->bind_param("dssd", $IDToUse, $_POST["Title"], $_POST["Body"], $_COOKIE["UserID"]);
	$query->execute();
	$query->close();
	
	$sourceData = json_decode($_POST["Sources"]);
	foreach($sourceData as $source)
	{
		$query = $connection->prepare("INSERT INTO `mydb`.`Source` (`idArticle`, `Url`) VALUES (?, ?)");
		$query->bind_param("ds", $IDToUse, $source);
		$query->execute();
		$query->close();
		echo($source);
	}*/
	if ($_POST["ArticleID"] === "" || is_null($_POST["ArticleID"])){
		die("False");
	}
	//$query = $connection->prepare("SELECT * FROM `Article` JOIN `mydb`.`Source` on `Article`.idArticle = `mydb`.`Source`.idArticle ORDER BY `Article`.idArticle DESC");
	$query = $connection->prepare("SELECT Url FROM `mydb`.`Source` WHERE idArticle = ? ORDER BY idArticle DESC");
	$query->bind_param("d", $_POST["ArticleID"]);
	$query->execute();
	$result = $query->get_result();
	
	$articleArr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	
	$query->close();
	
	echo json_encode($articleArr);
?>