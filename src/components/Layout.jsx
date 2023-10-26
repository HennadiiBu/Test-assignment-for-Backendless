import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../data/tabs.json';

function Layout() {
  return (
    <div style={{}}>
      <ul
        style={{
          display: 'flex',
          gap: '30px',
          listStyle:"none",
          justifyContent: 'center',
        }}
      >
        {data.map(tab => {
          return (
            <li key={tab.id}>
              <NavLink to={tab.id}>{tab.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
