import { Ipost } from "../Interfaces/Ipost";
import { Spost } from "../style";

export function Post(props: Ipost) {
    const { metadata, type, user } = props;

    function testtxt(str: string) {
        let element = str.length > 120 ? <p>{str}</p> : <h2>{str}</h2>
        return element
    }
    function extractDay(data:Date){
       try{
        return parseInt(data.toJSON().charAt(8) + data.toJSON().charAt(9));
       }
       catch(e){
        console.log(e)
        return 0;
       }
    }
    function info(time: Date, posstype: string) {
        ///new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
        const data = new Date();
        let ano = data.getFullYear() === time.getFullYear() ? undefined : `${data.getFullYear() - time.getFullYear()} a`
        let mes = data.getMonth() === time.getMonth()? undefined : `${data.getMonth() - time.getMonth()} m`
        let dia = data.getUTCDay()=== time.getUTCDay()? undefined : `${extractDay(data)-extractDay(time)} d`
        let horas =data.getHours()=== time.getHours()? undefined : `${data.getHours()-time.getHours()} h`
        let minutos =data.getMinutes()=== time.getMinutes()? undefined : `${data.getMinutes()-time.getMinutes()} min`
     
     return <>  <span>{ano || mes || dia || horas || minutos ||'agora mesmo'}</span>
     
        </>
      }
    if (type === 'normal')
        return <Spost>
            <nav>
                <img src={user.image} alt="" />
                <div>
                    <b>{user.name}</b>
                    <span>{info(metadata.time, metadata.posttype)}</span>
                </div>
            </nav>
            <div>

                {testtxt(metadata.text)}

            </div>
        </Spost>
    else
        return <Spost></Spost>
}