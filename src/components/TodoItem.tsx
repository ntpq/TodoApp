import React, { useId } from "react";
import MeatballMenu from "/menu-meatball.svg";
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
        <div className='Option'>
          <img src={MeatballMenu} alt='meat-ball-menu' />
        </div>
      </div>
      <div className='DetailContainer'>
        <p>
          {detail}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare iaculis ex, eget semper mauris dapibus eu.
          Orci varius natoque.
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
