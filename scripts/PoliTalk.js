window.onload = load;

function load() {
  //alert("In Load");
  populateList();
  setName();
  //testAdd();
  populateArticles();
  //populateDebates();
  makeCollapse();
}

function populateList() {
  //alert("We got it");
  var test = new OnlineUser("This is a Test");
  placeHolderQueryResult = [
    new OnlineUser("Donald Glover"),
    new OnlineUser("Hillary Clinton"),
    new OnlineUser("Michelle Obama"),
    new OnlineUser("Kirsten Gillibrand"),
    new OnlineUser("Beto O'Rourke"),
    new OnlineUser("John Hickenlooper"),
    new OnlineUser("Jay Inslee"),
    new OnlineUser("Bernie Sanders"),
    new OnlineUser("Amy Klobuchar"),
    new OnlineUser("Elizabeth Warren"),
    new OnlineUser("Cory Booker"),
    new OnlineUser("Kamala Harris"),
    new OnlineUser("Julian Castro"),
    new OnlineUser("Tulsi Gabbard"),
    new OnlineUser("John Delaney"),
    new OnlineUser("Wayne Messam"),
    new OnlineUser("Marianne Williamson"),
    new OnlineUser("Andrew Yang"),
    new OnlineUser("Pete Buttigieg"),
    new OnlineUser("Gonzalo Barrios"),
    new OnlineUser("Marco Rubio"),
    new OnlineUser("Ted Cruz"),
    new OnlineUser("George Bush"),
    new OnlineUser("Kanye West"),
    new OnlineUser("Dwayne Johnson"),
    new OnlineUser("Joanne Rowling"),
    new OnlineUser("Donald Trump")
  ];
  update(placeHolderQueryResult);
}

function setName() {
  var name = getUserCookie("username");
  document.getElementById("welcome").innerHTML = "Welcome " + name;
  //alert(document.getElementById("welcome").innerHTML);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function openTab(evt, tabName) {
  //var checkit = document.getElementById("middleStuff").childCount;
  //console.log(checkit);
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
  openTab(event, "Articles");
  var articles = document.getElementById("Articles");
  var articleForm = document.getElementById("articleForm").innerHTML;
  articles.innerHTML = articleForm;
}

function cancelArticle() {
  window.location.reload();
  openTab(event, "Articles");
}

