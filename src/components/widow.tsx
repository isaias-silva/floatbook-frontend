export function widow(props: any) {
    const [type] = props
    switch (type) {
        case 'coments':
            return <>comentarios</>
        default:
            return <></>

    }
}