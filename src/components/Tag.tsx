import React from "react";
interface TagProps{
    name: string;
    color: string;
}
function Tag({name,color}: TagProps) {
  return (
    <div className="Tag">
      <div className="TagColor" style={{backgroundColor:color}}/>
      <div className="TagName">{name}</div>
    </div>
  );
}

export default Tag;
