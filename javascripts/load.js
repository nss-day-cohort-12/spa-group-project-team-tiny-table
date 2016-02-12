// Original IIFE to load XHR file and populate the "message board"
// original functions include Loading and parsing the JSON file
//    and a function to populate the board with initial messages
var Chatty = (function() {
	var initMessages =[];   //hold test messages from JSON file




	return {
		loadMessages: function() {
			//blahh XHR crap
			var msgBoardEl = document.getElementById("message-board");
			var currText = "";
			var loader = new XMLHttpRequest();
			loader.open("GET", "javascripts/messages.json");
			loader.send();
			//parse json shit
			loader.addEventListener("load", function(){
				initMessages = JSON.parse(this.responseText).messages;
				for (var i = 0; i < initMessages.length; i++) {    
			//loop over junk and build a string to insert into DOM
					console.log("JSON file:", currText);
					currText = `<div class="row"><div class="col-md-10">${initMessages[i].text}</div>
											<div class="col-md-2"><button class="btn btn-default delBtn">Delete</button></div></div>`;
					msgBoardEl.innerHTML += currText;
				}	




			})
			
		}
	}











})();

Chatty.loadMessages();