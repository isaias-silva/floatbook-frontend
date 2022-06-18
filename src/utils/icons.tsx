import srcHome from '../assets/icons/home.png'
import srcWatch from '../assets/icons/watch.png'
import srcMarketplace from '../assets/icons/marketplace.png'
import srcGroup from '../assets/icons/group.png'


const iconsCenter = [srcHome, srcWatch, srcMarketplace, srcGroup]

export const iconsCenterHTML = iconsCenter.map((x) => { return <img src={x} alt=""/> })