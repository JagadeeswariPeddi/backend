const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const port=2000;

console.log(Register)

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://chinnipeddi:Jagadeeswari26@cluster0.z1eift6.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("Created mongodb database")
}) 
.catch((err)=>{
	console.log(err)
 
})
app.get("/",(req,res)=>{
	res.send("vibe alone")
})
app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newuser=new Register({
		username:username,
		password:password
	})
	newuser.save()
})
app.listen(port,()=>console.log("server is in port 2000"))

