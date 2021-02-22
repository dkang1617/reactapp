import React from "react"
import ReactDOM from "react-dom"
import './style.css'


function Videodata(){
	return(
<div class = "parent">	
	<div class = "child">
		<iframe width="250" height="150"
		src="https://www.youtube.com/embed/AsVj37d6JwA" id = "vid1">
		</iframe>
	</div>
	<div class = "child">
		<iframe width="250" height="150"
		src="https://www.youtube.com/embed/wDFbmiDRg5U" id = "vid2">
		</iframe>
	</div>
	<div class = "child">
		<iframe width="250" height="150"
		src="https://www.youtube.com/embed/VMpD01XhTIQ" id = "vid3">
		</iframe>
	</div>
	<div class = "child">
		<iframe width="250" height="150"
		src="https://www.youtube.com/embed/95O6mbLsy4M" id = "vid4">
		</iframe>
	</div>
</div>
	)
}


export default Videodata;