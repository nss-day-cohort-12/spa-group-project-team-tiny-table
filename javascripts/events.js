// Event Listeners
// add event handlers to all the things here

var messageContainer = document.getElementById("message-board");

messageContainer.addEventListener("click", function(event){
	// if the target is the delete button, call the delete message function
})


// event listener for the text input box
var messageInput = document.getElementById("message-input");
messageInput.addEventListener("keyup", function(event){
	// if the key is the enter key (13) then send the text box value to the add message function
})

// event listener for the clear board button
var clearBoard = document.getElementById("clearBtn");
clearBoard.addEventListener("click", function(event) {
	//set the inner HTML of the message board div to empty
})


// event listeners for the checkboxes
var darkTheme = document getElementById("inlineCheckbox1");
darktheme.addEventListener("change", function(event){
	// inverse all the colors
})

var bigText = document.getElementById("inlineCheckbox2");
bigText.addEventListener("change", function(event){
	// increase the size of the text in the message board
})