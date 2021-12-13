import styled, {css} from "styled-components";
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr, 1fr, 1fr;
    grid-template-rows:1fr,3fr;
    background-color: #78DA3F;
    width: 60vw;
    height: 300px;
    border-radius: 20px;
    margin: 5px;
    place-items: center;
    padding: 10px;
    

    button{
        display:block;
        background-color: transparent;
        border-radius:50%;
    }

    img{
        border-radius: 50%;
        height: 65%;
        grid-column: 1/span 3;
        cursor: pointer;
        transition: all .5s;
    }

    p{
        grid-column:1/span 3;
        text-align:center;
        position:relative;
        bottom: 60px;
        transition: all .8s;

    }

    
    ${props => props.robert && css`
        background-color:#56bA1d;
        img{
            transform: scaleX(1.4);
        }
    `}

    ${props => props.jakub && css`
        background-color: #67cA2e;
        img{
            transform: scaleX(0.85);
        }
    `}

    ${props => props.showInfoL && css`
        img{
            display: block;
            position: relative;
            transform: translateY(-10vh);
        }

        p{
            animation: wejscie 0.8s ease-in-out;
        }
    `}

    ${props => props.showInfoJ && css`
        img{
            display: block;
            position: relative;
            transform: translateY(-10vh);
        }

        p{
            animation: wejscie 0.8s ease-in-out;
        }
    `}

    ${props => props.showInfoR && css`
        img{
            display: block;
            position: relative;
            transform: translateY(-10vh);
        }

        p{
            animation: wejscie 0.8s ease-in-out;
        }
    `}

    @keyframes wejscie{
        from{
            transform: translateY(10vh);
            opacity: 0;
        }

        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
`