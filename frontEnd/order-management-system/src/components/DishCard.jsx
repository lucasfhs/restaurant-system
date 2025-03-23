const DishCard = ({ dish }) => {
    return (
      <div className="w-64 bg-white overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
        {/* Imagem */}
        <img
          src={dish.image}
          alt={dish.name}
          className="w-64 max-w-80 h-40 object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
  
        {/* Conteúdo */}
        <div className="p-4 flex flex-col gap-2">
          {/* Nome do prato */}
          <h3 className="text-lg font-bold text-gray-900">{dish.name}</h3>
  
          {/* Descrição curta */}
          <p className="text-sm text-gray-600 line-clamp-2">{dish.description}</p>
  
          {/* Preço e botão */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-semibold text-green-400">
              R$ {dish.price.toFixed(2)}
            </span>
            <button className="bg-primary text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-800 transition">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DishCard;
  