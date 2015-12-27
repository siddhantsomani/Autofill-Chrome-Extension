// chrome.runtime.sendMessage({method: "getRegistrationNumber"}, function(response){
// 	console.log("Inside contentscript send message callback method");
// 	console.log(response.registrationNumber);
// 	var username = "";
//
// });
//
// chrome.runtime.sendMessage({method: "getRegistrationNumber"}, function(response) {
//     console.log("Response: ", response.registrationNumber);
// 	chrome.storage.sync.get('username', function(items){
// 		document.getElementsByName("regno")[0].value = items.username;
// 	});
// 	chrome.storage.sync.get('password', function(items){
// 		document.getElementsByName("passwd")[0].value = items.password;
// 	});
// });

chrome.storage.sync.get('username', function(items){
	document.getElementsByName("regno")[0].value = items.username;
});
chrome.storage.sync.get('password', function(items){
	document.getElementsByName("passwd")[0].value = items.password;
});