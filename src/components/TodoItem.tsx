import React, { useId } from "react";
import MeatBallMenu from "./MeatBallMenu";

interface TodoItemProps {
  title: string;
  detail: string;
  tag: Array<string>;
  isDone: boolean;
}
function TodoItem({ title, detail, tag, isDone }: TodoItemProps) {
  return (
    <div className='TodoItem'>
      <div className='TitleContainer'>
        <div className='Title'>{title}</div>
        <MeatBallMenu/>
      </div>
      <div className='DetailContainer'>
        <p>
          {detail}
        </p>
      </div>
      <div className='FooterContainer'>
        <div className='TagContainer'>
          {tag.map((value, index) => (
            <div className='TagColor' key={index} style={{ backgroundColor: value }} />
          ))}
        </div>
        <label className='StatusContainer'>
          <span>done</span>
          <input type='checkbox' name='isDone' id={"StatusBox-" + useId()} defaultChecked={isDone} />
          <span className='checkmark' />
        </label>
      </div>
    </div>
  );
}

export default TodoItem;
