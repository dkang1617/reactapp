import React, {Component} from 'react';


function Itab (props){
	const addstyle = () =>{
		if(props.out.id == props.activetab){
			return {backgroundColor:'lightblue'}
		}
		else{
			return {backgroundColor:'pink'}
		}
	};
	
	console.log(props)
	
	return (
	    <div style = {addstyle()} onClick = {props.ctab.bind(this, props.out.id)} className = "tabtabtab">{props.out.title}</div>
	);
}


export default Itab;