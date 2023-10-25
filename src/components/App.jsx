import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('components/Layout'));
const TabsPage = lazy(() => import('../pages/TabsPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Layout />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Routes>
    </Suspense>
  );
};
