import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({options,selected,onSelectChange,label}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedItems = options.map((item) => {
    if (item.value == selected.value) return null;
    return (
      <div
        key={item.value}
        className="item"
        onClick={() => onSelectChange(item)}
      >
        {item.label}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : " "}`}>
              {renderedItems}
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ color: selected.value }}>
        <h1>{`this is ${selected.value} color`}</h1>
      </div> */}
    </React.Fragment>
  );
};

export default Dropdown;
