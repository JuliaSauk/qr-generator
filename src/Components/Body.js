import React from 'react';
import GenerationForm from './GenerationForm';

export default function Body() {
    return (
        <div class="body">
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>   
            <div class="gen-form">
            <h1>Generate QR Code For Your Wi-Fi</h1>
                <GenerationForm/>
            </div>
        </div>
    );
};