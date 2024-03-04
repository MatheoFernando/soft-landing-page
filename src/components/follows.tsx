import React from 'react'
import { FollowsPeople } from '../constants'

export function Follows() {
  return (
    <div className='mt-16 text-center container'>
              <h1 className='text-3xl font-medium leading-10 '>Client testimonials </h1>
              <div className='mt-16 flex flex-col md:flex-row items-center justify-between gap-12'>
      {FollowsPeople.map((item) => (
              <div key={item.id} className="max-w-xl flex flex-col items-center">
                            <img src={item.image_url} alt="" className="rounded-full h-28 w-28"/>
                            <p className="text-lg text-slate-700 mt-4 max-w-sm my-6 ">{item.descr}</p>
                            <h1 className='text-xl my-4 font-semibold'>{item.label}</h1>
                            <p className='text-sm text-slate-500'>{item.link}</p>
              </div>
      ))}
    </div>
    </div>
  )
}
