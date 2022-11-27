import axios from "axios";
export const Api = axios.create({
  baseURL:"http://localhost:8080"
})


export const PgHome = async ()=> Api.get('/')
export const PgCap = async ()=> Api.get('/bone')
export const PgShirt = async ()=> Api.get('/camisa')
export const PgCoat = async ()=> Api.get('/moletom')
export const PgSock = async ()=> Api.get('/meia')
export const PgMug = async ()=> Api.get('/caneca')