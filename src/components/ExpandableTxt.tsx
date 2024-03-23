import React, { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableTxt = ({ children, maxChars = 100 }: Props) => {
  const [isExpandable, setExpandable] = useState(false);
  const toggleExpand = () => setExpandable(!isExpandable);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpandable ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={toggleExpand}>{isExpandable ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableTxt;
