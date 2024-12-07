import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Home: React.FC = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'Bienvenidos a SportZone',
      text: 'Disfruta de los mejores productos deportivos.',
      icon: 'success',
      confirmButtonText: 'Vamos!',
    });
  };

  return(
    <div className='container'>
      <div className='navbar'>
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catalogo</Link>
        <Link href="/ofertas">Ofertas Destacadas</Link>
      </div>
      <h1>Sport Zone</h1>
      <p>El sitio web con los mejores productos deportivos para ti</p>
      <button onClick={showAlert}>Haz clic aqui</button>
    </div>
  );
};

export default Home;

