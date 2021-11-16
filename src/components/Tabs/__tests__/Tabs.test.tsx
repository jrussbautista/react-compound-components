import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from '../Tabs';

test('should display correct panel when tab click', () => {
  render(
    <Tabs initialActiveId="firstTab">
      <Tabs.List>
        <Tabs.Tab id="firstTab">first tab</Tabs.Tab>
        <Tabs.Tab id="secondTab">second tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel id="firstTab">hi, first tab</Tabs.Panel>
        <Tabs.Panel id="secondTab">hi, second tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );

  const secondTab = screen.getByRole('button', { name: 'second tab' });
  userEvent.click(secondTab);

  expect(screen.getByText('hi, second tab')).toBeInTheDocument();

  const firstTab = screen.getByRole('button', { name: 'first tab' });
  userEvent.click(firstTab);

  expect(screen.getByText('hi, first tab')).toBeInTheDocument();
});

test('should display correct panel based on initial active tab', () => {
  render(
    <Tabs initialActiveId="firstTab">
      <Tabs.List>
        <Tabs.Tab id="firstTab">first tab</Tabs.Tab>
        <Tabs.Tab id="secondTab">second tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel id="firstTab">hi, first tab</Tabs.Panel>
        <Tabs.Panel id="secondTab">hi, second tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );

  expect(screen.getByText('hi, first tab')).toBeInTheDocument();
});

test('should display correct panel based on active tab', () => {
  render(
    <Tabs initialActiveId="secondTab">
      <Tabs.List>
        <Tabs.Tab id="firstTab">first tab</Tabs.Tab>
        <Tabs.Tab id="secondTab">second tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel id="firstTab">hi, first tab</Tabs.Panel>
        <Tabs.Panel id="secondTab">hi, second tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );

  expect(screen.getByText('hi, second tab')).toBeInTheDocument();
});
