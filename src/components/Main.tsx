import { Smain } from "../style"
import { Column } from "./Column"

export function Main(props: any) {
    switch (props.type) {
        case 0:
            return <Smain>
                     <Column />
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