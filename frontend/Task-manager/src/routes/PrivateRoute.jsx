import React from 'react';
import { Outlet } from 'react-router-dom';

function PrivateRoute({ allowedRoles }) {
  // Authorized
  return <Outlet />;
}

export default PrivateRoute;
