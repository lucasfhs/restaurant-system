import React from 'react'
import { Link } from "react-router-dom";
import LoginOptions from "../../../components/LoginOptions";
import { Button } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="bg-hero flex flex-col flex-grow pt-18">
    {/* <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Botão Primário
      </Button>
      <Button variant="contained" color="secondary">
        Botão Secundário
      </Button>
    </ThemeProvider> */}

    <div className="flex flex-col lg:flex-row justify-center items-center p-6 sm:gap-8 ">
      {/* Main Content */}
      <main className="  flex flex-col justify-center text-white p-2 sm:p-12 w-full lg:w-[550px] xl:w-[700px] mb-6 sm:mb-0">
        {/* Slogan */}
        <aside className="w-full space-y-6 max-w-150">
          <h3 className="text-3xl sm:text-6xl font-bold leading-tight break-words sm:max-w-120">
            Sabores que conquistam, momentos que marcam.
          </h3>
          <p className="sm:text-2xl break-words">
            Fique ligado para ter a melhor experiência de compra sem
            precisar enfrentar restaurantes lotados.
          </p>
          <a
            href="https://wa.me/1234567890" // TODO: Substituir pelo número real
            className="text-center flex items-center mt-6 text-sm bg-linear-to-br from-green-500 to-green-600 text-white px-6 py-3 max-w-68 md:text-lg xl:text-xl md:max-w-fit rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp size={24} className="mr-3" />
            <span className="flex-1">Fale conosco no WhatsApp</span>
          </a>
        </aside>  
      </main>

      {/* Login Options */}
      <LoginOptions />
    </div>
  </div>
  )
}

export default Hero