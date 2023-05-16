import React from "react";

const truncatedText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }

  const truncateText = text.slice(0, maxLength) + "...";

  return truncateText;
};

export default truncatedText;
