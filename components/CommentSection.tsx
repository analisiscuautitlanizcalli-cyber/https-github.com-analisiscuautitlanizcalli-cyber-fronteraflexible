import React, { useState } from 'react';
import type { Comment } from '../types';
import { ExportIcon } from './icons';

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [author, setAuthor] = useState('');
    const [country, setCountry] = useState('');
    const [text, setText] = useState('');
    const [countryError, setCountryError] = useState('');

    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountry(value);
        if (value && !/^[a-zA-Z\s]*$/.test(value)) {
            setCountryError('País inválido. Solo se permiten letras y espacios.');
        } else {
            setCountryError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author.trim() && country.trim() && text.trim() && !countryError) {
            const newComment: Comment = {
                id: Date.now(),
                author,
                country,
                text,
                timestamp: new Date().toLocaleString('es-ES'),
            };
            setComments([newComment, ...comments]);
            setAuthor('');
            setCountry('');
            setText('');
        }
    };

    const handleExport = () => {
        if (comments.length === 0) {
            alert("No hay comentarios para exportar.");
            return;
        }

        const dataStr = JSON.stringify(comments, null, 2);
        const dataBlob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `comentarios-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-sky-400">Opiniones y Comentarios</h2>
                <button
                    onClick={handleExport}
                    disabled={comments.length === 0}
                    className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-3 rounded-md transition-colors duration-300 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-sm"
                    aria-label="Exportar comentarios a JSON"
                >
                    <ExportIcon className="w-4 h-4" />
                    Exportar
                </button>
            </div>
            
            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-slate-300 mb-1">Tu Nombre</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Ej. Ana Pérez"
                        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        required
                    />
                </div>
                 <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-1">País de Residencia</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={handleCountryChange}
                        placeholder="Ej. México"
                        className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                            countryError
                                ? 'border-red-500 ring-red-500'
                                : 'border-slate-600 focus:ring-sky-500 focus:border-sky-500'
                        }`}
                        required
                    />
                    {countryError && <p className="text-red-400 text-sm mt-1">{countryError}</p>}
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-slate-300 mb-1">Comentario</label>
                    <textarea
                        id="comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribe tu opinión aquí..."
                        rows={4}
                        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-slate-500 disabled:cursor-not-allowed"
                    disabled={!author.trim() || !country.trim() || !text.trim() || !!countryError}
                >
                    Enviar Comentario
                </button>
            </form>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {comments.length === 0 ? (
                    <p className="text-slate-400 text-center">Aún no hay comentarios. ¡Sé el primero!</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="bg-slate-700 p-4 rounded-md border-l-4 border-sky-500">
                            <p className="text-slate-300">{comment.text}</p>
                            <div className="text-right text-xs text-slate-400 mt-2">
                                <span className="font-semibold text-sky-400">{comment.author}</span> ({comment.country}) - {comment.timestamp}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;