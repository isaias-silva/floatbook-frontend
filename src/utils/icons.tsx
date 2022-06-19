import srcHome from '../assets/icons/home.png'
import srcWatch from '../assets/icons/watch.png'
import srcMarketplace from '../assets/icons/marketplace.png'
import srcGroup from '../assets/icons/group.png'

import srcMenu from '../assets/icons/menu.png'
import srcMessage from '../assets/icons/message.png'
import srcNotific from '../assets/icons/notificacao.png'
import srcConfig from '../assets/icons/configuracoes.png'
const iconsCenter = [srcHome, srcWatch, srcMarketplace, srcGroup]
const iconsRight=[srcMenu,srcMessage,srcNotific,srcConfig]
//retorna HTML das imagens 
export const iconsCenterHTML = iconsCenter.map((x) => { return <img src={x} alt=""/> })
export const iconsRightHTML= iconsRight.map((x)=>{return <img src={x} alt=""/>})
