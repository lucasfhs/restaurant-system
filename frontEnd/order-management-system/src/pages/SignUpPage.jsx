import { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone) newErrors.phone = "Número de telefone é obrigatório.";
    if (!formData.email) newErrors.email = "E-mail é obrigatório.";
    if (!formData.password) newErrors.password = "Senha é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Cadastro realizado:", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-800 via-primary  to-orange-500">
      <div className="glass bg-white/30 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-white">Cadastro</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Telefone */}
          <div className="mb-4">
            <label className="block text-white">Número de telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 text-white placeholder-gray-400 placeholder:font-size-bold focus:outline-none"
              placeholder="(99) 99999-9999"
            />
            {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
          </div>

          {/* E-mail */}
          <div className="mb-4">
            <label className="block text-white">E-mail de contato</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 text-white placeholder-gray-400 focus:outline-none"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>

          {/* Senha */}
          <div className="mb-4">
            <label className="block text-white">Senha de acesso</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 text-white placeholder-gray-400 focus:outline-none"
              placeholder="********"
            />
            {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
          </div>

          {/* Botão de cadastro */}
          <button
            type="submit"
            className="custom-button w-full"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
