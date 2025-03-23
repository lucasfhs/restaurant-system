import React from 'react'
import MenuCarousel from '../../../components/MenuCarrousel';

const SampleMenu = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto max-w-5xl p-6 text-center">
        <h2 className="text-2xl font-bold">Cardápio do dia</h2>
        <MenuCarousel />
      </div>
    </div>
  );
}

export default SampleMenu