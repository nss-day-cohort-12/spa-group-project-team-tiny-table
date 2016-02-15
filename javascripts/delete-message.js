// IIFE augment to handle deleting messages from the page, using the appropriate button
// augment the original iife to delete the corresponding message when the delete button is pressed 

var Chatty = (function(prevChatty) {

	prevChatty.delMessage = function(msgId) {
    var msgEl = document.getElementById(msgId).remove();
	}

	return prevChatty;

})(Chatty);