import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout';

const DummyChart = lazy(() => import('./tabs/dummyChart'));
const DummyList = lazy(() => import('./tabs/dummyList'));
const DummyTable = lazy(() => import('./tabs/dummyTable'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<DummyList />} />
          <Route path="dummyList" element={<DummyList />} />
          <Route path="dummyTable" element={<DummyTable />} />
          <Route path="dummyChart" element={<DummyChart />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
