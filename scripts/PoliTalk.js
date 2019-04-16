var xhttpDeb = new XMLHttpRequest();

            xhttpDeb.open("POST", "/API/getDebates.php", false);
						xhttpDeb.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						var doinks = xhttpDeb.responseText;


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getDBConnection() {
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Bindphprsphpvphpntythrphpphp73",
	database: "fuck"
	});
	return con;
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function newArticle() {
	openTab(event, 'Articles');
	var articles = document.getElementById("Articles");
	var articleForm = document.getElementById("articleForm").innerHTML;
	articles.innerHTML = articleForm;
}

function addSource() {
	// number of source elements to append
	var childCount = ((document.getElementById("sourceContainer").childElementCount)/2);
	// container <div> where dynamic content will be placed
	var container = document.getElementById("sourceContainer");
	// values for current sources
	var values = [];
	for (i = 0; i < childCount; i++) {
		console.log("source" + i);
		values[i] = document.getElementById("source" + i).value;
	}
	// clear previous contents of the container
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i = 0 ; i <= childCount; i++){
		// append source label
		container.appendChild(document.createTextNode("Source " + (i+1) + " "));
		// create an input element, set its type, name, and id
		var input = document.createElement("input");
		input.type = "text";
		input.name = "source" + i;
		input.id = "source" + i;
		if (values[i] != '' && values[i] != null) {
			input.value = values[i];
		} else {
			input.value = '';
		}
		// append source input box
		container.appendChild(input);
		// append line break
		container.appendChild(document.createElement("br"));
	}
}

function removeSource(buttonID) {
	// get source container object
	container = document.getElementById("sourceContainer");
	// get count of its children
	childCount = (container.childElementCount/2);
	if (childCount == 1) {
		return false;
	} else {
		for (i = 0; i <= 2; i++) {
			container.removeChild(container.lastChild);
		}
		return true;
	}
}

function OnlineUser(n)
{
	this.name = n;
	this.picture = "images/Obama.jpg";
	this.node = document.createElement("li");
	this.node.appendChild(document.createTextNode(n));
	//this.node.addEventListener('click', showUser(this), false);
}

function OnlineUser(n, path)
{
	this.name = n;
	this.picture = path;
	this.node = document.createElement("li");
	this.node.appendChild(document.createTextNode(n));
	//this.node.addEventListener('click', showUser(this), false);
}

function newOnlineUser(n,path, id)
{

}

function test(){
var trump = new OnlineUser("Donald Trump", "images/Trump.png");
var list = document.getElementById("userList");
list.appendChild(trump.node);
trump.node.addEventListener('click', function(){
	showUser(trump)
  });
}

var stringResult = ["Donald Trump", "Donald Glover", "Hillary Clinton", "Michelle Obama", "Kirsten Gillibrand", "Beto O'Rourke", "John Hickenlooper", "Jay Inslee", "Bernie Sanders", "Amy Klobuchar", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Julian Castro", "Tulsi Gabbard", "John Delaney", "Wayne Messam", "Marianne Williamson", "Andrew Yang", "Pete Buttigieg", "Gonzalo Barrios", "Marco Rubio", "Ted Cruz", "George Bush", "Kanye West", "Dwayne Johnson", "Joanne Rowling"]

var placeHolderQueryResult = [];

function populateList(){
	//alert("We got it");
var test = new OnlineUser("This is a Test");
placeHolderQueryResult = [new OnlineUser("Donald Glover"), new OnlineUser("Hillary Clinton"), new OnlineUser("Michelle Obama"), new OnlineUser("Kirsten Gillibrand"), new OnlineUser("Beto O'Rourke"), new OnlineUser("John Hickenlooper"), new OnlineUser("Jay Inslee"), new OnlineUser("Bernie Sanders"), new OnlineUser("Amy Klobuchar"), new OnlineUser("Elizabeth Warren"), new OnlineUser("Cory Booker"), new OnlineUser("Kamala Harris"), new OnlineUser("Julian Castro"), new OnlineUser("Tulsi Gabbard"), new OnlineUser("John Delaney"), new OnlineUser("Wayne Messam"), new OnlineUser("Marianne Williamson"), new OnlineUser("Andrew Yang"), new OnlineUser("Pete Buttigieg"), new OnlineUser("Gonzalo Barrios"), new OnlineUser("Marco Rubio"), new OnlineUser("Ted Cruz"), new OnlineUser("George Bush"), new OnlineUser("Kanye West"), new OnlineUser("Dwayne Johnson"), new OnlineUser("Joanne Rowling"), new OnlineUser("Donald Trump")];
update(placeHolderQueryResult);
}

function update(userList)
{


	var physicalList = document.getElementById("userList");
	while(physicalList.hasChildNodes())
	{
		physicalList.removeChild(physicalList.childNodes[0]);
	}
	var defaultLength = 20;
	if(userList.length < defaultLength)
		defaultLength = userList.length;
	for(var x = 0; x < defaultLength; x++)
	{
		userList[x].node.addEventListener('click', (function(x)
		{	return function(){
				showUser(userList[x]);
			};


			}(x))
		);
		//alert("Event listener added!");
		physicalList.appendChild(userList[x].node);
  }
}

function submitArticle() {
	//get username stuff
	var username = getCookie(username)
	var userID = "<?php getIdByUsername(" + username + ")?>"
	//get values from document elements
	// title
	var aTitle = document.getElementById('articleTitle').value;
	// body
	var body = document.getElementById('articleText').value;
	// sources
	var container = document.getElementById('sourceContainer');
	var numSources = container.childCount/3;
	var sources = {}
	for (i = 0; i < numSources; i++) {
		sources[i] = document.getElementById("source" + i);
	}
	//open connection to database
	var mysql = require('mysql');
	var connection = getDBConnection();
	//sanitize?
	//submit to database
	connection.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var insertArticleSQL = "INSERT INTO articles (Title, Body, Poster) VALUES ('" + aTitle + "', '" + body + "', " + userID + ")"
		connection.query(insertArticleSQL, function (err, result) {
			if (err) throw err;
		});
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log("Result: " + result);
			var articleID = result;
		});
		if (document.getElementById('source0').value != "") {
			for (i = 0; i < sources.length; i++) {
				var UvaRL = document.getElementById('source' + i).value;
				insertSourceSQL = "INSERT INTO source (idArticle, Url) VALUES (" + articleID + ", '" + UvaRL + "')"
				connection.query(insertArticleSQL, function (err, result) {
					if (err) throw err;
				});
			}
		}
	});
	//close connection
	connection.end(); //might crash everything
	//confirmation message?
}

