import srcHome from '../assets/icons/home.png'
import srcWatch from '../assets/icons/watch.png'
import srcMarketplace from '../assets/icons/marketplace.png'
import srcGroup from '../assets/icons/group.png'

import menu from '../assets/icons/menu.png'
import message from '../assets/icons/message.png'
import notific from '../assets/icons/notificacao.png'

const iconsCenter = [srcHome, srcWatch, srcMarketplace, srcGroup]
const iconsRight=[menu,message,notific]
//retorna HTML das imagens 
export const iconsCenterHTML = iconsCenter.map((x) => { return <img src={x} alt=""/> })
export const iconsRightHTML= iconsRight.map((x)=>{return <img src={x} alt=""/>})
