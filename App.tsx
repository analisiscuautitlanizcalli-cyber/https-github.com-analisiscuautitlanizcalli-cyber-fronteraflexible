import React from 'react';
import Header from './components/Header';
import PdfViewer from './components/PdfViewer';
import AuthorInfo from './components/AuthorInfo';
import SocialLinks from './components/SocialLinks';
import CommentSection from './components/CommentSection';

const App: React.FC = () => {
    // Se utiliza la URL de 'preview' para una mejor integración en el iframe
    const pdfUrl = "https://drive.google.com/file/d/1fumZM19jtxZYqbcSQsaYtU8PMqAdUGNE/preview";

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
            <Header />
            <main className="container mx-auto p-4 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                    {/* Columna del PDF */}
                    <div className="lg:col-span-2 mb-8 lg:mb-0">
                         <h2 className="text-2xl font-bold text-sky-400 mb-4">Documento</h2>
                        <PdfViewer url={pdfUrl} />
                    </div>

                    {/* Columna de Información y Comentarios */}
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        <AuthorInfo />
                        <SocialLinks />
                        <CommentSection />
                    </div>
                </div>
            </main>
             <footer className="text-center p-4 text-slate-500 text-sm">
                <p>&copy; 2024 Visor Académico. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default App;