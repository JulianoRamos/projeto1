import React, { createContext, useState, useContext, useMemo } from 'react';
import { Progress } from '@bplustecnologia/components-web';

interface IProgressContextData {
  isLoad: boolean;
  setLoad(load: boolean): void;
}

interface IProgressProvider {
  children: React.ReactNode;
}

const ProgressContext = createContext<IProgressContextData>(
  {} as IProgressContextData,
);

const ProgressProvider: React.FC<IProgressProvider> = ({ children }) => {
  const [isLoad, setLoad] = useState(false);

  const value = useMemo(() => {
    return {
      isLoad,
      setLoad,
    };
  }, [isLoad, setLoad]);

  return (
    <ProgressContext.Provider value={value}>
      {isLoad && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          <Progress />
        </div>
      )}
      {children}
    </ProgressContext.Provider>
  );
};

function useProgress(): IProgressContextData {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used within an ProgressProvider');
  }

  return context;
}

export { ProgressProvider, useProgress };
