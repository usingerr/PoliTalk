<?php
 $username = $_POST["username"];
 $password = $_POST["password"];
 
 $result = login.php[$username, $password];
 
 if($result){
	 //pass anything needed
 
 
	 header("Location: PoliTalk.html");
 }
 else{
	 //pass to show error
 
	 header("Location: PoliTalkHome.html");
 }
 
?>