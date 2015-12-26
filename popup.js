function saveDetails() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	console.log(username+' '+password);
	if(username && password){
		chrome.storage.sync.set({'username':username},function (){
			console.log("username set");
		});
		chrome.storage.sync.set({'password':username},function (){
			console.log("password set");
		});
	}
}

function viewDetails() {
	chrome.storage.sync.get('username', function (items){
		document.getElementById("errorDisplay").innerHTML = items.username;
	});
}

 document.getElementById('saveDetails').addEventListener("click",saveDetails);