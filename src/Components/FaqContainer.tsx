import { Faq, FaqDataProps } from "./Faq";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { useEffect, useState } from "react";
import faqs from "../data/data.json";

export const FaqContainer = () => {
  const [faqData, setFaqData] = useState<FaqDataProps[]>([]);
  const [isExpanded, setIsExpanded] = useState(-1);

  const GENERAL_QUESTION_TOPIC_ID = 5;
  const HEALTH_QUESTION_TOPIC_ID = 6;
  const BILL_PAY_QUESTION_TOPIC_ID = 7;

  //   console.log(faqData);

  useEffect(() => {
    // setFaqData(faqs);
    // console.log(faqData);
    // if (faqData.question == "General Question") {
    //   setFaqData(
    //     faqs.filter((faq) => faq.topicId === "GENERAL_QUESTION_TOPIC_ID")
    //   );
    // } else if (faqData.question == "Technical Question") {
    //   setFaqData(
    //     faqs.filter((faq) => faq.topicId === "HEALTH_QUESTION_TOPIC_ID")
    //   );
    // } else {
    //   setFaqData((faq) => faq.topicId === "BILL_PAY_QUESTION_TOPIC_ID");
    // }
  }, []);
  return (
    <>
      {/* <Tabs>
        <Tab title="General">
          <Faq />
        </Tab>
        <Tab title="Health">
          <Faq />
        </Tab>
        <Tab title="Bill Pay">
          <Faq />
        </Tab>
      </Tabs> */}
    </>
  );
};
