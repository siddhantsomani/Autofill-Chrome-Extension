function saveDetails() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username && password){
		chrome.storage.sync.set({'username':username},function (){
			console.log("username set");
		});
		chrome.storage.sync.set({'password':username},function (){
			console.log("password set");
		});
	}
}

function ifSet() {
	var username="";
	var password="";
	chrome.storage.sync.get('username', function (items){
		if(items.username)
			username = items.username;
		chrome.storage.sync.get('password', function (items){
		password = items.password;
		if(username && password)
			document.getElementById("errorDisplay").innerHTML = "Values Are Set!<br>Submit new values to change";
	});
});
	
}

 document.getElementById('saveDetails').addEventListener("click", saveDetails);
 document.getElementById('body').addEventListener("load", ifSet);