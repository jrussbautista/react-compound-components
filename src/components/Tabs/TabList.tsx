import React from 'react';
import styled from 'styled-components';

const TabListContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface TabListProps {
  children: React.ReactNode;
}

const TabList = ({ children }: TabListProps) => {
  return <TabListContainer>{children}</TabListContainer>;
};

export default TabList;
