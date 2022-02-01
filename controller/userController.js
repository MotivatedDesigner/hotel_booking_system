const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    let role
    try {
    if (req.params.role === "owner") {
     role = "owner";
    }else if(req.params.role === "client") {
        role = "client";   
    }
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role : role,
  })
    const token = jwt.sign({
      id: user.id,
      name: user.name,
      role: user.role,
    },process.env.SECRET);

    res.header("auth-token", token).send(user);
  } catch (error) {
    res.send(error)
}
};

const login = async (req, res) => {
  try {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("Email doesn't exist");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(404).send("password wrong");

  const token = jwt.sign({
    _id: user.id,
    name: user.name,
    role: user.role,
  },process.env.SECRET);

  res.header("auth-token", token).send(token);
} catch (error) {
  res.send(error)
}
};

const logout = (req, res) =>{
  const authHeader = req.headers["auth-token"];
  jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
  if (logout) {
  res.send({msg : 'You have been Logged Out' });
  } else {
  res.send({msg:'Error'});
  }
  });
  }

module.exports =  {
    register, login, logout
};
