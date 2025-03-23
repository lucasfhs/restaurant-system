const LoginOptions = () => {
  return (
    <div className="glass border flex flex-col w-full max-w-76 gap-8 p-6 rounded-2xl shadow-lg text-center sm:min-h-72 lg:max-w-68 xl:size-76 2xl:size-80">
      <h3 className="text-xl font-semibold text-gray-800">
        Faça Login no Sistema 
      </h3>
      <div className="flex my-auto flex-col gap-3 w-[80%] max-w-46 mx-auto lg:gap-5">
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
