const express = require("express")
const cors = require("cors")
const { default: axios } = require("axios")

const app = express()
app.use(express.json())
app.use(cors({origin:true}))

app.post("/auth",async(req,res)=>{
    const {username} = req.body;
    try {
        const resp = await axios.put(
            "http://api.chatengine.io/users",
            {username:username,secret:username,firstName:username},
            {headers:{"private-key":"fc481e8f-c46f-46ae-99d8-074687f396f0"}}
        )
        return res.status(resp.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
    return res.json({username:username,secret:"sha256..."})
});

app.listen(1234)