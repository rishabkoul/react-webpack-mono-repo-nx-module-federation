import { DataProvider } from '@pspl/data-context';

import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const MonthlySip = React.lazy(() => import('monthly-sip/Module'));

const DailySip = React.lazy(() => import('daily-sip/Module'));

export function App() {
  return (
    <DataProvider>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monthly-sip">MonthlySip</Link>
          </li>
          <li>
            <Link to="/daily-sip">DailySip</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<NxWelcome title="pspl-frontend" />} />
          <Route path="/monthly-sip" element={<MonthlySip />} />
          <Route path="/daily-sip" element={<DailySip />} />
        </Routes>
      </React.Suspense>
    </DataProvider>
  );
}
export default App;
