import { Smain } from "../style"
import { Column } from "./Column"
import { Posts } from "./Posts"

export function Main(props: any) {
    const {type, userdata} = props
    switch (type) {
        case 0:
            return <Smain>
                <Column type="cright" userdata={userdata}/>
                <Posts />

                <Column type="cleft" />

            </Smain>


        case 1:
            return <>oh my god</>
        case 2:
            return <>yes baby</>
        case 3:
            return <>i am johnny</>

        default:
            return null
    }

}