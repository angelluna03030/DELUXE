import React from 'react';
import '../../styles/index.css'; // Asegúrate de importar tu archivo CSS
import { Link } from 'react-router-dom';


export const CardCategoria = ({ name, price, imageSrc,id  }) => {
  return (
    <Link to={`/producto/${id}`}>
      <div className="max-w-sm w-48 h-72 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform cursor-pointer hover:scale-105 hover:border-gray-300 hover:bg-gray-100">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt={name}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1">{name}</h2>
          <p className="text-gray-600 text-base">${price}</p>
        </div>
      </div>
    </Link>
  );
};

