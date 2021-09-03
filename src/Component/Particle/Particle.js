import React from 'react';
import Particles from "react-tsparticles";
import option from './ParticleConfig';

const Particle = () => {
	const particlesInit = (main) => {
		// console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	}

	const particlesLoaded = (container) => {
		// console.log(container);
	}
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={option}
			height='100vh'
			
		/>
	);
};

export default Particle;