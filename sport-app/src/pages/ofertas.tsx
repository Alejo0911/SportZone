import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id: number;
    titulo: string;
    precio: string; // Precio original
    precioConDescuento: string; // Precio con descuento
    image: string;
}

const Ofertas: React.FC = () => {
    const [sports] = useState<Product[]>([
        {
            id: 1,
            titulo: "Balon Forza Thermo Golty",
            precio: "$262.900", // Precio original
            precioConDescuento: "$199.900", // Precio con descuento
            image: "Balon-Golty-Forza-300x225.jpg",
        },
        {
            id: 2,
            titulo: "Guantes Arquero Adidas",
            precio: "$179.900", // Precio original
            precioConDescuento: "$129.900", // Precio con descuento
            image: "download.jpg",
        },
        {
            id: 3,
            titulo: "Guayos Nike Mercurial",
            precio: "$589.900", // Precio original
            precioConDescuento: "$459.900", // Precio con descuento
            image: "Nike-mercurial.jpg",
        },
    ]);

    return (
        <div className="container">
            <div className='navbar'>
                <Link href="/">Inicio</Link>
                <Link href="/catalogo">Catalogo</Link>
                <Link href="/ofertas">Ofertas Destacadas</Link>
            </div>
            <h1>Ofertas Destacadas</h1>
            <p>Descubre nuestras ofertas especiales para ti.</p>
            <div className="catalogo">
                {sports.map((product) => (
                    <div key={product.id} className="product-card">
                        <Image
                            src={`/image/${product.image}`}
                            alt={product.titulo}
                            width={300}
                            height={225}
                            layout="intrinsic"
                        />
                        <h3>{product.titulo}</h3>
                        <p className="precio-original">{product.precio}</p>
                        <p className="precio-oferta">{product.precioConDescuento}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ofertas;