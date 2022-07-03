import React from "react";
import { useState } from "react";
import { Ipost } from "../Interfaces/Ipost";
import { Semotebar, Spost } from "../style";
import { iconsEmote, iconsPostHTML } from "../utils/icons";

export function Post(props: Ipost) {
    const [like, setLike] = useState(false)
    const [reaction, setReaction] = useState("curtir")
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
                if (checked === true) {
                    return setWidowComponent(<h2>cometario</h2>)

                } else {
                    return setWidowComponent(<></>)
                }

            default:
                return

        }

    }

    function emote(value: string) {
        setReaction(value)
        checking(0,false)

    }
    function treatDiv() {
        const { ismedia, text, media, mediatype } = metadata
        if (ismedia) {
            if (mediatype === 'image')
                return <>
                    <p>{text}</p>
                    <img src={media} alt="" />
                </>
        }
        let element = text.length > 120 ? <p>{text}</p> : <h2>{text}</h2>
        return element
    }
    function treatNav() {
        if (metadata.isGroup) {
            const { groupdata } = metadata
            return <>
                <div className="imagegroup">
                    <img src={groupdata?.image} alt="" className="groupCapa" />
                    <img src={user.image} alt="" className="iugroup" />

                </div>
                <div>
                    <b>{groupdata?.name}</b>
                    <span>{user.name}</span>
                    <span>{info(metadata.time, metadata.posttype)}</span>
                </div>
            </>
        }
        return <>
            <img src={user.image} alt="" />
            <div>
                <b>{user.name}</b>
                <span>{info(metadata.time, metadata.posttype)}</span>
            </div>
        </>
    }

    function info(time: any, posstype: string) {
        ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
        const data = new Date();
        let ano = data.getFullYear() === time.getFullYear() ? undefined : `${data.getFullYear() - time.getFullYear()} a`
        let mes = data.getMonth() === time.getMonth() ? undefined : `${data.getMonth() - time.getMonth()} m`
        let dia = data.getUTCDay() === time.getUTCDay() ? undefined : `${data.getDate() - time.getDate()} d`
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


        const icons = iconsEmote.map((item) => <label htmlFor={`iconpost_${nameelement}`}><img src={item.src} alt="" onClick={() => emote(item.value)} /></label>)

        if (i === 0) {
            if (like) {
                title = reaction
                return <div>

                    <label htmlFor={`iconpost_${nameelement}`} >
                        {input}
                        {x.html}



                        <span>{title}</span>



                    </label>
                </div>
            }

            return <div>

                <label htmlFor={`iconpost_${nameelement}`} >
                    {input}
                    {x.html}



                    <span>{title}</span>



                </label>
                <Semotebar>
                    {icons}
                </Semotebar>
            </div>
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
                {treatNav()}
            </nav>
            <div>

                {treatDiv()}

            </div>

            <footer>
                {icons}
            </footer>
            {windowComponet}
        </Spost>
    else
        return <Spost></Spost>
}