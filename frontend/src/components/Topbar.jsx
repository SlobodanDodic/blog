import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaHome, FaUserCircle } from 'react-icons/fa';

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex h-14 w-screen sticky top-0">
      <div className="px-2 flex h-14 mx-auto max-w-screen-lg w-full items-center justify-between border-b border-b-slate-700/40 uppercase">
        <Link to='/'>
          <FaHome className='w-6 h-6' />
        </Link>

        {/* Full view */}
        <div className="hidden xs:flex flex-row justify-between w-auto">
          <Link to='about' className="group transition duration-300">
            <h2 className=' hover:text-red-900'>about</h2>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
          </Link>
          <Link to='writers' className="mx-4 group transition duration-300">
            <h2 className=' hover:text-red-900'>writers</h2>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
          </Link>
          <Link to='contact' className="group transition duration-300">
            <h2 className=' hover:text-red-900'>contact</h2>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
          </Link>
        </div>

        {!!user ? <Link to='/logged' className='hidden xs:flex'>
          <FaUserCircle className='w-6 h-6' />
        </Link> : <Link to='/auth-page' className='hidden xs:flex'>
          <AiOutlineLogin className='w-6 h-6' />
        </Link>}

        {/* Mobile view */}
        <Sidebar />

      </div>
    </div>
  )
}
