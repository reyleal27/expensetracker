import { Header } from 'components'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
      <div>
          <Header />
          <Suspense fallback='loading..'>
              <Outlet />
          </Suspense>
      </div>
  )
}

export default SharedLayout;
