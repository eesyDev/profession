import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SidebarLeft, SidebarRight } from '@/components';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
        <SidebarLeft />
        <div className="xl:pl-[240px] xl:pr-[290px]">
            <Component {...pageProps}/>
        </div>
        <SidebarRight />
    </div>
  )
}

export default App