import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import contacts from "./data/contacts.json"
import Contact from './components/Contact'
import SearchBar from './components/SearchBar'
import DetailedContact from './components/DetailedContact';


function App() {

  const detailedResult = (contact) =>{
    let input = document.getElementById('input');
    let foundContact = contacts.results.filter((contact) => input.value === contact.name.first || input.value === contact.name.last || input.value === `${contact.name.first} ${contact.name.last}`);
    if(foundContact.length === 1){

      const searchResult = ReactDOM.createRoot(
        document.getElementById('search-results')
      )

      const element = <DetailedContact 
      key = {foundContact[0].password}
      name = {`${foundContact[0].name.first} ${foundContact[0].name.last}`}
      mobile = {foundContact[0].cell}
      home = {foundContact[0].phone} 
      picture = {foundContact[0].picture.large}
      age = {foundContact[0].dob.age}
      dob = {foundContact[0].dob.date}
      email = {foundContact[0].email}
      address = {`${foundContact[0].location.street} ${foundContact[0].location.city} ${foundContact[0].location.state}, ${foundContact[0].location.postcode}`}
      />;

    searchResult.render(element)
    }
}



  return (
    <div className="App">
      <h1>Contact List</h1>
      <main>
        <SearchBar handleClick = {detailedResult}/>
      <div id = 'list'>
        {contacts.results.map((contact) => {
          return (
            <Contact 
            contact = {contact}
            key = {contact.password}
            name = {`${contact.name.first} ${contact.name.last}`}
            mobile = {contact.cell}
            home = {contact.phone} 
            picture = {contact.picture.large}
            age = {contact.dob.age}
            dob = {contact.dob.date}
            email = {contact.email}
            address = {`${contact.location.street} ${contact.location.city} ${contact.location.state}, ${contact.location.postcode}`}
            
            />)
        })}
      </div>
      </main>
    </div>
  );
}

export default App;