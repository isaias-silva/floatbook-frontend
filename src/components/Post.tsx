import { useState } from "react";
import { Ipost } from "../Interfaces/Ipost";
import { Spost } from "../style";
import { iconsPostHTML } from "../utils/icons";

export function Post(props: Ipost) {
    const [like, setLike] = useState(false)
    const [windowComponet, setWidowComponent] = useState(<></>)
    const { metadata, type, user } = props;


    function checking(value: number, checked: boolean) {
        switch (value) {
            case 0:
                if (checked === true) {
                    return setLike(true);
                } else {
                    return setLike(false);

                }
            case 1:
                if(checked === true){
                   return setWidowComponent(<h1>comentarios</h1>)

                }else{
                    return setWidowComponent(<></>)
                }
                
                default:
                return

        }

    }


    function testtxt(metadata:Ipost["metadata"]) {
        const {ismedia,text,media}=metadata
        if(ismedia){
            return <>
            <p>{text}</p>
            <img src={media} alt="" />
            </>
        }
        let element = text.length > 120 ? <p>{text}</p> : <h2>{text}</h2>
        return element
    }
    function extractDay(data: Date) {
        return data.getDate()
        
    
    }
    function info(time: any, posstype: string) {
        ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
        const data = new Date();
        let ano = data.getFullYear() === time.getFullYear() ? undefined : `${data.getFullYear() - time.getFullYear()} a`
        let mes = data.getMonth() === time.getMonth() ? undefined : `${data.getMonth() - time.getMonth()} m`
        let dia = data.getUTCDay() === time.getUTCDay() ? undefined : `${extractDay(data)-extractDay(time)} d`
        let horas = data.getHours() === time.getHours() ? undefined : `${data.getHours() - time.getHours()} h`
        let minutos = data.getMinutes() === time.getMinutes() ? undefined : `${data.getMinutes() - time.getMinutes()} min`
        //symbol
        const symbolarray = ['🌎', '👥']
        let symbol = posstype === 'global' ? symbolarray[0] : symbolarray[1]

        return <>  <span>{ano || mes || dia || horas || minutos || 'agora mesmo'}</span>
            <span> . {symbol}</span>

        </>
    }

    const icons = iconsPostHTML.map((x, i) => {
        let nameelement = (Math.random() * 9999).toFixed(0)

        let title = x.title;
        let input = <input type="checkbox" name="icon" id={`iconpost_${nameelement}`} value={i} onChange={(ev) => { checking(i, ev.target.checked) }} />

        if (i === 0) {
            if (like) {
                title = 'curtido'
            }
        }
        return <label htmlFor={`iconpost_${nameelement}`}>
            {input}
            {x.html}
            <span>{title}</span>
        </label>

    })

    if (type === 'normal')
            return <Spost>
                <nav>
                    <img src={user.image} alt="" />
                    <div>
                        <b>{user.name}</b>
                    <span>{info(metadata.time, metadata.posttype)}</span>
                </div>  
            </nav>
            <div>

                {testtxt(metadata)}

            </div>
            <div>
                {icons}
            </div>
            {windowComponet}
        </Spost>
    else
        return <Spost></Spost>
}