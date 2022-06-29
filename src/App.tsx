/* eslint-disable jsx-a11y/anchor-is-valid */
//json para teste:
import User from './data/user.json'
import React, { useState } from "react";
//imagens
import arrow from './assets/icons/arrow.png'
import logo from './assets/icons/logo.png'
import pesquisar from './assets/icons/procurar.png'
import { Main } from "./components/Main";
//estilo
import { Sheader } from "./style"
//gerador de icones para menu
import { iconsCenterHTML, iconsRightHTML } from "./utils/icons"
//componentes
export default function App() {


    //estados:
    //componentes invisiveis
    const [classO, setClassO] = useState('invisible')
    const [classP, setClassP] = useState('visible')
    //controle dos icones do menu direito
    const [menuR, setMenuR] = useState([false, false, false, false])
    //controle 
    const [status, setStatus] = useState(0)
    //json do usuario
   
   
    function alter() {
        if (classO === 'invisible') {
            setClassP('invisible');
            setClassO('visible');
        } else {
            setClassP('visible');
            setClassO('invisible');

        }

    }

    function mark(id: number, checked: boolean) {
        console.log(checked)
        if (id === 0) {
            if (checked === true) {
                setMenuR([true, false, false, false])
            } else {
                setMenuR([false, false, false, false])

            }
        }
        if (id === 1) {
            if (checked === true) {
                setMenuR([false, true, false, false])
            } else {
                setMenuR([false, false, false, false])

            }
        }
        if (id === 2) {
            if (checked === true) {
                setMenuR([false, false, true, false])
            } else {
                setMenuR([false, false, false, false])

            }
        }
        if (id === 3) {
            if (checked === true) {
                setMenuR([false, false, false, true])
            } else {
                setMenuR([false, false, false, false])

            }
        }
    }
    return <>
        <Sheader>


            <div><span className={classP}><img src={logo} alt="" /></span>
                <label className={classP} htmlFor="sch" onClick={() => alter()}><img src={pesquisar} alt="" /></label>
                <button className={classO} onClick={() => { alter() }}><img src={arrow} alt="" /></button>
                <input type="search" className={classO} id='sch' placeholder="pesquisar no floatbook" />
            </div>

            <div>
                {iconsCenterHTML.map((x, i) => {
                    return <label htmlFor={`item_${i}`}>

                        <input type="radio" name="control" id={`item_${i}`} onChange={() => { setStatus(i) }} />
                        {x.html}

                        <span> </span>
                        <p>{x.titulo}</p>
                    </label>
                })}
            </div>
            <div>
                {
                    iconsRightHTML.map((x, i) => {
                        return <label onClick={(ev) => { }}>
                            {x.html}
                            <input type="checkbox" name="baar_tree" onChange={(ev) => { mark(i, ev.target.checked) }} checked={menuR[i]} />
                            <span></span>
                            <p>{x.title}</p>
                        </label>
                    })
                }

            </div>
        </Sheader>
        <Main type={status} userdata={User}/>
    </>
}