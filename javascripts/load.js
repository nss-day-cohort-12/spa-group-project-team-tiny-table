// Original IIFE to load XHR file and populate the "message board"
// original functions include Loading and parsing the JSON file
//    and a function to populate the board with initial messages
var Chatty = (function() {
	var messages =[];   //hold test messages from JSON file

	function loadInitMsgs(){
			var msgBoardEl = document.getElementById("message-board");
			var currText = "";
			messages = JSON.parse(this.responseText).messages;
			for (var i = 0; i < messages.length; i++) {    
				//console.log("JSON file:", currText);
				currText = `<div class="row" id="msg--${i}"><div class="col-md-10">${messages[i].text}</div>
										<div class="col-md-2"><button class="btn btn-default delBtn">Delete</button></div></div>`;
				msgBoardEl.innerHTML += currText;
			}	

		}


	return {
		loadMessages: function() {			
			var loader = new XMLHttpRequest();
			loader.open("GET", "javascripts/messages.json");
			loader.send();
			loader.addEventListener("load", loadInitMsgs)			
		},
		getMessages: function() {
			return messages;
		},
		setMessages: function(updatedMessages){
			messages = updatedMessages;
		}
	}
})();

Chatty.loadMessages();