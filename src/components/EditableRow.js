import "bootstrap/dist/css/bootstrap.min.css";
export default function EditableRow({ editForm, handleEditForm, handleCancelClick}) {
  return (
   
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            value={editForm.fullName}
            onChange={handleEditForm}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an address..."
            name="address"
            value={editForm.address}
            onChange={handleEditForm}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="phoneNumber"
            value={editForm.phoneNumber}
            onChange={handleEditForm}
          />
        </td>
        <td>
          <input
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            value={editForm.email}
            onChange={handleEditForm}
          />
        </td>
        <td>
          <button type="submit" className="btn btn-outline-danger">Save</button>
          <button type="button" className="btn btn-outline-success"  onClick={handleCancelClick} >Cancel</button>
        </td>
      </tr>

  );
}