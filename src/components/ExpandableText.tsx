import React, { useState } from "react";

interface ExpandableTextProps {
  text: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  // State to manage if the text is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Determine the text to display based on isExpanded state
  const displayText =
    isExpanded || text.length <= 100 ? text : `${text.substring(0, 100)}...`;

  return (
    <div>
      <p>{displayText}</p>
      {text.length > 100 && (
        <button onClick={toggleExpand}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
