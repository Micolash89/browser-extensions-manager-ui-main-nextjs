import Image from 'next/image'
import React from 'react'

export default function ToggleDark() {
  return (
    <>
    <button className='p-3 bg-blue-700 rounded-xl h-fit hover:bg-blue-600 cursor-pointer'>
                <Image src="/assets/images/icon-moon.svg" alt="imagen luna" className='' width={20} height={20} />
                <Image src="/assets/images/icon-sun.svg" alt="imagen sol" className='hidden' width={20} height={20} />
                </button>
    </>
  )
}
