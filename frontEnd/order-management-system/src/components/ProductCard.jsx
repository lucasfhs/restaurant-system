import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  // return (
    // <div className="bg-white shadow-md rounded-lg p-4">
    //   <img src={product.images[0] || "https://placehold.co/150x150"} alt={product.name} className="w-full h-32 object-cover rounded-md" />
    //   <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    //   <p className="text-gray-500 text-sm">{product.description}</p>
    //   <p className="text-blue-600 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
    //   <button 
    //     onClick={() => addToCart(product)}
    //     className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600"
    //   >
    //     <ShoppingCart size={16} className="mr-2" /> Adicionar
    //   </button>
    // </div>
  // );
}
