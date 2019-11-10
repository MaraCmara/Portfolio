import React from 'react';
import { About } from '../components/styledAbout';

export default () => (
	<About lang='en'>
		<img
			className='portrait'
			src='/IMG/profileImg.jpg'
			alt='Martina Fischmeister'
		/>
		<span className='about'>
			<h1>Marek Kulhavý aka Mára Čmára</h1>
			<p>
				I´m profesional illustrator based in Prague. I focus mainly on editorial
				illustration, illustrating magazine covers, posters or making comics. My
				work is specific for its distinctive colors and combination of analogue
				and digital media. Illustration is a means of communication, which is
				why I always approach it with a modern attitude. You could see my
				illustrations in a magazine, for example RedWay or Charles University
				magazines. You can know my work from competitions "Raw Art Wrestling"
				and "Art Wall" or the comics festival KOMA.
			</p>
			<p>
				I can illustrate for you articles, magazines and book covers, covers for
				music records, comics, websites or mural art designs. There are no
				limits to imagination.
			</p>
		</span>
	</About>
);
