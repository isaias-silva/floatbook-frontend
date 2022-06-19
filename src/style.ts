import styled from "styled-components";
import config from './config/padroes.json'

export const Sheader = styled.header`
background-color:${config.baar} ;
width: 100%;
position: absolute;
top: 0;
left: 0;
height: 56px;
border-bottom:2px solid ${config.border};
z-index: 10000000;
color:${config.font};
display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
    
    div{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
            p{position:absolute;
            top:40px;
            background-color:${config.font}9;
            color:${config.bkg};
            padding: 7px;
            border-radius: 10px;
            display: none;
        }
           
        :nth-child(1){
            justify-content:left;
            
            input{
                height: 40px;
               width: 60%;
               background-color: ${config.border};
               border-style: none;
               border-radius: 20px;
                color:${config.font};
                margin-left: 10px;
                transition: 0.2s ease-in-out;
                font-size: 14px;
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
            p{
                transition: 0.1s linear;
            } 
            span{
                position: absolute;
                display: block;
                width: 100%;
                top:3px;
                height: 100%;
                transition: 0.2s linear;
               border-bottom: 1px solid ${config.border};
             
               :hover ~ p{
                display:block;
                
            }
            }
            input[type="radio"]{
                position: absolute;
                opacity: 0;
            }
            input[type="radio"]:checked ~ span{
                border-bottom-color: ${config.color};
                border-bottom-width: 4px;
                top:1px;
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
            margin: 5px;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            :hover p{
                    display:block
                }
            p{top:35px}
            img{
                width: 20px;
                height: 20px;
                filter: invert(100%);
                z-index: 10000;
            }
            input,span{
                position: absolute;
               
            }
            input{
                filter: opacity(0);
            }
            span{
               
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 100px;
                transition: 0.2s linear;
              
            }
            
            input:checked ~ span{
                background-color: ${config.color};
            }
        }
        } 
    }
    
    
`
export const Smain = styled.div`
width: 100%;
min-height: 100vh;
position: absolute;
left: 0;
background-color: ${config.bkg};
display: flex;
color:${config.font};
    div{
        :nth-child(1){
            position: fixed;
            top:50px;
            overflow-y:scroll;
            width: 20%;
            min-height: 95%;
           ul{
                
                li{margin-top:20px;
                    display: flex;
                    align-items: center;
                    img{width: 30px;
                         height:30px; 
                     margin-right: 5px;
                }
                :nth-child(1){
                    img{width: 30px;
                         height:30px; 
                      
                         border:1px solid ${config.font};
                         border-radius:30px;
                         margin-right: 5px;
                }
                    
                }
           }
           
        }
        }
    }

`