import React from "react";
import { FaqDataProps } from "./Faq";

interface FaqItemProps {
  faqItemData: FaqDataProps;
  index: number;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<number>>;
}

export const FaqItem = ({
  faqItemData,
  index,
  isExpanded,
  setIsExpanded,
}: FaqItemProps) => {
  const { question, answer } = faqItemData;

  const handleClick = (index: number) => {
    setIsExpanded((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <dt onClick={() => handleClick(index)}>
        {question}
        <span>{isExpanded ? "-" : "+"}</span>
      </dt>
      <dd className={isExpanded ? "expanded" : ""}>
        <div dangerouslySetInnerHTML={{ __html: answer }} />
      </dd>
    </>
  );
};
