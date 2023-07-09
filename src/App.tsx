import { Faq } from "./Components/Faq";
import { Tabs } from "./Components/Tabs";
import { Tab } from "./Components/Tab";
import "./App.css";
import { FaqDataProps } from "./Components/Faq";
import faqs from "./data/data.json";

export const App = () => {
  // const tabTitles = [
  //   "General questions",
  //   "About your health information",
  //   "About paying your bills",
  // ];

  const getUniqueTitles = (data: FaqDataProps[]): string[] => {
    const titlesSet: Set<string> = new Set();
    data.forEach((obj: FaqDataProps) => {
      titlesSet.add(obj.title);
    });
    return Array.from(titlesSet);
  };

  const tabTitles: string[] = getUniqueTitles(faqs);

  return (
    <div className="App">
      <Tabs>
        {tabTitles.map((title) => (
          <Tab key={title} title={title}>
            <Faq title={title} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
