/* eslint-disable array-callback-return */
import { Sposts } from "../style";
import { Post } from "./Post";
import friends from '../data/friends.json'
import posts from '../data/posts.json'
import groups from '../data/groups.json'
export function Posts(props: any) {
    //montar os post com json
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
    
        </Sposts>
    </>
}