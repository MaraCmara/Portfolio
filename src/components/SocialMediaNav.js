import React from 'react';
import styled from 'styled-components';

const A = styled.a`
	font-size:25px;
	text-align: center;
	@media only screen and (min-height: 450px) and (orientation: landscape) {
		display: inline;
		margin: 10px 5px;
	}
	@media only screen and (min-width: 800px) and (orientation: portrait) {
		display: inline;
		margin: 10px 5px;
	}
	@media only screen and (max-height: 450px) and (orientation: landscape) {
		display: block;
	}
	@media only screen and (max-width: 800px) and (orientation: portrait) {
		display: block;
	}
`;

export const SocialMediaNav = () => {
	return (
		<span >
			<A href='https://www.facebook.com/martinafischmeister/' target='_blank'>
				Facebook
			</A>

			<A href='https://www.instagram.com/fischmeisterr/' target='_blank'>
				Instagram
			</A>
			<A href='https://www.instagram.com/fischmeisterr/' target='_blank'>
				Behance
			</A>
		</span>
	);
};
