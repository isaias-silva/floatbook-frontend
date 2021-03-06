/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import { Ipost } from "../Interfaces/Ipost";
import { Semotebar, Spost } from "../style";
import { iconsEmote, iconsPostHTML } from "../utils/icons";

export function Post(props: Ipost) {
    const [like, setLike] = useState(false)
    const [reaction, setReaction] = useState({ tipo: 'curtir', html: iconsPostHTML[0].html })
    const [windowComponet, setWidowComponent] = useState(<></>);
    const [emoteClass, setEmoteClass] = useState('')

    const { metadata, type, user } = props;

    function checking(value: number, checked: boolean) {
        switch (value) {
            case 0:

                if (checked === true) {

                    return setLike(true);
                } else {
                    setEmoteClass('')
                    setReaction({ tipo: 'curtido', html: iconsPostHTML[0].html })
                    return setLike(false);
                }
            case 1:
                if (checked === true) {
                    return setWidowComponent(<h4>cometários</h4>)

                } else {
                    return setWidowComponent(<></>)
                }
            default:
                return
        }
    }
    function emote(value: string, img: any) {

        setReaction({ tipo: value, html: <img src={img} alt="" /> })
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
    function treatLikes() {
        const { likes } = metadata

        const amei = likes?.filter(item => item.type === 'amei')
        const curtido = likes?.filter(item => item.type === 'curtido')
        const raiva = likes?.filter(item => item.type === 'raiva')
        const riso = likes?.filter(item => item.type === 'riso')
        const triste = likes?.filter(item => item.type === 'triste')

        let likenumber = [amei, curtido, raiva, riso, triste]

        likenumber = likenumber.filter((x) => { if (x != null) { return x.length > 0 } }).sort().reverse()

        let complete = likenumber.map((x) => {
            return x?.reduce((y, z) => {
                if (y.type !== z.type) {
                    return y
                } else { return z }
            })
        })

        const htmlLikes = complete?.map((x, i, arr) => {

            switch (x?.type) {
                case 'amei':
                    return <img src={iconsEmote[1].src} alt="" />
                case 'triste':
                    return <img src={iconsEmote[2].src} alt="" />
                case 'raiva':
                    return <img src={iconsEmote[3].src} alt="" />
                case 'riso':
                    return <img src={iconsEmote[4].src} alt="" />
                default:
                    return <img src={iconsEmote[0].src} alt="" />

            }
        })
        console.log(htmlLikes)
        return <>
            <span>
                {htmlLikes}

            </span>
            <span>
                {likes?.length}
            </span>
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
        const icons = iconsEmote.map((item) =>
            <label onMouseOver={() => { setEmoteClass('visible') }} htmlFor={`iconpost_${nameelement}`}>
                <img src={item.src} alt="" onClick={() => emote(item.value, item.src)} />
            </label>)
        if (i === 0) {

            if (like) {
                title = reaction.tipo
                return <div>
                    <label htmlFor={`iconpost_${nameelement}`} >
                        {input}
                        {reaction.html}
                        <span>{title}</span>
                    </label>
                </div>
            }
            return <div>
                <label onMouseEnter={() => {

                    setTimeout(() => {
                        setEmoteClass('visible')

                    }, 1000)
                }} htmlFor={`iconpost_${nameelement}`}
                    onMouseLeave={() => {
                        setEmoteClass('')

                    }}
                >
                    {input}
                    {x.html}
                    <span>{title}</span>
                </label>
                <Semotebar className={emoteClass}>
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
            <div className="likesbaar">
                {treatLikes()}


            </div>
            <footer>
                {icons}
            </footer>
            {windowComponet}
        </Spost>
    else
        return <Spost></Spost>
}