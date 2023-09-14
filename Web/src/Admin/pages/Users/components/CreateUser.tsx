import React from "react";
import UserForm from "./UserForm";

const CreateUser: React.FC = () => {
  return (
    <React.Fragment>
      <div className="drawer-container">
        <h3>Add User</h3>
        <div className="form-container">
          <UserForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateUser;
