import React, { useState } from "react";

const AutocorrectTextarea = ({ corrections = {} }) => {
  const [inputText, setInputText] = useState("");

  const checkInCorrectionObj = (text) => {
    const parsedText = text.toLowerCase();
    if (corrections[parsedText]) return corrections[text.toLowerCase()];
    return parsedText;
  };

  const parsedFunc = (target) => {
    let targetArray = target.trim().split(" ");
    targetArray[targetArray.length - 1] = checkInCorrectionObj(
      targetArray[targetArray.length - 1]
    );
    return targetArray.join(" ") + " ";
  };

  const handleChange = (e) => {
    const target = e.target.value;
    if (target[target.length - 1] === " ") {
      setInputText(parsedFunc(target));
      return;
    }
    setInputText(target);
  };

  return (
    <div>
      <textarea
        placeholder="Enter text"
        data-testid="textarea"
        onChange={handleChange}
        value={inputText}
      ></textarea>
    </div>
  );
};

export default AutocorrectTextarea;
