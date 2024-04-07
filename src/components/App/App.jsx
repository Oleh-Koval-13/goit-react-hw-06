import { useState, useEffect } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allContacts, setAllContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  }, [allContacts]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const filteredContacts = allContacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addContact = (contact) => {
    setAllContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = (id) => {
    setAllContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchValue} onChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App;