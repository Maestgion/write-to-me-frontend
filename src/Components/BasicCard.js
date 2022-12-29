import React from 'react'

const BasicCard = ({icon, title, data}) => {
  return (
    <>
        <div className='w-[25vw] flex flex-wrap gap-4 rounded-xl bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border  border-gray-100 px-8 p-4 items-center'>

            <div className="text-white text-4xl">
                {icon}
            </div>
            <div className='text-white '>
                <p className='font-extrabold leading-tight'>{title}</p>
                <p>{data}</p>
            </div>

        </div>
    </>
  )
}

export default BasicCard