import http  from "./httpService"
const baseUrl = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams"
export function getAllTeams(){
    return http.get(baseUrl)
}
export function getTeamById(id){
    return http.get(baseUrl+'/'+id)
}