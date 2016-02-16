// IIFE augment to handle adding messages to the page
// augment the original iife to add messages captured from the nav-bar input to the message board

var Chatty = (function(prevChatty) {



	prevChatty.addNewMessage = function(inputMessage, newMsgId, timeStamp){
		if (!inputMessage){
			return;
		} else {
			var msgBoardEl = document.getElementById("message-board");
			var currText = "";
			var newMessageObj = {};
			newMessageObj.text = inputMessage;
			newMessageObj.date = timeStamp;
			var msgArray = Chatty.getMessages();
			console.log("msgArray.length", msgArray.length);
			if (msgArray.length === 20){
				msgBoardEl.firstChild.remove();
				msgArray.shift();
			}
			msgArray.push(newMessageObj);
			Chatty.setMessages(msgArray);
			currText = `<div class="row" id="${newMsgId}"><div class="col-md-10">${inputMessage}</div>
									<div class="col-md-2"><button class="btn btn-default delBtn">Delete</button><button class="btn btn-default editBtn">Edit</button>
									<p id="timestamp">${timeStamp}</p></div></div>`;
			msgBoardEl.innerHTML += currText;
			console.log("msg array", msgArray);
		}
	}

	return prevChatty;


})(Chatty);


