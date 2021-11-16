import React from 'react';
import styled from 'styled-components';

interface TabPanelsProps {
  children: React.ReactNode;
}

const TabPanelsContainer = styled.div`
  padding: 10px;
`;

const TabPanels = ({ children }: TabPanelsProps) => {
  return <TabPanelsContainer>{children}</TabPanelsContainer>;
};

export default TabPanels;
