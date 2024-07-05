import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './config/routes.js'

const app = express()

const corsOption={
    //Conect rutes
    origin: '*' //'localhost:3000'
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors(corsOption))

app.use('/api',router)

app.get('/',(req,res)=>{
    console.log('Hola')
    res.send('Bienvenidos A la API mas percha del platanal')

})

const PORT = process.env.PORT || 8000
console.log(`PORT: ${PORT}`)

const server = app.listen (PORT,()=>{
    console.log(`Server running on port ${server.address().port}`)
})

export default app