import React from "react"
import ReactDOM from "react-dom"
import './style.css'


function Emaildata(){
	function validate() {
		const regexCom  = /\S+@\S+\.com$/;
		const regexEdu  = /\S+@\S+\.edu$/;
		var email = document.getElementById("email");
		var result = document.getElementById("result");
		if(regexEdu.test(email.value.toLowerCase()) == true || regexCom.test(email.value.toLowerCase()) == true) {
			result.innerHTML = "Valid Email."; 
		}
		else {
			result.innerHTML = "Invalid Email.";
		}
	}	
	return(
	    <div>
			<label for="email">Please enter your email:</label>
			<br/>
			<input type ="text" id = "email"></input>
			<br/><br/>
			<button onClick = {validate}>Done</button>
			<h2 id = 'result'></h2>
		</div>
	)
}


export default Emaildata;