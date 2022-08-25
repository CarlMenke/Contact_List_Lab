import React from 'react'
import ReactDOM from 'react-dom/client'
import DetailedContact from './DetailedContact';


const Contact = (props) =>{

    const detailedContact = (props) =>{

        const searchResult = ReactDOM.createRoot(
          document.getElementById('search-results')
        )
  
        const element = <DetailedContact 
        key = {props.password}
        name = {props.name} 
        phone = {props.home}
        mobile = {props.mobile}
        home = {props.phone} 
        picture = {props.picture}
        age = {props.age}
        dob = {props.dob}
        email = {props.email}
        address = {props.address}
        />;
  
      searchResult.render(element)
      
  }

    return(
        <div id ='contact' onClick = {function hello() {detailedContact(props)}}>
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