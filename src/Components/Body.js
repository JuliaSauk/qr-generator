import React from 'react';
import GenerationForm from './GenerationForm';

export default function Body() {
    return (
        <div style={{position: 'absolute', top: 70, textAlign: 'center', left: 0, right: 0}}>
            <h1>Generate QR Code For Your Wi-Fi</h1>
            <GenerationForm/>
        </div>
    );
};