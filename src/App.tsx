/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import arrow from './assets/icons/arrow.png'
import logo from './assets/icons/logo.png'
import pesquisar from './assets/icons/procurar.png'
import { Sheader } from "./style"
import { iconsCenterHTML } from "./utils/icons"
export default function App() {
    function alter() {
        if (classO === 'invisible') {
            setClassP('invisible');
            setClassO('visible');
        } else {
            setClassP('visible');
            setClassO('invisible');

        }

    }
    const [classO, setClassO] = useState('invisible')
    const [classP, setClassP] = useState('visible')
    return <>
        <Sheader>


            <div><span className={classP}><img src={logo} alt="" /></span>
                <label className={classP} htmlFor="sch" onClick={() => alter()}><img src={pesquisar} alt="" /></label>
                <button className={classO} onClick={() => { alter() }}><img src={arrow} alt="" /></button>
                <input type="search" className={classO} id='sch' placeholder="pesquisar no floatbook" />
            </div>

            <div>
                {iconsCenterHTML.map((x, i) => {
                    return <label htmlFor={`item_${i}`} onClick={(evt) => { }}>
                       
                      
                        <input type="radio" name="control" id={`item_${i}`} />
                        {x}
                        <span> </span>
                    </label>
                })}
            </div>
            <div>
                oi
            </div>
        </Sheader>

    </>
}