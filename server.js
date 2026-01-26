const app=require("./app")
const dotenv=require("dotenv")
dotenv.config()

require("../Backend/models/model.db")
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`)
})