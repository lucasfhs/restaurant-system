import React from 'react'
import MenuCarousel from '../../../components/MenuCarrousel';

const SampleMenu = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-5xl p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Cardápio do dia</h2>
        <MenuCarousel />
      </div>
    </div>
  );
}

export default SampleMenu