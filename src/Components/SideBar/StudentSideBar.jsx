
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PiStudentBold } from 'react-icons/pi';
import { RiDashboardFill } from 'react-icons/ri';

import { BsSearch} from 'react-icons/bs';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {tittle:'DashBoard'},
    {tittle:'Pages'},
    {tittle:'Media'},
    {
      tittle:'Project',
      submenu:'true',
      submenuItem :[
        
    {tittle:'submenu menu 1'},
    {tittle:'submenu menu 2 '},
    {tittle:'submenu menu 2'},
        
      ],
    },
    {tittle:'Analytics'},
    {tittle:'inbox'},
    {tittle:'Profile'},
    {tittle:'settings'},
    {tittle:'logout'},
  
    
    

  ];

  let containerClass = 'bg-dark-purple h-screen p-5 pt-8';
  if (open) {
    containerClass += ' w-72';
  } else {
    containerClass += ' w-20';
  }
  containerClass += ' relative duration-300';

  return (
    <div className='flex'>
      <div className={containerClass}>
        <AiOutlineArrowLeft
          onClick={() => {
            setOpen(!open);
          }}
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
        ></AiOutlineArrowLeft>
        <div></div>
        <div className='flex gap-5 items-center'>
          <PiStudentBold className='bg-yellow-400 text-red text-5xl'></PiStudentBold>
          <div className={`text-3xl text-white ${!open && 'hidden'} duration-300`}>Student </div>
        </div>
        <div className='flex items-center rounded-md bg-light-white mt-6 px-2.5 py-2'>
        <BsSearch className=' text-lg block float-left cursor-pointer mr-2.5' ></BsSearch>
        <input type="search" placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />
       
        </div>
        <ul  className=''> 
          {Menus.map((menuitem,index) => (
            <>
            
          <li className = 'text-gray-500  flex items-center text-sm gap-x-4 cursor-pointer p-2 hover:bg-light-white mt-2'key={index}>
            <span className='text-white block float-left text-2xl'> <RiDashboardFill></RiDashboardFill></span>
            <span className={`${!open && 'hidden '}`}>{menuitem.tittle}</span></li>
            
            </>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default SideBar;
