import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { todoAction } from "../action/todoAction";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div style={{ background: "#0078AA", height: "100vh" }}>
      <div
        style={{
          height: "100px",
          width: "400px",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            border: "none",
          }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "5px",
            fontSize: "16px",
            border: "none",
          }}
          onClick={() => dispatch(todoAction(value), setValue(""))}
        >
          Add Todo
        </button>
      </div>

      <div style={{ width: "400px", margin: "0 auto" }}>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {data?.todo.map((item) => (
            <li
              style={{
                fontSize: "20px",
                textTransform: "capitalize",
                background: "#FCF8E8",
                padding: "5px",
                borderRadius: "5px",
                margin: "0",
                marginTop: "10px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTodo;
