import React from 'react'

export default function Collection() {
  return (
    <div>
      <CollectionPC/>
    </div>
  )
}
 const CollectionPC = () => {
    return (
     <div>
         <div className='font-Sacramento text-3xl text-amber-950'><h1>Nos Collection</h1></div>
         <div className='grid grid-cols-3 grid-rows-3 gap-2 hover:rounded-2xl hover:bg-black/20 p-2 transition duration-300'>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
            <div className='w-20 h-20'>😉</div>
         </div>
     </div>
    )
 }