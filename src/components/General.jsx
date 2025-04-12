import React from 'react';
import {Download, Trash2, FilePlus, FileUser } from 'lucide-react';
import '../styles/General.css';

function General({handleDownload, handleLoadExample, handleClear}) {

    return (

       <div className="general-container">
             <h1 className="general-title"><FileUser strokeWidth={3} /> CV <br /> Generator</h1>
            
                <button className="general-button load-btn" onClick={handleLoadExample}>
                    <FilePlus size={16} />Example</button>

                <button className="general-button clear-btn" onClick={handleClear}>
                    <Trash2 size={16} />Clear</button>

                <button className="general-button download-btn" onClick={handleDownload}>
                    <Download size={16} />Download</button>

        </div>
    );
}

export default General;