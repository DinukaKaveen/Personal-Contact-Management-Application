import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const result = await axios.get("http://localhost:8000/api/contacts");
    setContacts(result.data.contacts);
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/api/delete_contact/${id}`);
    loadContacts();
  };
  return (
    <div>
      <div
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
        style={{ margin: 50 }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Contact Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Note
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {contact.name}
                </th>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">{contact.phone}</td>
                <td className="px-6 py-4">{contact.note}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/contact/edit/${contact.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    EDIT
                  </Link>
                  &nbsp;&nbsp;
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
