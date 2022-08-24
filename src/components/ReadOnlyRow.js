// import { AppContext } from "../App";
// import { useContext } from "react";
export default function ReadOnlyRow({ contact, handleEditClick, handleDeleteClick }) {
  // const { contact, handleEditClick, handleDeleteClick } = useContext(AppContext);
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <div className="action-btn">
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={(e) => handleEditClick(e, contact)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
