import React from "react";
import Tag from "./Tag";
const tags = [
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
  { name: "work", color: "#d3cfff" },
  { name: "study", color: "#d1e5f7" },
  { name: "entertainment", color: "#facece" },
  { name: "family", color: "#dbf2b6" },
];
export default function NewList() {
  return (
    <div className='NewListContainer'>
      <div className='TopNewList'>
        <div className='ButtonCancel'>Cancel</div>
        <button className='ButtonAdd'>Add</button>
      </div>
      <form className='FormContainer'>
        <div className='NewListTitle Input'>
          <label className='InputLabel'>
            Title
            <input type='text' className='InputText' name='title' placeholder='add a title ...' />
          </label>
        </div>
        <div className='NewListDesc Input'>
          <label className='InputLabel'>
            Description
            <textarea
              rows={4}
              className='InputText InputTextArea'
              name='description'
              placeholder='add a description ...'
            />
          </label>
        </div>
        <label className='InputLabel'>Tags</label>
        <div className='TagContainer'>
          {tags.map(({ name, color }, key) => (
            <Tag key={key} name={name} color={color} />
          ))}
        </div>
      </form>
    </div>
  );
}
