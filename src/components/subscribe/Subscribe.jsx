//
// import React from 'react'
// import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='grid grid-cols-1 items-center gap-3 py-10 h-60 justify-center border'>
        <h1 className="text-2xl md:text-4xl font-semibold text-center"> Subscribe with Us Now!</h1>
        <div className='flex bg-white rounded-2xl max-w-xl mx-auto'>
            <input
                className="px-4 py-3 lg:w-72 rounded-2xl flex-1 border-none !focus:ring-0"
                type="text"
                placeholder="Enter Email Address"
            />
            <button className='bg-black text-white text-sm px-8 rounded-2xl' type='submit'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe
