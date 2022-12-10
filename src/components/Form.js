import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") return false;
    addContacts([...contacts, form]);
  };

  useEffect(() => {
    setForm(initialFormValues);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Name / Surname"
          value={form.fullname}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
        />
      </div>
      <div className="btn">
        <button> Add </button>
      </div>
    </form>
  );
}

export default Form;
