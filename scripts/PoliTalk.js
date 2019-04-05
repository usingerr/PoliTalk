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
		
		
		//PROBABLY DELETE THIS SHIT VVVVVVVVVVV
		/*// create removeSource button
		var remove = document.createElement("button");
		remove.type = "button";
		remove.innerHTML = "<img src='images\\remove.png' id='removeImg' />";
		remove.onclick = removeSource(this.id);
		remove.style = "height: 10px; width: 10px;";
		remove.id = "remove" + i;
		// append remove button
		container.appendChild(remove); */
		//PROBABLY DELETE THIS SHIT ^^^^^^^^^^^^
		
		
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

function newDiscussion()
{
	openTab(event, 'Discussions');
	var discussions = document.getElementById("Discussions");
	var discussionForm = document.getElementById("discussionForm").innerHTML;
	discussions.innerHTML = discussionForm;
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