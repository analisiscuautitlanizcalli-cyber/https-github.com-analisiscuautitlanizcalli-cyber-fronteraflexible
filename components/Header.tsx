
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-800 shadow-md">
            <div className="container mx-auto px-4 lg:px-8 py-4">
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    Visor de Documento Académico
                </h1>
            </div>
        </header>
    );
};

export default Header;
