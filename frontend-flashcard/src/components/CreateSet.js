import React, { useState, Component } from "react";
const CreateSet = (props) => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => props.createCardSet(e)} className="CreateSet">
          <label>
            Set Title:
            <input type="text" name="title" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" />
          </label>

          <input type="submit" value="Continue" />
        </form>
      </div>
    </div>
  );
};

export default CreateSet;
