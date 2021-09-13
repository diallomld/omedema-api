import http  from "../httpService"
const baseUrl = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users"
export function getAllUsers(){
    return http.get(baseUrl)
}
export function getUserById(id){
    return http.get(baseUrl+'/'+id)
}