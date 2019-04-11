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

function defaultTab() {
	document.getElementById("defaultOpen").click();
}

function newArticle() {
	var articles = document.getElementById("Articles");
	var articleForm = document.getElementById("articleForm").innerHTML;
	articles.innerHTML = articleForm;
}

function newDiscussion()
{
	alert("Discussion button works");
}

function newDiscussion(user)
{
	//alert("You can start a discussion with " + OnlineUser.name);
}

function logOut()
{
	alert("log out button works");
}

function OnlineUser(n)
{
	this.name = n;
	this.picture = "images/defaultImage.png";
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
var test = new OnlineUser("This is a Test");
placeHolderQueryResult = [test, new OnlineUser("Donald Trump"), new OnlineUser("Donald Glover"), new OnlineUser("Hillary Clinton"), new OnlineUser("Michelle Obama"), new OnlineUser("Kirsten Gillibrand"), new OnlineUser("Beto O'Rourke"), new OnlineUser("John Hickenlooper"), new OnlineUser("Jay Inslee"), new OnlineUser("Bernie Sanders"), new OnlineUser("Amy Klobuchar"), new OnlineUser("Elizabeth Warren"), new OnlineUser("Cory Booker"), new OnlineUser("Kamala Harris"), new OnlineUser("Julian Castro"), new OnlineUser("Tulsi Gabbard"), new OnlineUser("John Delaney"), new OnlineUser("Wayne Messam"), new OnlineUser("Marianne Williamson"), new OnlineUser("Andrew Yang"), new OnlineUser("Pete Buttigieg"), new OnlineUser("Gonzalo Barrios"), new OnlineUser("Marco Rubio"), new OnlineUser("Ted Cruz"), new OnlineUser("George Bush"), new OnlineUser("Kanye West"), new OnlineUser("Dwayne Johnson"), new OnlineUser("Joanne Rowling")];
}

function update(userList)
{

	
	var physicalList = document.getElementById("userList");
	while(physicalList.hasChildNodes())
	{
		physicalList.removeChild(physicalList.childNodes[0]);
	}
	var defaultLength = 10;
	if(userList.length < defaultLength)
		defaultLength = userList.length;
	for(var x = 0; x < defaultLength; x++)
	{
		
		userList[x].node.addEventListener('click', function()
		{
			showUser(userList[x])
			}
		);
		physicalList.appendChild(userList[x].node);
	}
}

function  updateText()
{
	var input = document.getElementById("userSearch").value;
	var newList = [];
	for(var x = 0; x < placeHolderQueryResult.length; x++)
	{
		//alert("checking querey result " + placeHolderQueryResult[x].name.substring(0, input.length) + " with " + input);
		if(placeHolderQueryResult[x].name.substring(0, input.length) == input){
			
			newList.push(placeHolderQueryResult[x]);
			//alert("added an object to the array");
		}
	}
	update(newList);
}



function showUser(user)
{
	var hold = document.getElementById("searchMenu").innerHTML;
	document.getElementById("searchMenu").innerHTML = document.getElementById("otherUserMenu").innerHTML;
	document.getElementById("otherUserMenu").innerHTML = hold;
	document.getElementById("g").innerHTML = user.name;
	document.getElementById("h").src = user.picture;
	document.getElementById("f").addEventListener('click', newDiscussion(user), false);
}

function switchBackToUsers()
{
	var hold = document.getElementById("searchMenu").innerHTML;
	document.getElementById("searchMenu").innerHTML = document.getElementById("otherUserMenu").innerHTML;
	document.getElementById("otherUserMenu").innerHTML = hold;
	update(placeHolderQueryResult);
}

function test2()
{
	alert("Mission Compree!")
}

window.onload=defaultTab;
window.onload=test;
window.onload=populateList;