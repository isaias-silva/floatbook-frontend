/* eslint-disable array-callback-return */
import { Sposts } from "../style";
import { Post } from "./Post";
import friends from '../data/friends.json'
import posts from '../data/posts.json'
import groups from '../data/groups.json'
export function Posts(props: any) {
    function generatePost() {
    
        let format = posts.map((x) => {
            for (let j in friends) {
                if (friends[j].id === x.user) {
                    const obj: any = {
                        id: x.id,
                        type: x.type,
                        metadata: x.metadata,
                        user: friends[j],

                    }
                    obj.metadata.time = new Date(obj.metadata.time);
                    if(x.metadata.isGroup){
                        for(let i in groups){
                        obj.metadata.groupdata=groups[i]
                        }
                    }
                    return <Post id={obj.id} type={obj.type} metadata={obj.metadata} user={obj.user}></Post>
                }
            }

        })
        return format
    }
    let post=[]
   post.push(generatePost())
        
    
  
    return <>

        <Sposts>
            {post}
            <Post id={1} user={{
                id: 1,
                name: 'Rick',
                link: '',
                image: 'https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg'
            }}   ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

                metadata={{
                    posttype: 'global', text: 'não sei como as pessoas ainda vão a escola...é...buur.. rickdiculo',
                    time: new Date(2022, 4, 29, 13, 0, 10, 10), isGroup: false,
                 
                    likes: 0,
                    ismedia:false
                }}
                type={'normal'} ></Post>

        </Sposts>
    </>
}