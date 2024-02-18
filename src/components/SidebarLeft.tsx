import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../img/Logo.svg';
import { settings, menu } from '@/utils/data';


const SidebarLeft = () => {
  const router = useRouter();

  const activeClass = 'text-primary flex text-lg items-center gap-2 hover:text-primary-500';
  const inactiveClass = 'flex text-lg items-center gap-2 hover:text-primary'
  return (
    <div className='sidebar fixed start-0 xl:w-240 shadow-xl px-10 py-8 h-full'>
      <Link href="/">
            <div className='w-[100px] md:w-[129px]'>
                <Image
                    className='cursor-pointer'
                    src={Logo}
                    alt='logo'
                    layout='responsive'
                />
            </div>
        </Link>
        <div className="sidebar__sec mt-10">
          <h5 className="sidebar__sec-title font-medium text-xl">OVERVIEW</h5>
          <ul className='flex flex-col gap-3 mt-6'>
            {
              menu.map((item, index) => {
                const isActive = router.pathname === item.link;
                return (
                  <li key={index}>
                    <Link href={item.link} className={isActive ? `${activeClass}` : `${inactiveClass}`}>
                      <span className="icon">{item.icon}</span>
                      <span className="name">{item.name}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="sidebar__sec mt-10">
          <h5 className="sidebar__sec-title font-medium text-xl">SETTINGS</h5>
          <ul className='flex flex-col gap-3 mt-6'>
            {
              settings.map((item, index) => {
                const isActive = router.pathname === item.link;
                return (
                  <li key={index}>
                    <Link href={item.link} className={isActive ? `${activeClass}` : `${inactiveClass}`}>
                      <span className="icon">{item.icon}</span>
                      <span className="name">{item.name}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default SidebarLeft