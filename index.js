const express = require ('express');
const bcrypt = require('bcrypt');
const app = express();
const port =3000;

let dbUsers = [
    {
      username :"yat",
      password:"pass",
      name: "yat",
      email:"email"
  },
  //setiap user kene ade lain username
  {
      username :"aya",
      password:"passw",
      name: "aya",
      email:"email"
  }
    ]

app.use(express.json());


app.post('/login',async(req,res) => {
    let data= req.body
    const match = await bcrypt.compare(data.username, data.password);

    if(match) {
        if (match.password == password){
            return match
        } else {
            res.send( "Password not matched")
        }
    } else {
        res.send( "Username not found")
    }

})

app.listen(port,()=>{
    console.log('Server listening at http://localhost:${port}')
});

