import React, { useState } from 'react';
import './tabs.css';

type TabProps = {
  label: string;
  content: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontFamily?: string;
  fontSize?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
};

type TabsProps = {
  tabs: TabProps[];
  defaultActiveTab?: number;
  tabBorderColor?: string;
  tabBorderWidth?: string;
  tabBorderRadius?: string;
  tabFontFamily?: string;
  tabFontSize?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab = 0,
  tabBorderColor = '#ddd',
  tabBorderWidth = '1px',
  tabBorderRadius = '5px',
  tabFontFamily = 'Arial',
  tabFontSize = '14px',
}) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            style={{
              color: tab.color,
              backgroundColor: tab.backgroundColor,
              borderColor: tabBorderColor,
              borderWidth: tabBorderWidth,
              borderRadius: tabBorderRadius,
              fontFamily: tab.fontFamily || tabFontFamily,
              fontSize: tab.fontSize || tabFontSize,
            }}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab] && (
          <div className="tab-content">
            {tabs[activeTab].content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;