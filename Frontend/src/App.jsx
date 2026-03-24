import React from 'react'
import Logo from './assets/hero.png'
const App = () => {
  return (
    <div className='font-Roboto-text min-h-screen bg-amber-200 flex justify-center items-center'>
         <div className='font-Roboto-text border-2 rounded-lg border-gray-900 shadow-md  shadow-gray-900 w-full max-w-md bg-white flex flex-col md:flex-row flex-1 justify-center items-center gap-5 px-4 py-2'>
             <div className=''>
                <img src={Logo} alt="" />
             </div>
             <div  className='font-Roboto-text text-6xl font-semibold'>
                <h1>TitanForge</h1>
             </div>
         </div>
      </div>
  )
}

export default App