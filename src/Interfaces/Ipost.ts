export interface Ipost {
    type: string
    user: {name:string, link:string, image?:string},     
    metadata: {
        posttype:string
        text: string,
        time:Date,
        media?: string,
        isGroup: boolean
        groupdata?: { image?: string, name: string, link: string },
        likes?:number | 0
    }

}