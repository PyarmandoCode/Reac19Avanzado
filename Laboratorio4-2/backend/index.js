const express =require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(express.json())

const SECRET='REACTAVANZADO@22'

//lOGIN
app.post('/login',(req,res)=> {
    const {email ,password} = req.body
    if (email ==='admin@demo.com' && password ==='123456') {
        const token = jwt.sign({email},SECRET,{expiresIn:'1h'})
        res.json({token})
    }else{
        res.status(401).json({error :'Credenciales inválidas'})
    }
})

//Ruta Protegida
app.get('/perfil',(req,res) => {
    const auth=req.headers.authorization
    const token = auth?.split(' ')[1]
    try{
        const user = jwt.verify(token,SECRET)
        res.json({email:user.email})
    }catch {
        res.status(401).json({error:'Token Invalido'})
    }
})

app.listen(4000,()=> console.log('Servidor en  http://localhost:4000'))