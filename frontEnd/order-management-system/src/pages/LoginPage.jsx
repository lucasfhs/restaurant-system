import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserId } from "../context/UserIdProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserId } = useUserId();
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const queryParams = new URLSearchParams(formFields).toString();
      const response = await fetch(`http://localhost:3000/login?${queryParams}`, {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      setUserId(data.id); // Store the user ID in context
      navigate("/customer"); // Redirect to the customer page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[url('/login-bg.webp')] bg-cover bg-center flex items-center justify-center min-h-screen">
      <div className="glass p-8 rounded-2xl shadow-lg w-96 text-center text-gray-800">
        <h2 className="text-3xl text-primary font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              className="w-full px-4 py-2 mt-1 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block font-semibold">Senha</label>
            <input
              type="password"
              name="password"
              value={formFields.password}
              onChange={handleChange}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 mt-1 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="custom-button w-full">
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
};

export default LoginPage;