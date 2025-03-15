import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div
      className="bg-[url('/login-bg.webp')] bg-cover bg-center flex items-center justify-center min-h-screen "
    >
      <div className="glass p-8 rounded-2xl shadow-lg w-96 text-center text-gray-800">
        <h2 className="text-3xl text-primary font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4 text-left">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 mt-1 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block font-semibold">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 mt-1 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="custom-button w-full"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm mt-4">
          Não tem uma conta?{" "}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage