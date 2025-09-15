
import React from 'react';

interface PdfViewerProps {
    url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
    return (
        <div className="w-full h-[75vh] bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700">
            <iframe
                src={url}
                title="Visor de PDF"
                className="w-full h-full border-0"
                allow="autoplay"
            ></iframe>
        </div>
    );
};

export default PdfViewer;