export interface Ipost {
    id:number
    type: string
    user: { name: string, link: string, image?: string, id: number },
    metadata: {
        posttype: string
        text: string,
        time: Date,
        ismedia:boolean,
        mediatype?:'image'|'video'|'gif',
        media?: string,
        isGroup: boolean
        groupdata?: { image?: string, name: string, link: string },
        likes?:[{type:'amei'|'curtido'|'triste'|'riso'|'raiva',username:string,link:string}]
    }

}