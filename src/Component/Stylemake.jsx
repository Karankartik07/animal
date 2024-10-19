import React from 'react'

function stylemake() {

  const linkers = [
    {
        img : <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg' /> ,
    },
    {
        img :<img src='https://a-z-animals.com/media/2022/01/rabbit-g9a96f6d1a_1280.jpg' /> ,
    },
    {
        img : <img src='https://m.media-amazon.com/images/I/71GXqew8QuL._AC_UF1000,1000_QL80_.jpg' /> ,
    },
    {
        img : <img src='https://www.bluecross.org.uk/sites/default/files/d8/styles/theme_feature_extra_large/public/assets/images/111432lpr.jpg.webp?itok=p4cGtPP_' /> ,
    },
  ]

  return (
   <>
  <div className='w-full h-screen  text-white'>
    <div className='w-full h-[180px]'></div>
    <div className='w-full h-[100px] bg-slate-400'>
      <div className=' w-full h-full list-none flex '>
           {
            linkers.map((link,index) =>{
              return <li key={index} className='flex border-none w-full'>
                {link.img}
              </li>
            }

            )
           }
      </div>

    </div>

    </div>
    </>
  )
}

export default stylemake