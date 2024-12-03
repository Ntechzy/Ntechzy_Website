import React from 'react'
// const data=[
//     {
//         id: 1,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  
//     {
//         id: 2,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  
//     {
//         id: 3,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  
//     {
//         id: 3,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  
//     {
//         id: 3,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  
//     {
//         id: 3,
//         title: 'Political Campaign',
//         image: '/assets/podban1.jpg',
//         description: 'WE WILL TAKE YOUR VISION TO THE GROUND',
//     },  

// ]
const PoliticalHome = () => {
  return (
    <div className='text-white  w-[95%] m-auto h-[83vh] -mt-16 ' data-aos="fade-down">
       <div className='flex flex-col gap-11 justify-center items-center'>
       <div className='font-bold text-2xl md:text-6xl md:w-[70%] text-center pt-9 '>
        A Political Campaign By Team Ntechzy pvt. limited
        </div>
        <p className='md:text-2xl text-xl font-semibold bg-red-500 md:px-8 md:p-3 m-7 p-5 rounded-lg text-white'>WE WILL TAKE YOUR VISION TO THE GROUND</p>
       </div>
    <div className='md:flex flex flex-col md:flex-row gap-1 md:mt-20 justify-center items-center px-1 '>
    {/* {data.map(item => (
        <div key={item.id}>
        <div>
        <img src={item.image} alt={item.title} className='w-64 h-52 '/>
        </div>
        <div>
       
        </div>
        </div>
      ))} */}
      <img src="/assets/pbanner1.png" alt="" className='md:hidden block'/>
      <img src="/assets/pbanner2.png" alt="" className='md:hidden block' />
       <img src="/assets/politicalbanimage.png" alt="" className='hidden md:block' />
      
    </div>
    </div>
  )
}

export default PoliticalHome