<?php
 $username = $_POST["username"];
 $password = $_POST["password"];
 
 $result = login.php[$username, $password];
 
 if($result){
	 //pass anything needed
 
 
	 header("Location: PolyTalkShell.html");
 }
 else{
	 //pass to show error
 
	 header("Location: PoliTalkHome.html");
 }
 
?>