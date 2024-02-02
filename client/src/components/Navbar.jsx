import React from 'react'

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Statistic",
      path: "/"
    },
    {
      id: 2,
      name: "Invoice",
      path: "/invoice"
    },
    {
      id: 3,
      name: "Partner",
      path: "/partner"
    }
  ]

  return (
    <div className='flex justify-between items-center mx-auto my-8 py-6 w-1/2 border-opacity-50 rounded-md border'>
      <h1 className='mx-8'>Invoice App</h1>

      <ul className='mx-8 flex gap-3'>
        {links.map(({id, name, path}) => (
          <li key={id}>
            <a href={path}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar