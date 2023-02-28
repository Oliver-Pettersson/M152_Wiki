import React from 'react'
import Card from '../../organism/Card'

export default function AboutPage() {
  return (
    <>
    <div className='flex justify-center h-screen'>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-20">
      <div className="w-60 h-80 ">
          <div className="w-full h-4/5 bg-[#D9D9D9]"></div>
          <div className="w-full h-1/5 hover:h-2/5 bg-[#EBB5B5] flex items-center justify-center">
            <p>Sascha Sizwe Buthelezi</p>
          </div>
        </div>
        <div className="w-60 h-80">
          <div className="w-full h-3/5 bg-[#D9D9D9]"></div>
          <div className="w-full h-2/5 bg-[#EBB5B5] flex items-center justify-center">
            <p>Oliver Yngve Akbar Pettersson</p>
          </div>
        </div>
        <div className="w-60 h-80">
          <div className="w-full h-3/5 bg-[#D9D9D9]"></div>
          <div className="w-full h-2/5 bg-[#EBB5B5] flex items-center justify-center">
            <p>Daide Leandro Marcoli</p>
          </div>
        </div>
        <Card />
        {/* <div className="w-60 h-80">
          <div className="w-full h-3/5 bg-[#D9D9D9]"></div>
          <div className="w-full h-2/5 bg-[#EBB5B5] flex items-center justify-center">
            <p>Andrin Klarer</p>
          </div>
        </div> */}
      </div>
      </div>
    </>
  )
}
