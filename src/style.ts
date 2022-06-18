import styled from "styled-components";
import config from './config/padroes.json'

export const Sheader = styled.header`
background-color:${config.baar} ;
width: 100%;
position: absolute;
top: 0;
left: 0;
height: 60px;
border-bottom:2px solid ${config.border};
z-index: 10000000;
color:#fff;
display: flex;
justify-content: space-between;
align-items: center;
    
    div{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :nth-child(1){
            justify-content:left;
            
            input{
                height: 40px;
               width: 60%;
               background-color: ${config.border};
               border-style: none;
               border-radius: 20px;
                color:#fff;
                margin-left: 10px;
                transition: 0.2s ease-in-out;
            }
            .invisible{
               filter:opacity(0);
                width: 0px;
                height: 0px;
            }
            label,button{
                width: 40px;
                height: 40px;
                background-color: ${config.border};
                display: flex;
                border-style: none;
               border-radius: 100%;
               align-items: center;
               justify-content: center;
                img{
                    filter: invert(100%);
                    width: 18px;
                    height: 18px;
                
                }
            }
            button{
                background: none;
                transition: 0.2s linear;
                :hover{
                    background-color: ${config.border};
                }
            }
            
            img{
               width: 60px;
            }
          
        }
        :nth-child(2){
          label{
                position: relative;
                width: 120px;
                margin-left: 10px;
                height: 50px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.2s linear;
                :hover{
                    background: ${config.border};
                }
            span{
                position: absolute;
                display: block;
                width: 70%;
                top:5px;
                height: 100%;
                transition: 0.2s linear;
               border-bottom: 1px solid ${config.border};

            }
            input[type="radio"]{
                position: absolute;
                opacity: 0;
            }
            input[type="radio"]:checked ~ span{
                border-bottom-color: ${config.color};
                border-bottom-width: 4px;
                top:3px;
            }
        
            input[type="radio"]:checked ~ img{
                opacity:invert(0);
                background-color:yellowgreen;
                box-shadow: 0px 0px 10px green;
                border-radius: 5px;
                }           
            img{
                transition: 0.2s ease-in ;
                filter: invert(100%);
                width: 25px;
                height: 25px;
                }
            }
        }   
        :nth-child(3){
            justify-content: right;
            align-items: center;
        label{
            background-color: ${config.border};
            margin: 10px;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            img{
                width: 20px;
                height: 20px;
                filter: invert(100%);
                z-index: 10000;
            }
            input[type="radio"],span{
                position: absolute;
               
            }
            input[type="radio"]{
                filter: opacity(0);
            }
            span{
               
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 100px;
                transition: 0.2s linear;
            }
            input[type="radio"]:checked ~ span{
                background-color: ${config.color};
            }
        }
        } 
    }
    
    
`