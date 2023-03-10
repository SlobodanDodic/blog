import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';

import { Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <>
      {showSidebar ? (
        <button className="flex text-white text-3xl items-center cursor-pointer fixed right-4 top-2 z-50" onClick={() => setShowSidebar(!showSidebar)} >
          x
        </button>
      ) : (
        <CgMenuRight className='flex xs:hidden w-6 h-6 fixed z-30 items-center cursor-pointer right-2 top-4' onClick={() => setShowSidebar(!showSidebar)} />
      )}

      <div onClick={() => setShowSidebar(!showSidebar)} className={`top-0 right-0 w-[75vw] text-white text-sm text-right pt-20 bg-gradient-to-l from-midnight to-midnight/90 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`} >
        <Link to='about' className="block p-4">about</Link>
        <Link to='writers' className="block p-4">writers</Link>
        <Link to='contact' className="block p-4">contact</Link>
        {!!user ? <Link to='logged' className="block p-4">profile</Link> : <Link to='auth-page' className="block p-4">login</Link>}
      </div>
    </>

  )
}
