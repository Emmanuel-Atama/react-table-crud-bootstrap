import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHead from "./components/TableHead";
import data from "./data.json";
import { Fragment, useState } from "react";
import NewContactForm from "./components/NewContactForm";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContacts] = useState(data);
  const [addForm, setAddForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editForm, setEditForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const handleAddForm = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newForm = { ...addForm };

    newForm[fieldName] = fieldValue;

    setAddForm(newForm);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    //To prevent the form from doing a post request

    const newContact = {
      id: nanoid(),
      fullName: addForm.fullName,
      address: addForm.address,
      phoneNumber: addForm.phoneNumber,
      email: addForm.email,
    };

    const newContacts = [...contacts, newContact];
    //Created a new contact object to avoid mutating the state
    setContacts(newContacts);
  };

const handelEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editForm.fullName,
      address: editForm.address,
      phoneNumber: editForm.phoneNumber,
      email: editForm.email
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);
    //finding index of the array to edit

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };


   const handleEditForm = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editForm };
    newFormData[fieldName] = fieldValue;

    setEditForm(newFormData);

   }

  const [editContactId, setEditContactId] = useState(null);

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    };
    setEditForm(formValues);
  };

  

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="conatiner">
      <form onSubmit={handelEditFormSubmit}>
        <table className="table table-bordered table-striped table-hover">
          <TableHead />
          <tbody>
            {contacts.map((contact) => {
              return (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow editForm={editForm} handleEditForm={handleEditForm} handleCancelClick={handleCancelClick} />
                  ) : (
                    <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <h2>Add New Contact</h2>
        <NewContactForm
          handleAddForm={handleAddForm}
          handleAddFormSubmit={handleAddFormSubmit}
        />
      </form>
    </div>
  );
}
