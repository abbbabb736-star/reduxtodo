import React, { useState } from "react";
import logo from "./assets/icons/logo.svg";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const value = text.trim();
    if (!value) return;

    setItems((prev) => [...prev, { id: Date.now(), text: value }]);
    setText("");
  };

  return (
    <div className="app">
      <img src={logo} alt="Abu Savdo Markazi" className="brand-logo" />

      <div className="form-row">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Olma, sabzi, pomidor..."
        />
        <button className="btn" onClick={handleAdd}>
          Qo‘shish
        </button>
      </div>

      <ul className="items-list">
        {items.length === 0 ? (
          <li className="empty">-</li>
        ) : (
          items.map((item) => (
            <li key={item.id} className="item">
              {item.text}
              <button
                className="remove-btn"
                onClick={() =>
                  setItems((prev) => prev.filter((i) => i.id !== item.id))
                }
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
