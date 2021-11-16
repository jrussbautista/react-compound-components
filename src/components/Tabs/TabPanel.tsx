import React from 'react';
import { useTabs } from './TabsContext';

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
}

const TabPanel = ({ id, children }: TabPanelProps) => {
  const { activeId } = useTabs();

  return <div>{activeId === id && children}</div>;
};

export default TabPanel;
