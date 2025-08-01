import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

function UserDashboard() {
  useUserAuth()
  return (
    <div>UserDashboard123</div>
  )
}

export default UserDashboard