import React from 'react'
import ReactDOM from 'react-dom/client'

const DetailedContact = (props) => {

    return (
        <div id ='detailed-contact' key = {props.key}>
            <h1 >{props.name}</h1>
            <img  src = {props.picture} alt = 'profle pic'></img>
            <div id = 'personal-information'>
                <div>Cell: {props.mobile}</div>
                <div>Phone: {props.phone}</div>
                <div>Date Of Birth: {props.dob}</div>
                <div>Age: {props.age}</div>
                <div>Address: {props.address}</div>
                <div>Email Address: {props.email}</div>
            </div>
        </div>
    )
}

export default DetailedContact