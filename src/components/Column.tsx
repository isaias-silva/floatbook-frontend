import { PropColumn } from "../Interfaces/IpropCol";
import { Scolumn, Scolumnsecond } from "../style";
import { iconsColumnHTML } from "../utils/icons";
import friends from '../data/friends.json'
export function Column(props: PropColumn) {

    const { type, userdata } = props
    let friendsauto = friends.map((x) => {
        return <li>
            <img src={x.image} alt="" />
            <span>{x.name}</span>
        </li>
    })

    if (type === 'cright') {
        return <Scolumn>
            <ul>
                <li>
                    <img src={userdata?.perfil} alt="" /> <span>{userdata?.name}</span>
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
                    <h2>seus amigos</h2>
                    {friendsauto}

                </ul>
            </div>
        </Scolumnsecond>
    }
    return <></>
}