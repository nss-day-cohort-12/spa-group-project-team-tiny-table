// Event Listeners
// add event handlers to all the things here

var messageContainer = document.getElementById("message-board");

messageContainer.addEventListener("click", function(event){
	// if the target is the delete button, call the delete message function
  if (event.target.className.indexOf('delBtn') >= 0){
    // console.log("delete button pressed");
    var rowId = event.target.parentNode.parentNode.id;
    Chatty.delMessage(rowId);
  }
})


var clearBtnEl = document.getElementById("clearBtn");

clearBtnEl.addEventListener("click", function(){
  messageContainer.innerHTML = "";
  //clear everything from the messages array
  Chatty.setMessages([]);
})



// event listener for the text input box
var messageInput = document.getElementById("message-input");
messageInput.addEventListener("keyup", function(event){
	// if the key is the enter key (13) then send the text box value to the add message function
	if (event.keyCode === 13){
		console.log("value", messageInput.value);
		event.preventDefault;
		var id = `msg--${Chatty.getMessages.length}`;
		Chatty.addNewMessage(messageInput.value, id);
	}
})


// event listeners for the checkboxes
var darkTheme = document.getElementById("inlineCheckbox1");
darkTheme.addEventListener("change", function(event){
	// inverse all the colors
	var colorEl = document.getElementsByTagName('body');
	if (darkTheme.checked){
		colorEl[0].style.backgroundColor = "darkgrey";
		colorEl[0].style.color = "white";
	} else if (!darkTheme.checked) {
		colorEl[0].style.backgroundColor = "white";
		colorEl[0].style.color = "black";
	}
})

var bigText = document.getElementById("inlineCheckbox2");
bigText.addEventListener("change", function(event){
	// increase the size of the text in the message board
	var textSizeEl = document.getElementById('message-board');
	if (bigText.checked){
		textSizeEl.style.fontSize = "2em";
	} else {
		textSizeEl.style.fontSize = "1em";
	}
})











