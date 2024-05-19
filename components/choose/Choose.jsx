import React from 'react'
import Image from 'next/image'
const Choose = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center '>
        <h1 className='text-5xl uppercase mb-2'>choosing Us</h1>
      
        <Image
          src="/galaxy1.jpg"
          alt="sky"
          width={800}
          height={800}
          className=" center"
        />
        <h2 className='uppercase mb-2'>spacecraft technology</h2>
        <p className='ml-20 mr-20'> our state-of-the-art spacecraft is equipped with the latest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos reprehenderit, rerum facilis aspernatur, officiis natus suscipit saepe quas debitis incidunt aliquid, velit quod recusandae beatae molestiae necessitatibus tempore deserunt architecto eum sit. Tempore sit quia vero ipsa voluptatibus blanditiis fugit deleniti, recusandae delectus perferendis quibusdam repudiandae esse magni dolor non.</p>
        
    </div>
  )
}

export default Choose