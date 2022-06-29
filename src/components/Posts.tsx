import { Sposts } from "../style";
import { Post } from "./Post";
export function Posts(props: any) {
    return <Sposts>
        <Post user={{
            name: 'Rick sanchez',
            link: '',
            image: 'https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg'
        }}   ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
    
            metadata={{
                posttype: 'global', text: 'não sei como as pessoas ainda vão a escola...é...buur.. rickdiculo',
                time: new Date(2022,5,26,13,0,10,10), isGroup: false,
                likes:0,
            }}
            type={'normal'} ></Post>
            <Post user={{
            name: 'Rick sanchez',
            link: '',
            image: 'https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg'
        }}   ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
    
            metadata={{
                posttype: 'global', text: 'não sei como as pessoas ainda vão a escola...é...buur.. rickdiculo',
                time: new Date(2022,5,26,13,0,10,10), isGroup: false,
                likes:0,
            }}
            type={'normal'} ></Post>

    </Sposts>
}