// Event Listeners
// add event handlers to all the things here
// add variables to hold the current time







//get reference to DOM elements
var messageContainer = document.getElementById("message-board");
var clearBtnEl = document.getElementById("clearBtn");

// event listener for the text input box
var messageInput = document.getElementById("message-input");
var messageEdit = document.getElementById("message-edit");

//hold the message row we are editing
var clickedMessage;

messageContainer.addEventListener("click", function(event){
  // if the target is the delete button, call the delete message function
  if (event.target.className.indexOf('delBtn') >= 0){
    // console.log("delete button pressed");
    var rowId = event.target.parentNode.parentNode.id;
    Chatty.delMessage(rowId);

    //if no messages left then disable the clear button
    var messages = Chatty.getMessages();
    if (messages.length === 0){
      var clearBtnEl = document.getElementById('clearBtn');
      clearBtnEl.disabled = true;
    }
  }

  //if the target is the edit button, put the text in the edit input box
  if (event.target.className.indexOf('editBtn') >= 0){
    messageInput.classList.add("hidden");
    messageEdit.classList.remove("hidden");

    clickedMessage = event.target.parentNode.parentNode;

    messageEdit.value = clickedMessage.firstChild.innerHTML;
  }
})

//event listener for the clear all button
clearBtnEl.addEventListener("click", function(){
  clearBtnEl.disabled = true;
  messageContainer.innerHTML = "";
  //clear everything from the messages array
  Chatty.setMessages([]);
})

//Add new message on enter key press in message input box
messageInput.addEventListener("keyup", function(event){
	// if the key is the enter key (13) then send the text box value to the add message function
	if (event.keyCode === 13){
		// console.log("value", messageInput.value);
		event.preventDefault;
		var id = `msg--${Chatty.getMessages.length}`;
		var currDate = new Date();
    Chatty.addNewMessage(messageInput.value, id, currDate.toString());
    //clear input box
    messageInput.value = "";
    //enable clear button
    clearBtnEl.disabled = false;
	}
})

//update message on message board as user is typing their edit
messageEdit.addEventListener("keyup", function(event){
  clickedMessage.firstChild.innerHTML = messageEdit.value
  if (event.keyCode === 13) {
    event.preventDefault;
    messageEdit.classList.add("hidden");
    messageInput.classList.remove("hidden");
  }
})

// event listeners for the checkboxes
var darkTheme = document.getElementById("inlineCheckbox1");
darkTheme.addEventListener("change", function(event){
	// inverse all the colors
	var colorEl = document.getElementById('message-board');
	if (darkTheme.checked){
		colorEl.style.backgroundColor = "darkgrey";
		colorEl.style.color = "white";
	} else if (!darkTheme.checked) {
		colorEl.style.backgroundColor = "white";
		colorEl.style.color = "black";
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











