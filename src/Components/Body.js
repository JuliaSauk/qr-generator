import React from 'react';
import GenerationForm from './GenerationForm';
import Particles from 'react-particles-js';

export default function Body() {
    return (
        <div class="body">
            <div class="gen-form">
            <h1>Generate QR Code For Your Wi-Fi</h1>
                <GenerationForm/>
            </div>
        </div>
    );
};