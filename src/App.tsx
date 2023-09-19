import { useState } from "react";
import Tag from "./components/Tag";
import TodoItem from "./components/TodoItem";
import NewList from "./components/NewList";
const tags = [
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
];
const list = [
  {
    title: "The fist task title",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare iaculis ex, eget semper mauris dapibus eu. Orci varius natoque.",
    tag: ["#d3cfff", "#d1e5f7"],
    isDone: true,
  },
  {
    title: "The second task title",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nulla vel nisi auctor, eget placerat urna pellentesque. Donec quam eros, imperdiet quis lacus id, pretium feugiat enim. Praesent ullamcorper, quam nec consequat bibendum, tellus ante rhoncus mi, vestibulum blandit.",
    tag: [],
    isDone: true,
  },
];
function App() {
  return (
    <div className='App'>
      <div className='header'>
        <div className='name strike'>todo</div>
        <div className='plus'>+</div>
      </div>
      <div className='TagContainer'>
        {tags.map(({ name, color }, key) => (
          <Tag key={key} name={name} color={color} />
        ))}
      </div>
      <div className='content'>
        {list.map((value, key) => (
          <TodoItem {...value} key={key} />
        ))}
      </div>
      {/* <NewList/> */}
    </div>
  );
}

export default App;
