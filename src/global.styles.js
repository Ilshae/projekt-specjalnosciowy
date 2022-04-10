import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Cairo', sans-serif;
		font-size: 16px;
		padding: 20px 40px;
		background-color: white;
		color: black;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
		&:hover {
    color: #e08800;
  }
	}

	* {
		box-sizing: border-box;
	}
`;

export const PageWrapper = styled.div`
  position: relative;
  min-height: 95vh;
  max-width: 1300px;
  margin: 0 auto;
`;
