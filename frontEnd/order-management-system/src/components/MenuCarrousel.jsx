import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import DishCard from "./DishCard";

const MenuCarousel = () => {
  const dishes = [
    { name: "Pizza de Calabresa", description: "Deliciosa pizza com calabresa fatiada, cebola e queijo derretido.", price: 29.90, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Sushi Combo", description: "Uma seleção de sushis e sashimis frescos, preparados com ingredientes de alta qualidade.", price: 39.90, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Burger Deluxe", description: "Hambúrguer artesanal com 200g de carne, queijo cheddar, bacon e molho especial.", price: 19.90, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="px-4 py-6">
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        initialSlide={0}
        // loop={true}
        speed={1500} // Ajusta a velocidade da transição (1.5s)
        // autoplay={{ delay: 2000 }}
        // freeModeMomentumRatio={0.8} // Ajusta a inércia da rolagem
        className="w-full max-w-5xl mx-auto !overflow-visible"
      >
        {dishes.map((dish, index) => (
          <SwiperSlide
            key={index}
            className="!w-fit  rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
          >
            <DishCard dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenuCarousel;
