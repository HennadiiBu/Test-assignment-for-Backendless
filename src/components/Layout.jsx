import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{}}>
      <ul>
        <li>
          <NavLink to="/dummyTable">dummyTable</NavLink>
        </li>
        <li>
          <NavLink to="/dummyChart">dummyChart</NavLink>
        </li>
        <li>
          <NavLink to="/dummyList">dummyList</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
