import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import dragonball1 from './dragonball1.jpg'
import dragonball2 from './dragonball2.jpg'
import bleach1 from './bleach1.jpeg'
import bleach2 from './bleach2.jpg'
import naruto1 from './naruto1.jpg'
import naruto2 from './naruto2.png'
import onepiece1 from './one-piece1.jpg'
import onepiece2 from './one-piece2.jpg'
console.log(onepiece2)
console.log(dragonball1)
console.log(dragonball2)
console.log(onepiece1)
console.log(naruto2)
console.log(naruto1)
console.log(bleach2)
console.log(bleach1)
function Imagedata(){
	return(
	    <div class = "parent">
			<div class = "child"><img id = "img1" src = {dragonball1} width = "250px"/></div>
			<div class = "child"><img id = "img2" src = {dragonball2} width = "250px"/></div>
			<div class = "child"><img id = "img3" src = {bleach1} width = "250px"/></div>	
			<div class = "child"><img id = "img4" src = {naruto1} width = "250px"/></div>	
			<div class = "child"><img id = "img5" src = {onepiece1} width = "250px"/></div>	
			<div class = "child"><img id = "img6" src = {bleach2} width = "250px"/></div>
			<div class = "child"><img id = "img7" src = {naruto2} width = "250px"/></div>	
			<div class = "child"><img id = "img8" src = {onepiece2} width = "250px"/></div>
		</div>
	)
}


export default Imagedata;