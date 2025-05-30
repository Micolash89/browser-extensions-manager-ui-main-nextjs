import Image from 'next/image'
import React from 'react'
import ToggleDark from './ToggleDark'

export default function HeaderMain() {
  return (
    <>
  <header className="w-full p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl flex justify-between">
         
              <label className='flex justify-between w-full' htmlFor="">
                <Image src="/assets/images/logo.svg" alt="logo estexsion" width={200} height={100} />
                
                <input type="text" />
              </label>

              <ToggleDark />
          
        </header>

    </>
  )
}
