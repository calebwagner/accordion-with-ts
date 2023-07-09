import { useEffect, useState } from "react";
import { FaqItem } from "./FaqItem";
import styled from "styled-components";
import faqs from "../data/data.json";

export interface FaqDataProps {
  id: number;
  title: string;
  topicId: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string | null;
}

const DefList = styled.dl`
    font-size: 20px;
    counter-reset: deflist;
    dt {
       display: flex;
       background: #ddd;
       margin-bottom: 2px;
       padding: 10px;
       counter-increment: deflist;
       position: relative;
       cursor: pointer;
       &::before {
        content: 'Q'counter(deflist)':';
        padding-right: 5px;
       } 
       &::after {
        content: '';
       }
       span {
        background: transparent;
        border: 0;
        height: 100%;
        font-size: 30px;
        position: absolute;
        top:0;
        right:0;
        cursor: pointer;
        width: 30px;
       }
    }
    dd {
        opacity: 0;
        background: #eee;
        margin: 0 0 2px;
        padding: 0 10px 0 45px;
        max-height: 0;
        overflow: hidden;
        transition: max-height .6s ease-in-out, opacity .8s;
        box-sizing: border-box;
        &::before,
        &::after {
            content: '';
            display: block;
            height: 10px;
            width 100%;
        }
        &.expanded {
            max-height: fit-content;
            opacity: 1
        }    
    }
`;

interface FaqProps {
  title: string;
}

export const Faq = ({ title }: FaqProps) => {
  const [faqData, setFaqData] = useState<FaqDataProps[]>([]);
  const [isExpanded, setIsExpanded] = useState(-1);

  const GENERAL_QUESTION_TOPIC_ID = 5;
  const HEALTH_QUESTION_TOPIC_ID = 6;
  const BILL_PAY_QUESTION_TOPIC_ID = 7;

  useEffect(() => {
    faqs.forEach((faq) => {
      if ("General questions" === title) {
        setFaqData(
          faqs.filter((faq) => faq.topicId === GENERAL_QUESTION_TOPIC_ID)
        );
      } else if ("About your health information" === title) {
        setFaqData(
          faqs.filter((faq) => faq.topicId === HEALTH_QUESTION_TOPIC_ID)
        );
      } else if ("About paying your bills" === title) {
        setFaqData(
          faqs.filter((faq) => faq.topicId === BILL_PAY_QUESTION_TOPIC_ID)
        );
      } else {
        return [];
      }
    });
    setIsExpanded(-1);
  }, [title]);

  return (
    <DefList>
      {faqData.map((data, index) => (
        <FaqItem
          key={index}
          faqItemData={data}
          index={index}
          isExpanded={isExpanded === index}
          setIsExpanded={setIsExpanded}
        />
      ))}
    </DefList>
  );
};
