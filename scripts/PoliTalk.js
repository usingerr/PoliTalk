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

function newDiscussion() {
  alert("Discussion button works");
}

function logOut() {
  alert("log out button works");
}

var placeHolderQueryResult = [
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

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

/*const ul = document.getElementById("userList");
const url = " "; //insert api url when ready
fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let users = data.results;
    return users.map(function(user) {
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${User.name}`;
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });*/

function update(userList) {
  for (var y = 0; y < userList.length; y++) {
    //alert(userList[y]);
  }
  var physicalList = document.getElementById("userList");
  while (physicalList.hasChildNodes()) {
    physicalList.removeChild(physicalList.childNodes[0]);
  }
  var defaultLength = 10;
  if (userList.length < defaultLength) defaultLength = userList.length;
  for (var x = 0; x < defaultLength; x++) {
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

window.onload = defaultTab;

