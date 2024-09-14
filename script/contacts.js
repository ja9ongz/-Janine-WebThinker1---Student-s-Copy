let validate = () => {
	//first set for name
	let fName = document.getElementById("fName");
	let nameErrorMsg = document.getElementById("nameErrorMsg");

	//if the field is empty, we change the class and border to be red
	if(fName.value.length == 0){
		nameErrorMsg.classList = "text-danger"; //we are removing the d-none class so we can see it
		fName.classList = "form-control is-invalid";
	}
	else{//if its not empty
		nameErrorMsg.classList = "d-none text-danger";
		fName.classList = "form-control";
	}

	//2nd set for email
	let fEmail = document.getElementById("fEmail");
	let emailErrorMsg = document.getElementById("emailErrorMsg");

	//if the field is empty, we change the class and border to be red
	if(fEmail.value.length == 0){
		emailErrorMsg.classList = "text-danger"; //we are removing the d-none class so we can see it
		fEmail.classList = "form-control is-invalid";
	}
	else{//if its not empty
		emailErrorMsg.classList = "d-none text-danger";
		fEmail.classList = "form-control";
	}

	//3rd set is for subject
	let fSubject = document.getElementById("fSubject");
	let subjectErrorMsg = document.getElementById("subjectErrorMsg");

	//if the field is empty, we change the class and border to be red
	if(fSubject.value.length == 0){
		subjectErrorMsg.classList = "text-danger"; //we are removing the d-none class so we can see it
		fSubject.classList = "form-control is-invalid";
	}
	else{//if its not empty
		subjectErrorMsg.classList = "d-none text-danger";
		fSubject.classList = "form-control";
	}

	//4th set for message
	let fMessage = document.getElementById("fMessage");
	let messageErrorMsg = document.getElementById("messageErrorMsg");

	//if the field is empty, we change the class and border to be red
	if(fMessage.value.length == 0){
		messageErrorMsg.classList = "text-danger"; //we are removing the d-none class so we can see it
		fMessage.classList = "form-control is-invalid";
	}
	else{//if its not empty
		messageErrorMsg.classList = "d-none text-danger";
		fMessage.classList = "form-control";
	}


}