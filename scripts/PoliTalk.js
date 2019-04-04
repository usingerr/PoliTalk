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
		container.removeChild(container.lastChild);
		container.removeChild(container.lastChild);
		container.removeChild(container.lastChild);
		return true;
	}
}

window.onload=defaultTab;