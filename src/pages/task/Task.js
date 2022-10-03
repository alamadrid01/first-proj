import React, { useState, useEffect } from "react";
import "./task.scss";
import WebFont from "webfontloader";
import Navbar from "../../components/navbar/Navbar";
import task from "./Tasks.png";

function Task() {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow]= useState(false)
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Droid Sans",
          "Montserrat",
          "Lato",
          "Abhaya Libre",
          "Roboto",
        ],
      },
    });
    document.title = "Webzone Todos";
  }, []);

  const handler = (e) => {
    setWord(e.target.value);
    
  };
  const submit = (e) => {
    e.preventDefault();
  };
  const reset = () => {
    setList([]);
    setShow(false)
  };

  const listItems = () => {
    setList([
      ...list,
      {
        item: word,
        id: Math.random() + 2,
      },
    ]);
    setShow(true)
    setWord('')
  };

  const save = () => {
    alert(
      "Task saved successfully, make sure you are logged in to access your Tasks"
    );
  };

  return (
    <div>
      <div className="task">
        <Navbar />
        <div className="taskContainer">
          <div className="left">
            <img src={task} alt="task" />
          </div>
          <div className="right">
            <div className="todo">
              <h2>Todo-List</h2>
              <form onSubmit={submit}>
                <div className="input">
                  <input
                    value={word}
                    onChange={handler}
                    type="text"
                    placeholder="Enter a Todo..."
                  />
                </div>
                <button onClick={listItems} type="submit">
                  Add
                </button>
              </form>
              <ul>
                {list.map((user) => (
                  <li key={user.id}>{user.item}</li>
                ))}
              </ul>
              {
                show ? <div className="but">
                <button onClick={reset} className="delete">
                  Delete items
                </button>
                <button onClick={save} className="delete">
                  Save Items
                </button>
              </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
