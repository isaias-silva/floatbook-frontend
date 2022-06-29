//interface
import { Iicons } from '../Interfaces/Iicon'

//icons center
import srcHome from '../assets/icons/home.png'
import srcWatch from '../assets/icons/watch.png'
import srcMarketplace from '../assets/icons/marketplace.png'
import srcGroup from '../assets/icons/group.png'
//icons right
import srcMenu from '../assets/icons/menu.png'
import srcMessage from '../assets/icons/message.png'
import srcNotific from '../assets/icons/notificacao.png'
import srcConfig from '../assets/icons/configuracoes.png'

//icons column
import srcAmigos from '../assets/icons/amigos.png'
import srcGroupColumn from '../assets/icons/group_column.png'
import srcMarketPlaceColumn from '../assets/icons/marketplace_column.png'
//icons post
import srclike from '../assets/icons/like.png'
import srcComent from '../assets/icons/coment.png'
import srcCompartilhar from '../assets/icons/compartilhar.png'



const iconsCenter: Iicons[] = [
    { src: srcHome, title: 'home' },
    { src: srcWatch, title: 'watch' },
    { src: srcMarketplace, title: 'marketplace' },
    { src: srcGroup, title: 'grupos' }]

const iconsRight: Iicons[] = [{ src: srcMenu, title: 'menu' },
{ src: srcMessage, title: 'mensagens' },
{ src: srcNotific, title: 'notificações' },
{ src: srcConfig, title: 'config' }]

const iconsColumn: Iicons[] = [{ src: srcAmigos, title: 'amigos' },
{ src: srcGroupColumn, title: 'grupos' },
{ src: srcMarketPlaceColumn, title: 'marketplace' }]

const iconsPOst: Iicons[] = [{ src: srclike, title: 'curtir' },
{ src: srcComent, title: 'comentar' },
{ src: srcCompartilhar, title: 'compartilhar' }
]
//retorna HTML das imagens 
export const iconsCenterHTML = iconsCenter.map((x) => { return { html: <img src={x.src} alt="" />, titulo: x.title } })
export const iconsRightHTML = iconsRight.map((x) => { return { html: <img src={x.src} alt="" />, title: x.title } })
export const iconsColumnHTML = iconsColumn.map((x) => { return { html: <img src={x.src} alt="" />, title: x.title } })
export const iconsPostHTML = iconsPOst.map((x) => { return { html: <img src={x.src} alt="" />, title: x.title } })