import React, { useContext } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { UserContext } from '../../context/userContext';

function Dashboard() {
  useUserAuth();
  const {user}=useContext(UserContext);
  return (
    <div>sandeep
    </div>
  )
}

export default Dashboard