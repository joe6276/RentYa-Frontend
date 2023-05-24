import { Observable } from "rxjs"


export interface Movie{
    id:string
    category:string
    movieName:string
    description:string
    image:string
    price:number
}

export interface CanComponentDeactivate{
    canDeactive:()=>boolean | Observable<boolean> | Promise<boolean>
}