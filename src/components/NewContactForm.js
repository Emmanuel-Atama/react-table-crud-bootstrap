import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { AppContext } from "../App";


export default function NewContactForm() {
const {handleAddForm, handleAddFormSubmit} = useContext(AppContext)


  return (
      <form onSubmit={handleAddFormSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Full Name
          </span>
          <input
            className="form-control"
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter full name..."
            aria-describedby="basic-addon1"
            onChange={handleAddForm}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Address
          </span>
          <input
            className="form-control"
            type="text"
            name="address"
            required="required"
            placeholder="Enter address..."
            aria-describedby="basic-addon2"
            onChange={handleAddForm}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Phone Number
          </span>
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Phone number"
            aria-describedby="basic-addon3"
            onChange={handleAddForm}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            className="form-control"
            type="email"
            name="email"
            required="required"
            placeholder="Email"
            aria-describedby="basic-addon4"
            onChange={handleAddForm}
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Add
        </button>
      </form>
  );
}
