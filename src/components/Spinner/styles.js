import styled from 'styled-components'

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Pokeball = styled.div`
    position: relative;
    height: 100px;
    width: 100px;
    background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
    border-radius: 50%;
    border: 8px solid black;
    animation: spin 2s linear infinite;

    &:before {
        content: '';
        position: absolute;
        height: 8px;
        width: 100%;
        background: black;
        top: 50px;
        transform: translateY(-50%);
    }

	&:after {
		content: '';
		position: absolute;
		height: 38px;
		width: 38px;
		border-radius: 50%;
		background: white;
		top: 50px;
		left: 50px;
		transform: translate(-50%, -50%);
		box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white,
		inset 0 0 0 12px black;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`
