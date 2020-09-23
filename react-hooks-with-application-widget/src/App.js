import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is react ?",
    content: "React is frontend js library",
  },
  {
    title: "Why use react ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use react ?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "The red color",
    value: "red",
  },
  {
    label: "The green color",
    value: "green",
  },
  {
    label: "The blue color",
    value: "blue",
  },
];

export default () => {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selectedColor}
          label="select a color"
          onSelectChange={setSelectedColor}
        />
      </Route>
    </div>
  );
};
