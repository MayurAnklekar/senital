const login = ()=>{
    return (req, res)=>{
        const {email, password} = req.body;
        const user = db.find(user=>user.email === email);
        if(!user){
            return res.status(401).json({error: 'User not found'});
        }
}
}

const signup = ()=>{

}
module.exports = {login, signup}