import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Provider
import { useUserId } from "../context/UserIdProvider";

// Components
import Footer from "../components/Footer";

// Hooks
import usePhoneNumberValidation from "../hooks/usePhoneNumberValidation";


const SignUpPage = () => {
  const navigate = useNavigate();

  const { setUserId } = useUserId();
  const { maskPhoneNumber, formatPhoneNumber, validatePhoneNumber } = usePhoneNumberValidation();

  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({ phone: "", email: "", password: "" , name: ""});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    let fieldValue = value;

    // Apply the phone number mask
    if (name === "phone") {
      fieldValue = maskPhoneNumber(value);
    }

    setFormFields({ ...formFields, [name]: fieldValue });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validatePhoneNumber(formFields.phone)) {
      newErrors.phone = "Número de telefone inválido";
    }
    if (!formFields.email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }
    if (formFields.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }
    if (formFields.name.length < 3) {
      newErrors.name = "Nome inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      phone: formatPhoneNumber(formFields.phone),
      email: formFields.email,
      password: formFields.password,
      name: formFields.name,
      role: "customer",
    };
    console.log(formData);

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || "Erro ao criar usuário");
    }
    // const responseData = await response.json(); // Get the response data
    const data = await response.json();
    setUserId(data._id); // Store the user ID in context
    console.log(data);

    alert("Usuário cadastrado com sucesso!");
    setFormFields({ phone: "", email: "", password: "", name: "" });
    
    // Navigate to another page and pass the response data
    navigate("/customer", { state: { user: data } });
  } catch (error) {
    alert(error.message);
  }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-white to-gray-300">
        <h1 className="mb-12 text-4xl font-bold text-primary">Cadastre-se como nosso cliente!</h1>
        <div className="glass bg-white/30 p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-primary">
            Dados da conta
          </h2>
          {/* Nome */}
          <div className="mb-4">
              <label className="block font-semibold">Nome</label>
              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className={`w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 border-white placeholder-gray-400 placeholder:font-size-bold focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.name ? "" : "border-red-500"}`}
              />
              {errors.name && (
                <p className="text-red-300 text-sm">{errors.name}</p>
              )}
            </div>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Telefone */}
            <div className="mb-4 text-gray-800">
              <label className="block font-semibold">Número de telefone</label>
              <input
                type="tel"
                name="phone"
                value={formFields.phone}
                onChange={handleChange}
                placeholder="(99) 99999-9999"
                maxLength="15"
                className={`w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 border-white placeholder-gray-400 placeholder:font-size-bold focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.phone ? "" : "border-red-500"}`}
              />
              {errors.phone && (
                <p className="text-red-300 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* E-mail */}
            <div className="mb-4">
              <label className="block font-semibold">E-mail de contato</label>
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={`w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 border-white placeholder-gray-400 placeholder:font-size-bold focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.email ? "" : "border-red-500"}`}
              />
              {errors.email && (
                <p className="text-red-300 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Senha */}
            <div className="mb-4">
              <label className="block font-semibold">Senha de acesso</label>
              <input
                type="password"
                name="password"
                value={formFields.password}
                onChange={handleChange}
                placeholder="********"
                className={`w-full mt-1 px-4 py-2 border rounded-lg bg-white/30 border-white placeholder-gray-400 placeholder:font-size-bold focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.password ? "" : "border-red-500"}`}
              />
              {errors.password && (
                <p className="text-red-300 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Botão de cadastro */}
            <button type="submit" className="custom-button w-full">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
