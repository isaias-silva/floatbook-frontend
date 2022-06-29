export interface Ipost {
    id:number
    type: string
    user: { name: string, link: string, image?: string, id: number },
    metadata: {
        posttype: string
        text: string,
        time: Date,
        media?: string,
        isGroup: boolean
        groupdata?: { image?: string, name: string, link: string },
        likes?: number | 0
    }

}