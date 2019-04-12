function try_login()
{
	document.cookie = "username=Barak Obama";
	var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/API/login.php", false);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("username=Barak Obama");
	xhttp.send("password=goodPassword");
    alert(xhttp.responseText);
	window.location.replace("PolyTalkShell.html");
	
}

			

function try_register()
{
	
}