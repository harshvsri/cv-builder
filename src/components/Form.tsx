import { useState, ChangeEvent, MouseEvent } from "react";
import Card from "./Card";

interface Form {
  fname: string;
  lname: string;
  email: string;
  password: string;
  address: string;
}

function Form() {
  const [formData, setFormData] = useState<Form>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [showData, setShowData] = useState(false);
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowData(true);
  }

  return (
    <>
      <form className="row g-3 m-3 p-3">
        <div className="col-md-6">
          <label htmlFor="inputFname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFname"
            name="fname"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLname"
            name="lname"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>

      {showData && <Card data={formData} />}
    </>
  );
}

export default Form;
