import React from 'react'
import './bentogrid.css';
import Image from 'next/image'

const BentoGrid = () => {
  return (
    <main>
  
  <div class="bento-grid">
    
    <div class="bento-box bento-col">
      
      <div class="bento-box">
        <div class="bento-box-content">
            <Image
              src="/galaxy1.jpg"
              alt="galaxy"
              className="dark:invert"
              width={100}
              height={100}
              priority
            /> </div>
      </div>
      
      <div class="bento-box">
        <div class="bento-box-content">2
      
        </div>
      </div>
      
    </div>
    
    <div class="bento-box bento-col">
      
      <div class="bento-box">
        <div class="bento-box-content">3</div>
      </div>
      
      <div class="bento-box">
        <div class="bento-box-content">4</div>
      </div>
      
      <div class="bento-box">
        
        <div class="bento-box">
          <div class="bento-box-content">5</div>
        </div>
        
        <div class="bento-box">
          <div class="bento-box-content">6</div>
        </div>
        
      </div>
      
    </div>

  </div>
  
</main>
  )
}

export default BentoGrid