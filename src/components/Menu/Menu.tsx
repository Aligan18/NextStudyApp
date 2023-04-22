import { useMenuContext } from '@/context/menu.context'
import React from 'react'

const Menu = () => {

const {menu,firstCategory,setMenu} = useMenuContext()

  return (
    <div>
        <ul>
            {menu.map((m)=><li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
      </ul>
    </div>
  )
}

export default Menu