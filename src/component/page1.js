import React from "react"
import ReactDOM from "react-dom"
import './style.css'


function Textdata(){
	return(
	    <div>
			<label for="fname">First name:</label>
			<br/>
			<input type ="text" id = "fname" value = "Daniel"/><br/>
			<label for="lname">Last name:</label><br/>
			<input type ="text" id = "lname" value = "Kang"/><br/>
	
			<label>Favorite anime:</label><br/>
			
			<input type = "radio" id = "rad1"/>
			<label for="rad">Bleach</label><br/>
			<input type = "radio" id = "rad2"/>
			<label for="rad2">Naruto</label><br/>
			<input type = "radio" id = "rad3"/>
			<label for="rad3">One Piece</label><br/>
			<input type = "submit" value = "Done"/>
		</div>
	)
}


export default Textdata;