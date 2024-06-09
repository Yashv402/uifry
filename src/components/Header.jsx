import React from 'react'

function Header() {
  return (
    <div className=' mx-[3rem] lg:mx-[12rem] my-[1rem] lg:mt-[3rem] flex justify-between items-center h-auto'>
        <div className='flex justify-center items-center'>
        <img src="/Group.png" width={170} alt="uifry" />
        </div>
        <ul className='gap-[2rem] text-3xl items-center lg:flex hidden'>
            <li className='text-[#ff5555] font-bold'>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
        </ul>
        <button className='lg:block hidden text-3xl px-10 py-5 bg-black text-white rounded-xl '>Download</button>
        <img className='lg:hidden block' width={40} src="/menu-burger.png" alt="" />
    </div>
  )
}

export default Header