import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [hideLoading, setHideLoading] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayClickHandler, setOverlayClickHandler] = useState(false);

  let sharedState = {
    hideLoading,
    setHideLoading,
    showDrawer,
    setShowDrawer,
    showOverlay,
    setShowOverlay,
    overlayClickHandler,
    setOverlayClickHandler
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}