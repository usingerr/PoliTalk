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

function logOut()
{
	alert("log out button works");
}

var placeHolderQueryResult = ["Donald Trump", "Donald Glover", "Hillary Clinton", "Michelle Obama", "Kirsten Gillibrand", "Beto O'Rourke", "John Hickenlooper", "Jay Inslee", "Bernie Sanders", "Amy Klobuchar", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Julian Castro", "Tulsi Gabbard", "John Delaney", "Wayne Messam", "Marianne Williamson", "Andrew Yang", "Pete Buttigieg", "Gonzalo Barrios", "Marco Rubio", "Ted Cruz", "George Bush", "Kanye West", "Dwayne Johnson", "Joanne Rowling"]

function update(userList)
{
	for(var y = 0; y < userList.length; y++)
	{
		//alert(userList[y]);
	}
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
		var result = document.createElement("li");
		var resultText = document.createTextNode(userList[x]);
		result.appendChild(resultText);
		physicalList.appendChild(result);
	}
}

function  updateText()
{
	var input = document.getElementById("userSearch").value;
	var newList = [];
	for(var x = 0; x < placeHolderQueryResult.length; x++)
	{
		//alert("checking querey result " + placeHolderQueryResult[x].substring(0, input.length) + " with " + input);
		if(placeHolderQueryResult[x].substring(0, input.length) == input){
			
			newList.push(placeHolderQueryResult[x]);
		}
	}
	update(newList)
}

window.onload=defaultTab;