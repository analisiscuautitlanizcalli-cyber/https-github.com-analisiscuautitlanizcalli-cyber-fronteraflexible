
import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon } from './icons';

const SocialLinks: React.FC = () => {
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">Contacto y Redes</h2>
            <p className="text-slate-400 mb-4">Siga al autor o deje sus comentarios en sus redes sociales:</p>
            <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors duration-300" aria-label="Twitter">
                    <TwitterIcon className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors duration-300" aria-label="LinkedIn">
                    <LinkedInIcon className="w-8 h-8" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors duration-300" aria-label="Facebook">
                    <FacebookIcon className="w-8 h-8" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
