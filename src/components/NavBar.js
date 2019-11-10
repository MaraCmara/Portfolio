import React from 'react';
import styled from 'styled-components';

import { Navigation } from './Navigation';
import { SocialMediaNav } from './SocialMediaNav';
import { LanguageOptions } from './LanguageOptions';
import {BorderLine} from './BorderLine';
import Logo from './Logo';

const NavBar = styled.nav`
	margin: auto ;
	max-width:1200px;
	background-color: #ffff;
	padding: 10px 10px 5px 10px;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 100%;
	.Logo {
		grid-column: 1/4;
	}
	.content {
		grid-column: 4/13;
		text-align:right;
	}
`;

const NavBarWrapper = styled.span `
	@media only screen and (max-height: 450px) and (orientation: landscape) {
		display: none;
	}
	@media only screen and (max-width: 800px) and (orientation: portrait) {
		display: none;
	}
	position: fixed;
	top: 0px;
	right: 0px;
	z-index: +2;
	width: 100%;
`

export default () => (
	<NavBarWrapper>
	<NavBar>
		<Logo />
		<span className='content'>
			<Navigation />
			<BorderLine/>
			<SocialMediaNav />
			<BorderLine/>
			<LanguageOptions />
		</span>
	</NavBar>
	</NavBarWrapper>
);
