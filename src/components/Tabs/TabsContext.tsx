import { createContext, useContext } from 'react';

interface Context {
  activeId: string;
  setActiveId(id: string): void;
}

export const TabsContext = createContext<Context | undefined>(undefined);

TabsContext.displayName = 'TabsProvider';

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('useTabs must be used within <TabsProvider />');
  return context;
};
