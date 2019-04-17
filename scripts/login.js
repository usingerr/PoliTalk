function try_login()
{
	
	var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/API/login.php", false);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var user = document.getElementById("login-username").value;
	var pass = document.getElementById("login-password").value;
    xhttp.send("username=" + user + "&password=" + pass);
    var response = xhttp.responseText;
	
	if(response == "False"){
		document.getElementById("login-alert").style = "";
	}else{
		document.cookie = "username=" + user;
		window.location.replace("PoliTalk.html");
	}	
}

			

function try_register()
{
	
}