/* eslint-disable array-callback-return */
import { Sposts } from "../style";
import { Post } from "./Post";
import user from '../data/user.json'
import users from '../data/users.json'
import posts from '../data/posts.json'
export function Posts(props: any) {
    function generatePost(id: number) {
        let postForMe = posts.filter((x) => { return x.user === id })
   
        let format = postForMe.map((x) => {
            for (let j in users) {
                if (users[j].id === x.user) {
                    const obj: any = {
                        id: x.id,
                        type: x.type,
                        metadata: x.metadata,
                        user: users[j],

                    }
                    obj.metadata.time = new Date(obj.metadata.time);
                    return <Post id={obj.id} type={obj.type} metadata={obj.metadata} user={obj.user}></Post>
                }
            }

        })
        return format
    }
    let post=[]
    for(let h in user.friendsid){
        post.push(generatePost(user.friendsid[h]))
    }
    return <>

        <Sposts>
            {post}
            <Post id={1} user={{
                id: 1,
                name: 'Rick sanchez',
                link: '',
                image: 'https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg'
            }}   ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

                metadata={{
                    posttype: 'global', text: 'não sei como as pessoas ainda vão a escola...é...buur.. rickdiculo',
                    time: new Date(2022, 5, 26, 13, 0, 10, 10), isGroup: false,
                    likes: 0,
                }}
                type={'normal'} ></Post>

        </Sposts>
    </>
}