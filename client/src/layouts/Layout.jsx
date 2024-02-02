import React from 'react'

const Layout = ({children, title}) => {
  return (
    <div className="mx-auto w-1/2 border-opacity-50 rounded-md border">
      <h1 className="text-xl p-6 font-bold">{title}</h1>
      <div className='m-8'>
        {children}
      </div>
    </div>
  )
}

export default Layout