import { createGlobalStyle } from 'styled-components'
import SFRegular from '../assets/fonts/sf-pro-display-regular.ttf'
import { variables } from '../theme'

export default createGlobalStyle `
    @font-face {
        font-family: 'Sf';
        src: local('Sf'), local('FontName'),
        url(${SFRegular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    body {
        font-family: 'Sf';
        /* background-color: #ff9227; */
        /* background-color: ${variables.themeColors.baseColor}; */
        background: linear-gradient(to left, #000428, #004e92);
        color: #fff;
        transition: all 0.8s ease;
        /* overflow-x: hidden; */
    }
`