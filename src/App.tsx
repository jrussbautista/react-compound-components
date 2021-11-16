import Tabs from './components/Tabs';

function App() {
  return (
    <div>
      <h1>Sample React Compound Components</h1>
      <div>
        <h2>Tabs</h2>
        <Tabs initialActiveId="tomato">
          <Tabs.List>
            <Tabs.Tab id="tomato">Tomato</Tabs.Tab>
            <Tabs.Tab id="orange">Orange</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel id="tomato">hello, tomato</Tabs.Panel>
            <Tabs.Panel id="orange">hello, orange</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
