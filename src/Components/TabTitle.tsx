interface TabTitleProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
}

export const TabTitle = ({ title, setSelectedTab, index }: TabTitleProps) => {
  return (
    <li>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
};
