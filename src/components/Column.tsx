import { iconsColumnHTML } from "../utils/icons";

export function Column(props:any){

    return <div>
            <ul>
                <li>
                   <img src={""} alt="" /> <span>{"user"}</span>
                </li>
                {iconsColumnHTML.map((x,i)=>{
                    return <li>
                        {x.html} <span>{x.title}</span>
                    </li>
                })}
            </ul>
            <ul>
                <h2>os seus atalhos</h2>
            </ul>
    </div>
}