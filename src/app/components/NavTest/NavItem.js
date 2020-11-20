import React from "react"

function NavItem({children, href='#', onClick }) {
  const props = {}
  if(onClick) {
    props.onClick = onClick
  } else {
    props.href = href
  }
  return (
    <li>
    <a
      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 cursor-pointer"
      {...props}
    >
      {children}
    </a>
  </li>
  )
}

export default NavItem 