function addSource() {
  // number of source elements to append
  var childCount =
    document.getElementById("sourceContainer").childElementCount / 2;
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
  for (i = 0; i <= childCount; i++) {
    // append source label
    container.appendChild(document.createTextNode("Source " + (i + 1) + " "));
    // create an input element, set its type, name, and id
    var input = document.createElement("input");
    input.type = "text";
    input.name = "source" + i;
    input.id = "source" + i;
    if (values[i] != "" && values[i] != null) {
      input.value = values[i];
    } else {
      input.value = "";
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
  childCount = container.childElementCount / 2;
  if (childCount == 1) {
    return false;
  } else {
    for (i = 0; i <= 2; i++) {
      container.removeChild(container.lastChild);
    }
    return true;
  }
}





function cancelDiscussion() {
  location.reload();
  openTab(event, "Discussions");
}


function OnlineUser(n) {
  this.name = n;
  this.picture = "images/default.png";
  this.node = document.createElement("li");
  this.node.appendChild(document.createTextNode(n));
  //this.node.addEventListener('click', showUser(this), false);
}

function OnlineUser(n)
{
	this.name = n;
	this.picture = "images/default_image.png";
	this.node = document.createElement("li");
	this.node.appendChild(document.createTextNode(n));
	//this.node.addEventListener('click', showUser(this), false);
}

/*function OnlineUser(n, path)
{
	this.name = n;
	this.picture = path;
	this.node = document.createElement("li");
	this.node.appendChild(document.createTextNode(n));
	//this.node.addEventListener('click', showUser(this), false);
	alert("path received")
}*/

function test(){
var trump = new OnlineUser("Donald Trump");
var list = document.getElementById("userList");
list.appendChild(trump.node);
trump.node.addEventListener('click', function(){
	showUser(trump);
  });
}

var stringResult = [
  "Donald Trump",
  "Donald Glover",
  "Hillary Clinton",
  "Michelle Obama",
  "Kirsten Gillibrand",
  "Beto O'Rourke",
  "John Hickenlooper",
  "Jay Inslee",
  "Bernie Sanders",
  "Amy Klobuchar",
  "Elizabeth Warren",
  "Cory Booker",
  "Kamala Harris",
  "Julian Castro",
  "Tulsi Gabbard",
  "John Delaney",
  "Wayne Messam",
  "Marianne Williamson",
  "Andrew Yang",
  "Pete Buttigieg",
  "Gonzalo Barrios",
  "Marco Rubio",
  "Ted Cruz",
  "George Bush",
  "Kanye West",
  "Dwayne Johnson",
  "Joanne Rowling"
];

var placeHolderQueryResult = [];

function update(userList)
{

	//for(var y = 0; y < userList.length; y++)
	//{
		//alert(userList[y].picture);
	//}
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
		//alert(userList[x].picture);
		userList[x].node.addEventListener('click', (function(x)
		{	return function(){
				showUser(userList[x]);
			};


			}(x))
		);
		//alert("Event listener added!");
		physicalList.appendChild(userList[x].node);
  }
  /*for(var x = 0; x < defaultLength; x++)
	(function(x){
		userList[x].node.addEventListener('click', (function(x)
		{	return function(){
				showUser(userList[x]);
			};


			})(x);
		);
		//alert("Event listener added!");
		physicalList.appendChild(userList[x].node);
	})(x);*/
}

function submitArticle() {
	//get values from document elements
	// title
	var aTitle = document.getElementById("articleTitle").value;
	console.log("title: " + aTitle);
	// body
	var body = document.getElementById("articleText").value;
	console.log("body: " + body);
	// sources
	var container = document.getElementById("sourceContainer");
	var numSources = container.childElementCount/2;
	var sources = [];
	var sourceText = "[";
	if (!(document.getElementById("source0").value == "" && numSources == 1)) {
		for (var i = 0; i < numSources; i++) {
			var source = document.getElementById("source" + i).value;
			sourceText += '"' + source + '"';
			//sources.push(document.getElementById("source" + i).value);
			if (i != (numSources - 1)) {
				sourceText += ',';
			} else {
				sourceText += ']';
			}
		}
		console.log(sourceText);
		
	}
	// submit
	var xhttpArticle = new XMLHttpRequest();
					xhttpArticle.open("POST", "/API/postArticle.php", false);
					xhttpArticle.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhttpArticle.send("Title=" + aTitle + "&Body=" + body + "&Sources=" + sourceText);
		var didSubmit = xhttpArticle.responseText;
	if (didSubmit == "True") {
		alert("Article posted!");
	} else if (didSubmit == "NOT LOGGED IN") {
		alert("Must be logged in to submit article");
	} else {
		alert("pls");
	}
}

function newDiscussion(otherUser = "") {
	openTab(event, "Discussions");
	var discussions = document.getElementById("Discussions");
	var discussionForm = document.getElementById("discussionForm").innerHTML;
	discussions.innerHTML = discussionForm;
	document.getElementById("userFor").value = otherUser;
}

function swap() {
	var user1 = document.getElementById("userFor").value;
	var user2 = document.getElementById("userAgainst").value;
	
	document.getElementById("userFor").value = user2;
	document.getElementById("userAgainst").value = user1;
}

function submitDiscussion() {
	//get username stuff
	var username = getCookie("UserID");
	//get values from document elements
	// discussion title
	var dTitle = document.getElementById('discussionTitle').value;
	// user for
	var userFor = document.getElementById('userFor').value;
	var xhttpFor = new XMLHttpRequest();
					xhttpFor.open("POST", "/API/getIdByUsername.php", false);
					xhttpFor.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhttpFor.send("username=" + userFor);
		var userForID = xhttpFor.responseText;
	// user against
	var userAgainst = document.getElementById('userAgainst').value;
	var xhttpAgainst = new XMLHttpRequest();
					xhttpAgainst.open("POST", "/API/getIdByUsername.php", false);
					xhttpAgainst.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhttpAgainst.send("username=" + userAgainst);
		var userAgainstID = xhttpAgainst.responseText;
	//submit to database
	var xhttpPost = new XMLHttpRequest();
					xhttpPost.open("POST", "/API/postDebate.php", false);
					xhttpPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhttpPost.send("Topic=" + dTitle + "&For=" + userForID + "&Against=" + userAgainstID);
		var didSubmit = xhttpPost.responseText;
			if (didSubmit == "NOT LOGGED IN") {
					alert("Must be logged in to submit discussion");
			} else if (didSubmit == "True") {
					alert("Discussion posted!");
			} else {
					alert("pls");
			}
	//confirmation message?
}

function logOut() {
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

/*const ul = document.getElementById("discussionList");
const url = "/API/getDebates.php"; //insert api url when ready
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });*/


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
	//alert(user.name);
	document.getElementById("h").src = user.picture;
	//alert(user.picture);
	document.getElementById("f").addEventListener('click', function()
	{newDiscussion(user)}
	);
}

function switchBackToUsers() {
  var hold = document.getElementById("searchMenu").innerHTML;
  document.getElementById("searchMenu").innerHTML = document.getElementById(
    "otherUserMenu"
  ).innerHTML;
  document.getElementById("otherUserMenu").innerHTML = hold;
  update(placeHolderQueryResult);
}

function getUserCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function populateArticles() {
  let listArticles = document.getElementById("articleList");
  listArticles.length = 0;

  const urlArt = "/API/getArticles.php";

  const request = new XMLHttpRequest();
  request.open("POST", urlArt, true);

  request.onload = function() {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      alert(data);
      let button;
      let div;
      let p;
      let title;
      let body;
      for (let i = 0; i < data.length; i++) {
        title = "Test #" + i;
        button = document.createElement("BUTTON");
        button.innerHTML = data[i].Title.value; //insert JSON
        button.className = "collapsible";
        div = document.createElement("DIV");
        div.className = "content";
        p = document.createElement("P");
        p.innerHTML = data[i].Body.value; //insert JSON
        div.appendChild(p);
        listArticles.appendChild(button);
        listArticles.appendChild(div);
        makeCollapse();
      }
    } else {
      // Reached the server, but it returned an error
    }
  };

  request.onerror = function() {
    console.error("An error occurred fetching the JSON from " + urlArt);
  };

  request.send();
}

function populateDiscussions() {
  let listDiscussions = document.getElementById("discussionList");
  listDiscussions.length = 0;

  const urlArt = "\API\getArticles.php";

  const request = new XMLHttpRequest();
  request.open("POST", urlArt, true);

  request.onload = function() {
    if (request.status === 200) {
    } else {
      // Reached the server, but it returned an error
    }
  };

  request.onerror = function() {
    console.error("An error occurred fetching the JSON from " + urlArt);
  };

  request.send();
}

/*function testAdd() {


    
let listArticles = document.getElementById('articleList');
listArticles.length = 0;

      let button;
      let div;
      let p;
      let title;
      let body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut";
      for (let i = 0; i < 10; i++) {
        title = "Test #" + i;
        button = document.createElement('BUTTON');
        button.innerHTML = title; //JSON
        button.className = "collapsible";
        div = document.createElement('DIV');
        div.className = "content";
        p = document.createElement('P');
        p.innerHTML = body + " " + i; //JSON
        div.appendChild(p);
        listArticles.appendChild(button);
        listArticles.appendChild(div);
        console.log("Article " + i + " " + listArticles.innerHTML);
        makeCollapse();

      }
    }*/

function makeCollapse() {
  var coll = document.getElementsByClassName("collapsible");
  var j;
  for (j = 0; j < coll.length; j++) {
    coll[j].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
