import React, { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import data from '../data/tabs.json';

function TabsPage() {
  const { tabId } = useParams();
  const [tab, setTab] = useState(data.find(tab => tab.order === 0));

  useEffect(() => {
    setTab(data.find(tab => tab.id === tabId));
  }, [tabId]);

  return (
    <>
      <div style={{}}>
        <ul
          style={{
            display: 'flex',
            gap: '30px',
            listStyle: 'none',
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
      {tab && (
        <>
          <React.Fragment>
            <td>{tab.title}</td>
          </React.Fragment>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default TabsPage;
