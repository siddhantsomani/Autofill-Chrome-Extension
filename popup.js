function saveDetails() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username && password){
		chrome.storage.sync.set({'username':username},function (){
			console.log("username set");
		});
		chrome.storage.sync.set({'password':password},function (){
			console.log("password set");
		});
		document.getElementById("errorDisplay").innerHTML = "Values Are Set!<br>Submit new values to change";
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
				{
					document.getElementById("errorDisplay").innerHTML = "Values Are Set!<br>Submit new values to change";
				}
			});
		});
	
}

function resetDetails(){
	chrome.storage.sync.set({'username':""},function (){
		console.log("username reset");
	});
	chrome.storage.sync.set({'password':""},function (){
		console.log("password reset");
	});
	document.getElementById("errorDisplay").innerHTML = "";
}

 document.getElementById('saveDetails').addEventListener("click", saveDetails);
 document.getElementById('bodyTag').addEventListener("load", ifSet);