import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";

export default function List(props) {
  const [del, setdel] = useState(false);
  const [line, setline] = useState(false);

  const dlt = () => {
    return setdel(true);
  };
  const rem = () => {
    setline(true);
    if (line === true) {
      setline(false);
    }
  };
  return (
    <>
      <div style={{ display: del ? "none" : "default" }} className="listitem">
        <div
          style={{ textDecoration: line ? "line-through" : "none" }}
          className="listitem"
        >
          <span>
            <Tooltip title="Cut" className="tooltip">
              <IconButton className="deletebtn" onClick={rem}>
                <RemoveIcon className="deleteicon" />
              </IconButton>
            </Tooltip>
          </span>
          <li>{props.text}</li>
          <Tooltip title="Delete Forever" className="tooltip">
            <IconButton className="deletebtn2" onClick={dlt}>
              <DeleteIcon className="deleteicon" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
