import React from 'react';
import styled from 'styled-components';

import { useTabs } from './TabsContext';

interface TabButtonProps {
  active: boolean;
}

interface TabProps {
  children: React.ReactNode;
  id: string;
}

const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) => (props.active ? 'tomato' : 'white')};
  border: 1px solid transparent;
  padding: 6px 10px;
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
`;

const Tab = ({ children, id }: TabProps) => {
  const { setActiveId, activeId } = useTabs();

  return (
    <TabButton
      active={activeId === id}
      type="button"
      onClick={() => setActiveId(id)}
    >
      {children}
    </TabButton>
  );
};

export default Tab;
