import { useState } from "react";
import "./styles.css";
import List from "../components/List";
import Form from "../components/Form";

function Contacts() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || "");

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List setContacts={setContacts} contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
