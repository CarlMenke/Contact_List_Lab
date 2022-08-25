import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import contacts from "./data/contacts.json"
import Contact from './components/Contact'
import SearchBar from './components/SearchBar'


function App() {

  const searchResult = () =>{
    let input = document.getElementById('input');
    let foundContact = contacts.results.filter((contact) => input.value === contact.name.first || input.value === contact.name.last || input.value === `${contact.name.first} ${contact.name.last}`);
    if(foundContact.length === 1){

      const searchResult = ReactDOM.createRoot(
        document.getElementById('search-results')
      )

      const element = <Contact 
      key = {foundContact[0].password}
      name = {`${foundContact[0].name.first} ${foundContact[0].name.last}`}
      mobile = {foundContact[0].cell}
      home = {foundContact[0].phone} 
      picture = {foundContact[0].picture.large}
      />;

    searchResult.render(element)
    }
}

  return (
    <div className="App">
      <h1>Contact List</h1>
      <main>
        <SearchBar handleClick = {searchResult}/>
      <div id = 'list'>
        {contacts.results.map((contact) => {
          return (
            <Contact 
            key = {contact.password}
            name = {`${contact.name.first} ${contact.name.last}`}
            mobile = {contact.cell}
            home = {contact.phone} 
            picture = {contact.picture.large}
            />)
        })}
      </div>
      </main>
    </div>
  );
}

export default App;