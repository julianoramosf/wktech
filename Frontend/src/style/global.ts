import { createGlobalStyle } from 'styled-components'

export const colorLabelDefault = '#5e5873'
export const backgroundButtonAction = '#00CFE8'
export const loadingTableDefault = '#00CFE8'

export const GlobalStyle = createGlobalStyle`
    :root {
        
        /* Default  */
        --white: #fff;
        --black: #000;
        --primary: #00B8CF;
        --seconday: #82868B;
        --sucess: #28C76F;
        --danger: #EA5455;
        --warning: #FF9F43;
        --info: #00CFE8;
        --dark-500: #333333;
        --dark: #4B4B4B;
        --light: #BABFC7;
        --light-50: #6e6b7b;
        --light-90: #9d9d9d;
        --light-30: #F8F8F8;
        --border-default: #d8d6de;                    
        --dark-gradient:  linear-gradient(180deg, #3A3A3A 0%, #232323 100%);
        
        /* border-radius (default)  */
        --border-radius-default: 6px;        
        --border-radius-button: .2rem;        
        --border-radius-input: 4px;

        /* box-shadow button action */
        --button-action: 0 4px 24px 0 rgba(34, 41, 20, 0.2);

        /* times */
        --transition-hover-button: .2s;

        /* Font  */
        --font: "Montserrat";
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {      
        @media screen and (max-width: 1080px) {
           font-size: 93% !important; //=15px
           width: 100%;
       }

       @media screen (max-width: 720px) {
           font-size: 87% !important; //=14px
           width: 100%;
       }

       scroll-behavior: smooth;       
    }

    body {
        overflow-x: hidden;
        
        button {
            border: none;
            cursor: pointer;
        }        
                
        .react-modal-overlay {
            background: rgba(0, 0, 0, 0.66);
            position: fixed;
            z-index: 3 !important;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;            
            display: flex;
            align-items: center;
            justify-content: center;            
        }

        .react-modal {            
            width: 500px;
        }
    
        .react-modal-content {
            width: 100%;         
            max-height: 80vh;               
            min-height: fit-content;
            overflow-y: auto;
            background: white;
            border: none;
            padding: 3rem;            
            border-radius: 6px;     
            -webkit-animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
            animation: scale-in 0.3s cubic-bezier(0.2150, 0.460, 0.450, 0.940);   

            :focus {
                border: none;
            }
        }
    
        @keyframes scale-in {
            0% {
                -webkit-transform: scale(0);    
            }
            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
    
        .react-modal-close {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
            border: 0;
            background: transparent;
            transition: filter 0.2s;
    
            :hover {
                filter: brightness(0.9);
            }
        }
    
        @media (max-width: 700px) {
            .react-modal-content  {
                width: 100vw;            
                max-height: 100vh;
                min-height: 100vh;
                overflow-Y: hidden;
            }                        
        }
    }


`