function newDiscussion()
{
	openTab(event, 'Discussions');
	var discussions = document.getElementById("Discussions");
	var discussionForm = document.getElementById("discussionForm").innerHTML;
	discussions.innerHTML = discussionForm;
}

function submitDiscussion() {
	//get username stuff
	var username = getCookie(username)
	var userID = "<?php getIdByUsername(" + username + ")?>"
	//get values from document elements
	// discussion title
	var dTitle = document.getElementById('discussionTitle').value;
	// user for
	var userFor = document.getElementById('userFor').value;
	// user against
	var userAgainst = document.getElementById('userAgainst').value;
	//open connection to database
	var mysql = require('mysql');
	var connection = getDBConnection();
	//sanitize?
	//submit to database
	connection.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO debates (Topic, For, Against) VALUES ('" + dTitle + "', '" + userFor + "', '" + userAgainst + "')"
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
		});
	});
	//close connection
	connection.end();
	//confirmation message?
}

function logOut()
{
	//alert("log out button works");
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	location.reload();
}

var placeHolderQueryResult = [];

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("discussionList");
const url = "/API/getDebates.php"; //insert api url when ready
fetch(url)
.then(function(response) {
	return response.json();
})
.then(function(myJson) {
	console.log(JSON.stringify(myJson));
});


function  updateText()
{
	var input = document.getElementById("userSearch").value;
	var newList = [];
	for(var x = 0; x < placeHolderQueryResult.length; x++)
	{
		//alert("checking querey result " + placeHolderQueryResult[x].name.substring(0, input.length) + " with " + input);
		if(placeHolderQueryResult[x].name.substring(0, input.length) == input){
			
			newList.push(placeHolderQueryResult[x]);
			//alert("Added " + placeHolderQueryResult[x].name + " to the list");
		}
	}
	update(newList);
}



function showUser(user)
{
	//alert(user.name);
	var hold = document.getElementById("searchMenu").innerHTML;
	document.getElementById("searchMenu").innerHTML = document.getElementById("otherUserMenu").innerHTML;
	document.getElementById("otherUserMenu").innerHTML = hold;
	document.getElementById("g").innerHTML = user.name;
	document.getElementById("h").src = user.picture;
	document.getElementById("f").addEventListener('click', function()
	{newDiscussion(user)}
	);
}

function switchBackToUsers()
{
	var hold = document.getElementById("searchMenu").innerHTML;
	document.getElementById("searchMenu").innerHTML = document.getElementById("otherUserMenu").innerHTML;
	document.getElementById("otherUserMenu").innerHTML = hold;
	update(placeHolderQueryResult);
}


/*function updateText() {
  var input = document.getElementById("userSearch").value;
  var newList = [];
  for (var x = 0; x < placeHolderQueryResult.length; x++) {
    var str = placeHolderQueryResult[x].substring(0, input.length);
    var result = str.search(new RegExp(input));
    var test = new RegExp(input, "i");
    console.log(test);
    //alert("checking querey result " + str + " with " + input);
    console.log(result);
    console.log("ya");
    if (test == str) {
      console.log("nah");
      newList.push(placeHolderQueryResult[x]);
    }
  }
  update(newList);
}*/

function getUserCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setName()
{
	var name = getUserCookie("username");
	document.getElementById("welcome").innerHTML = "Welcome " + name;
	//alert(document.getElementById("welcome").innerHTML);
}

function load()
{
	populateList();
	setName();
	test();
}


window.onload=load;
