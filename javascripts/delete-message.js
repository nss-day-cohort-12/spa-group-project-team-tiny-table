// IIFE augment to handle deleting messages from the page, using the appropriate button
// augment the original iife to delete the corresponding message when the delete button is pressed 

var Chatty = (function(prevChatty) {

	prevChatty.delMessage = function(msgId) {
    //remove the message element from the DOM
    var msgEl = document.getElementById(msgId);
    msgEl.remove();

    //get the message text for the element to be deleted
    var msgText = msgEl.firstChild.innerHTML;

    //get the messages array
    var newMessages = Chatty.getMessages();

    //filter out the message that we want to delete
    newMessages = newMessages.filter((e) => !(e.text === msgText));

    //Set messages to our newMessages array
    Chatty.setMessages(newMessages);
	}

	return prevChatty;

})(Chatty);