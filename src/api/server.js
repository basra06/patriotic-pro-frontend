import axios from "axios"
import { get_UnitedStates_states } from "../Redux-Store/actions"
const BaseUrl= "http://localhost:9000/"

let instance = axios.create({
    baseURL: "http://localhost:9000/",
    headers: {
        'Content-Type': 'application/json'
    }
})
// US country States api
export const getStates=()=>{
    return instance.get(`states`)
}
// search api 
export const getSearchData=(params,body)=>{
    console.log(params,body)
    return instance.post(`get-search-data/${params}`, body)
}
