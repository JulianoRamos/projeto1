import { ModalProvider, ToastProvider } from '@bplustecnologia/components-web';
import React from 'react';

import { AuthProvider } from './auth';
import { ProgressProvider } from './progress';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => (
  <ProgressProvider>
    <ModalProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ModalProvider>
  </ProgressProvider>
);

export default AppProvider;
