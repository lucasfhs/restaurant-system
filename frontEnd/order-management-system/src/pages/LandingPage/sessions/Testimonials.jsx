import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "../../../components/TestimonialCard";

const testimonials = [
  {
    name: "Carlos Souza",
    text: "Ótima experiência! A comida chegou rápido e deliciosa. Recomendo muito!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Mariana Lopes",
    text: "Atendimento incrível e pratos bem preparados. Voltarei a pedir com certeza!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Ricardo Almeida",
    text: "O sistema de pedidos é super intuitivo e a entrega foi muito rápida. Adorei!",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white w-full">
      <div className=" flex flex-col items-center justify-center container mx-auto max-w-5xl p-10 gap-6">
        <div className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-center w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            O que nossos clientes dizem
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full shadow-lg border border-gray-200 rounded-lg"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
