import React from 'react'

const Contact = (props) =>{
    return(
        <div id ='contact'>
            <div id = 'contact-info' key = {props.key}>
                <h3>Name: {props.name}</h3>
                <h4>Cell: {props.mobile}</h4>
                <h4>Phone: {props.home}</h4>
            </div>
            <img  src = {props.picture} alt = 'profle pic'></img>
        </div>
    )
}

export default Contact