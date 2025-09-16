import jwt from "jsonwebtoken"
const isAuth=async(req,res)=>{
    const token=req.cookies.token
    if(!token){
        res.send(404).json({
            message:"TOken not foun"
        })
    }
    try {
     const istrue=   jwt.verify(token,process.env.JWT_SECRET)
     console.log(istrue)
     return res.status(200).json({message:"user found"})
    } catch (error) {
        return res.status(401).json({message:"Token not found"})
    }
    
}
export default isAuth