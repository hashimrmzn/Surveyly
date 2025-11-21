import React from 'react'
import Aside from './dashboard/Aside';
import Dashboard_Window from './dashboard/Dashboard_Window';
function Dashboard() {
  return (
    <>
   
      <div className='dashbored min-vh-100 bg-body pt-3 pb-3 d-flex align-self-stretch'>
        <div className='container d-flex align-self-stretch justify-content-between'>
          <div className='aside-container d-flex '>
            <Aside />
          </div>
          <div className='dashbored-window p-4 bg-body-tertiary  ms-4 lk-4 rounded-1 shadow'>
            <Dashboard_Window />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Dashboard