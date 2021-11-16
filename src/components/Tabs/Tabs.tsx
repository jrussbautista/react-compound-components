import React, { useState } from 'react';
import { TabsContext } from './TabsContext';
import TabList from './TabList';
import Tab from './Tab';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';

interface TabsProps {
  children: React.ReactNode;
  initialActiveId: string;
}

const Tabs = ({ children, initialActiveId }: TabsProps) => {
  const [activeId, setActiveId] = useState(initialActiveId);

  return (
    <TabsContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
