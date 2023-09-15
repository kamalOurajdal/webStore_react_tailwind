import { faMobileAlt, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Categories() {
  // categories variable
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: 'fas fa-mobile-alt',
    },
    {
      id: 2,
      name: 'Jewelery',
      icon: 'fas fa-ring',
    },
    {
      id: 3,
      name: "clothes",
      icon: 'fas fa-tshirt',
    },
    {
      id: 4,
      name: 'Beauty',
      icon: 'fas fa-magic',
    },
    {
      id: 5,
      name: 'Shoes',
      icon: 'fas fa-shoe-prints',
    },
  ]
  return (
    <section className='bg-white w-1/5 h-[65vh] shadow-md shadow-gray-400 mr-2'>
      
        {categories.map((category, index) => 
         <button key={index} className='text-left pl-6 w-full my- py-2 hover:bg-rose-100 transform duration-300 ease-in'><FontAwesomeIcon icon={faMobileAlt}/> {category.name} </button>
        )}
    </section>
  )
}

export default Categories
