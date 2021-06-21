import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import List from "./List";
import Tooltip from "@material-ui/core/Tooltip";

export default function Container() {
  const [item, setitem] = useState();
  const [newitem, setnewitem] = useState([]);

  const itemEvent = (event) => {
    setitem(event.target.value);
  };
  const listitem = () => {
    setnewitem((preval) => {
      return [...preval, item];
    });
    setitem("");
  };
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <div className="inputline">
            <h1 className="heading">MY SHOPPING LIST</h1>
            <input
              type="text"
              placeholder="Enter Your Items"
              className="input"
              value={item}
              onChange={itemEvent}
            />
            <Tooltip title="Add Items">
              <Button className="addbtn" onClick={listitem}>
                <AddIcon className="addicon" />
              </Button>
            </Tooltip>
          </div>

          <ol>
            {newitem.map((val, index) => {
              return <List key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
