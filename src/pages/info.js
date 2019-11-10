import React from 'react';
import { About } from '../components/styledAbout';

export default () => (
	<About>
		<img
			className='portrait'
			src='/IMG/profileImg.jpg'
			alt='Martina Fischmeister'
		/>
		<span className='about'>
			<h1>Marek Kulhavý aka Mára Čmára</h1>
			<p>
				Jsem profesionální ilustrátor působící v Praze. Věnuji se především
				užité ilustraci jako je editorial, obálky magazínů, tvorba plakátů či
				komiksů. Má tvorba je specifická svou výraznou barevností a kombinováním
				analogových a digitálních médií. Ilustrace je komunikačním prostředkem,
				a proto k ní vždy přistupuji s moderním postojem. S mými ilustracemi
				jste se mohli setkat například v magazínu RedWay nebo magazínech
				Univerzity Karlovy. Mou tvorbu můžete znát i ze soutěží „Raw Art
				Wrestling“ a „Art Wall“ nebo komiksového festivalu KOMA.
			</p>
            <p>
        Mohu pro Vás ilustrovat články, obálky magazínů a knih, obaly hudebních desek, komiksy, weby či návrhy pro mural art. Fantazii se meze nekladou.

		</p>
		</span>
	</About>
);
