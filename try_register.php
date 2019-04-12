<?php
 $username = $_POST["usernm"];
 $password = $_POST["spasswd"];
 
 $result = register.php[$username, $password];
 
 if($result){
	 //pass anything needed
 
 
	 header("Location: PolyTalkShell.html");
 }
 else{
	 //pass to show error
 
	 header("Location: PoliTalkHome.html");
 }
?>