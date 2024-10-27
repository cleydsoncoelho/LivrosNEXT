// componentes/Menu.tsx
import React from "react";
import Link from "next/link"; // Importar o componente Link do Next.js
import Image from "next/image"; // Importar o componente Image do Next.js

// a) Definir o componente com export const Menu: React.FC = () => { }
export const Menu: React.FC = () => {
    return (
        // b) Retornar o menu de navegação, com tag nav, formatado pelo Bootstrap
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
            <div className='container'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' className='navbar-brand' width={60} height={60} />
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='justify-content-center' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link href='/' className='nav-link'>
                                Início
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/LivroLista' className='nav-link'>
                                Catálogo de Livros
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/LivroDados' className='nav-link'>
                                Novo Livro
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
