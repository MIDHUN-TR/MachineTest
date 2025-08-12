const jwt = require("jsonwebtoken");

const jwtMiddleWare = async (req, res) => {
  const token = req.header.authorization.split(" ")[1];
  try {
    const verifyData = jwt.verify(token, process.env.SECRETKEY);
    req.payload = verifyData._id;
    if (verifyData) {
      res.status(200).json({token,username:verifyData.name});
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = jwtMiddleWare
