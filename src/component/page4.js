import React from "react"
import ReactDOM from "react-dom"
import './style.css'


function Tabledata(){
	return(
	<div>
		<table>
		<tr>
			<th>Anime Name</th>
			<th>Link to Wikipedia</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>Bleach</td>
			<td><a href="https://en.wikipedia.org/wiki/Bleach_(TV_series)"/>Bleach Wikipedia</td>
			<td>A man with a sword that battles evil spirits.</td>
		</tr>
		
		<tr>
			<td>Naruto</td>
			<td><a href="https://en.wikipedia.org/wiki/Naruto"/>Naruto Wikipedia</td>
			<td>Naruto is the titular character in a world of ninjas, fighting against evil with his companions and unique power.</td>
		</tr>
	
		<tr>
			<td>One Piece</td>
			<td><a href="https://en.wikipedia.org/wiki/One_Piece"/>One Piece Wikipedia</td>
			<td>One Piece is about a pirate named Luffy that ate a magical fruit and gained special powers.</td>
		</tr>
		</table>
	</div>
	)
}


export default Tabledata;