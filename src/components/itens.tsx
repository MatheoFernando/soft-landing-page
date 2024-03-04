import React from 'react';
import { ItensContent } from '../constants'

const items = [
  {
    title:  "Graphic design Great ",
    description: "Unlock a world of creativity with our Graphic Design services.",
    imageUrl: "/images/desktop/image-graphic-design.jpg"
  },
  {
    title: "Photography",
    description: "Capture the moment with our professional Photography services.",
    imageUrl: "/images/desktop/image-photography.jpg"
  }
];

const Last = () => {
  return (
    <div className="grid md:grid-cols-2 w-full text-center ">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >       
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-lg">{item.description}</p>
        </div>
      ))}
    </div>
  );
};



export  function Itens() {
  return (
              <div className="flex flex-col">
              {ItensContent.map((item, i) => (
                <div key={item.id} className={`w-full md:flex md:flex-row md:justify-between md:items-center gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:max-w-lg flex flex-col justify-center container">
                    <h2 className="md:text-5xl text-2xl text-primary-nest  mb-6 font-semibold my-12">{item.label}</h2>
                    <p className="md:text-base text-normal text-sm leading-7 mb-2 text-slate-600 my-8">{item.descr}</p>
                    <a href="#" className={`rounded-xl  w-28 font-medium text-lg border-b-4 my-12  ${i === 0 ? 'border-Yellow' : 'border-soft-red'}`}>{item.link}</a>
                  </div>
                
                      <img src={item.image_url} alt="" className="w-full md:w-1/2" />
                
                </div>
              ))}
              <Last/>
            </div>
            
  )
}
