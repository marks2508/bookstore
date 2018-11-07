import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col s4">
          <div className="form-group col s4">
            <input
        type="text"
    name="name"
    placeholder="Name"
    onChange={handleChange}
    value={user.name}
    className="form-control"
    />
    </div>
    <div className="form-group">
    <input
    type="text"
    name="email"
    placeholder="Email"
    onChange={handleChange}
    value={user.email}
    className="form-control"
    />
    </div>
    <div className="form-group">
    <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={handleChange}
    value={user.password}
    className="form-control"
    />
    </div>
    <div className="form-group">
    <input
    type="password"
    name="passwordConfirmation"
    placeholder="Confirm Password"
    onChange={handleChange}
    value={user.passwordConfirmation}
    className="form-control"
    />
    </div>
    </div>

    <button className="main-button">Register</button>
    </form>
    </div>
  );
};

export default RegisterForm;
