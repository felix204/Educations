import { useState, useEffect  } from 'react';
import React from 'react'

import List from './List';
import Form from './Form';


function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
