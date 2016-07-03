function addComment() {

 		// B) Get the value of the inputs
 		var username = document.getElementById("username").value
 		var comment = document.getElementById("comment").value
 		var image = document.getElementById("image").value

 		//C) settinf the text node
 		username = document.createTextNode(username)
 		comment = document.createTextNode(comment)

 		//D) creating the h1 and p tags
 		var name = document.createElement("h1")
 		var paragraph = document.createElement("p")
 		var newImage = document.createElement("img")

 		// E) changing the attrebute of the img element
 		newImage.setAttribute("src", image)


 		// E) appending the values into the tags
 		name.appendChild(username)
 		paragraph.appendChild(comment)


 		// F) variable for the result div
 		var toShow = document.getElementById("toShow")

 		// G) appending the tags to the result div
 		toShow.appendChild(newImage)
 		toShow.appendChild(name)
 		toShow.appendChild(paragraph)
 		

 	}