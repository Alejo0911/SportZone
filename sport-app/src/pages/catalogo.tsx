import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id: number;
    titulo: string;
    precio: string;
    image: string;
}

const Catalogo: React.FC = () => {
    const [sports] = useState<Product[]>([
        {
            id: 1,
            titulo: 'Balón Baloncesto Authentic Wilson',
            precio: '$259.900',
            image: 'Atlanta-Deportes-BAlon-Basket-Authentic-Wilson-300x225.jpg',
        },
        {
            id: 2,
            titulo: 'Balón Voleibol Soft Touch',
            precio: '$139.900',
            image: 'Atlanta-Deportes-Molten-SoftThouch-300x225.jpg',
        },
        {
            id: 3,
            titulo: 'Pelotas Tenis High Altitude',
            precio: '$44.900',
            image: 'Atlanta-Deportes-Pelota-tenis-Wilson-High-Altitude-US-OPEN-x3-2-300x225.jpg',
        },
    ]);
    return (
        <div className="container">
            <div className="navbar">
                <Link href="/">Home</Link>
                <Link href="/catalogo">Catálogo</Link>
                <Link href="/ofertas">Oferta Destacada</Link>
            </div>
            <h1>Catálogo de Productos</h1>
            <p>Aquí podrás encontrar todos nuestros productos deportivos.</p>
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
                        <p>{product.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
