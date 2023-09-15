import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#0f3060] w-full py-20 px-8'>
      <div className='flex justify-between items-start text-gray-400'>
          <div className='w-1/3'>
            <h1 className='font-bold text-3xl text-[#e94560]'>Kan9ala</h1>
            <p className='mt-8'>Where Style Meets Comfort. Discover fashion-forward clothing and accessories that prioritize quality, affordability, and sustainability. Elevate your wardrobe with Kan9ala today.</p>
            <div className=' flex justify-around mt-6'>
              <button className='bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70'>
                <i class='fa-brands fa-google-play mr-2'></i>
                <span>Google Play</span>
              </button>
              <button className='bg-[#c1cfda] p-3 rounded text-black font-medium bg-opacity-70'>
                <i class='fa-brands fa-app-store-ios mr-2'></i>
                <span>App Store</span>
              </button>
            </div>
          </div>

          <div className=''>
            <h2 className='text-white font-bold text-lg'>About Us</h2>
            <ul className='leading-8'>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className=''>
            <h2 className='text-white font-bold text-lg'>Customer Care</h2>
            <ul className='leading-8'>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2 className='text-white font-bold text-lg'>Contact Us</h2>
            <ul className='leading-8'> 
              <li>Amjdadar Ikniouen Tinghir,<br/> Morocco, Zip 45302 </li>
              <li>Email: Kan9ala.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
