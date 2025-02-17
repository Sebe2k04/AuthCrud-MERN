const Users = require("../models/userSchema");

const getUser = async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(401).json({ message: "Not authenticated" });
  } else {
    const user = await Users.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  }
};

module.exports = {
  getUser,
};
