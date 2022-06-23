import { PropColumn } from "../Interfaces/IpropCol";
import { Scolumn, Scolumnsecond } from "../style";
import { iconsColumnHTML } from "../utils/icons";

export function Column(props: PropColumn) {
    if (props.type === 'cright') {
        return <Scolumn>
            <ul>
                <li>
                    <img src={""} alt="" /> <span>{"user"}</span>
                </li>
                {iconsColumnHTML.map((x, i) => {
                    return <li>
                        {x.html} <span>{x.title}</span>
                    </li>
                })}
            </ul>
            <ul>
                <h2>os seus atalhos</h2>
             
            </ul>
        </Scolumn>
    }
    if (props.type === 'cleft') {
        return <Scolumnsecond>
            <div>
                <ul>
                    <h2>anuncios</h2>

                  
                    <li>
                    <a href="https://encurta.net/ref/zackBlack" ><img src="https://blog.encurta.net/wp-content/uploads/2017/07/336x280.png" alt="EncurtaNET" />
                        <span>ganhe dinheiro com links</span>
                    </a> 
                    </li>

                </ul>
                <ul>
                    <h2>contatos</h2>
                      
                </ul>
            </div>
        </Scolumnsecond>
    }
    return <></>
}