import React, { Suspense, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import data from '../data/tabs.json';

function TabsPage() {
  const { tabId } = useParams();
  const location = useLocation();
  const [tab] = useState(data.find(tab => tab.id === tabId));

  const locationFrom = location?.state?.from ?? '/';
  return (
    <>
      <Link
        to={locationFrom}
        style={{ display: 'inline-block', padding: '15px' }}
      >
        Go back
      </Link>{' '}
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
