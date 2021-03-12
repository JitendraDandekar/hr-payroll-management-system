import React from "react";
import "./AdminList.css";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

function AdminList({ srno, id, username, status, setInput, deleteHandle }) {
  const active = status ? 1 : 0;

  const trHandle = () => {
    setInput({
      id: id,
      username: username,
      status: active,
    });
  };

  return (
    <tr className="AdminList" onClick={trHandle}>
      <th>{srno}</th>
      <td>{username}</td>
      <td>{status ? "active" : "inactive"}</td>
      <td>
        <span
          onClick={() => {
            deleteHandle(id);
          }}
          className="AdminList__button"
          title="delete"
        >
          <DeleteForeverRoundedIcon />
        </span>
      </td>
    </tr>
  );
}

export default AdminList;
