import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

function CreateTask() {
  useUserAuth();
  return (
    <div>CreateTask</div>
  )
}

export default CreateTask