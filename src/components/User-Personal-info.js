export function UserPersonalinfo() {
  return (
    <div className="main-container">
      <div className="form">
        <h2 className="personal-info-heading">Personal Information</h2>
        <i className="fas solid fas-number"></i>
        <input
          type="text"
          placeholder="First Name"
          name="first-name"
          className="first-name-input input-fields"
          required
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          name="last-name"
          className="last-name-input input-fields"
          required
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="email-input input-fields"
          required
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Phone No"
          name="contact"
          className="contact-input input-fields"
          required
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="City"
          name="city"
          className="city-input input-fields"
          required
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="address-input input-fields"
          required
        ></input>
        <br></br>
      </div>
    </div>
  );
}
