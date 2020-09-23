import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
const items = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

export default () => {
  const [language, setLanguage] = useState(items[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter your text</label>
          <input
            value={text}
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={items}
        selected={language}
        onSelectChange={setLanguage}
        label="select a language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};
