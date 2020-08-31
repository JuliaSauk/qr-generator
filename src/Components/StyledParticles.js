import React from 'react';
import Particles from "react-tsparticles";

export const StyledParticles = () => {
    return (
        <Particles id="tsparticles"
        style={{zIndex: '-1', position: 'absolute', height: 'fit-content', top: 0, left: 0}}
        options={{
        background: {
            color: {
            value: "#000000",
            },
        },
        fpsLimit: 140,
        interactivity: {
            detectsOn: "canvas",
            events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
            },
            modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            },
        },
        particles: {
            color: {
            value: "#ffffff",
            },
            links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
            },
            collisions: {
            enable: true,
            },
            move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
            },
            number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 30,
            },
            opacity: {
            value: 0.5,
            },
            shape: {
            type: "circle",
            },
            size: {
            random: true,
            value: 5,
            },
        },
        detectRetina: true,
        }}/>
    );
};