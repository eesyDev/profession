import React from 'react';
import { SearchBar } from '@/components';

const Home = () => {
  return (
    <div className='home content pl-8 pr-8'>
        <div className="flex">
            <SearchBar />
        </div>
    </div>
  )
}

export default Home;