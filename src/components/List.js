import { useState } from "react";

function List({ contacts, setContacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered =
    contacts &&
    contacts.filter((item) => {
      //filter fonk. kullandık
      return Object.keys(item).some(
        (
          key //keylerine ayırdık (fullname, phone_number)
        ) =>
          item[key]
            .toString() //stringe cevir
            .toLowerCase() //küçük harfe cevir
            .includes(filterText.toLocaleLowerCase()) //keylerden (fullname, phone_number) birini içerirse return eder
      );
    });

  const deleteBtn = (index) => {
    const temp = [...contacts];
    temp.splice(index, 1);
    setContacts(temp);
  };

  return (
    <div>
      <input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />

      <div className="list">
        {contacts.length === 0 && <div className="nothing">There is no one here...</div>}
        {filtered &&
          filtered.map((contact, i) => (
            <div className="list-all" key={i}>
              <button onClick={() => deleteBtn(i)}>x</button>
              <div className="infos">
                <div className="info">{contact.fullname}</div>
                <div className="info">{contact.phone_number}</div>
              </div>
            </div>
          ))}
      </div>

      <p>Total contact: ({filtered.length})</p>
    </div>
  );
}

export default List;
