// chrome.runtime.onMessage.addListener( function(request,sender,sendResponse){
// 	console.log("inside background.js");
//
// 	var username="";
// 	var password="";
// 	if (request.method == "getRegistrationNumber"){
// 		chrome.storage.sync.get('username', function (items){
// 			if(items.username)
// 				username = items.username;
// 	});
//
// 	console.log(username);
//  }
//  sendResponse({registrationNumber: username});
// } );
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     var username="kaka";
// 	var password="";
// 	if(request.method="getRegistrationNumber"){
// 		chrome.storage.sync.get('username', function(items){
// 			username = items.username;
// 		});
//
// 		sendResponse({registrationNumber:username});
// 	}
// });