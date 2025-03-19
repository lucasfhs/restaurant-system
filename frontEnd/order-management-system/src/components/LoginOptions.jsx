const LoginOptions = () => {
  return (
    <div className="bg-white glass flex flex-col  justify-around w-4/5 gap-20 p-6 rounded-2xl shadow-lg  text-center border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Faça Login no Sistema
      </h3>
      <div className="flex flex-col gap-3">
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition">
          Sou Cliente
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition">
          Sou Entregador
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-red-400 transition">
          Sou Funcionário
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
