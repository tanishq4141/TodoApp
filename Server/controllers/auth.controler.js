import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import genToken from "../config/token.js";



 const signUp = async (req, res) => {
  const { name, userName, email, password } = req.body;
  console.log(req.body);
  try {
    // Validate User Data
    if (!name || !userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validate Email

    const existingUser = await User.findOne({email});

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Validate for userName

    const existingUserName = await User.findOne({ userName });

    if (existingUserName) {
      return res.status(400).json({ message: "Username already in use" });
    }

    // password length
    if (password.length<=6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    /// Hash Password
    const salt = await bcrypt.genSalt(10);
   const hasedPassword=  await bcrypt.hash(password, salt);

    // Create User

    const newUser= User.create({ name, userName, email, password: hasedPassword });
    const token=await genToken(newUser._id)
    res.cookie('token',token,{
      httpOnly:true,
      sameSite:true,
      maxAge:2592000000 //time in millisecond =30 days
    })
    
    res.status(201).json({ message: "User created successfully"});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" });
  }

};


const signIn=async(req,res)=>{
  const { email, password } = req.body
  if(!email || !password){
    req.status(400).json({message:"incomplet fienls"})
  }

  const existingUser = await User.findOne({email});
  if(!existingUser){
    res.status(400).json({message:"not a user"})
  }

  const passmatch= await bcrypt.compare(password,existingUser.password)

  if(!passmatch){
    res.status(400).json({message:"incorrect password"})
  }
    const token=await genToken(existingUser._id)
    res.cookie('token',token,{
      httpOnly:true,
      sameSite:true,
      maxAge:2592000000 //time in millisecond =30 days
    })
  res.status(200).json({message:"done dana dan"})

}
export default {signUp,signIn};