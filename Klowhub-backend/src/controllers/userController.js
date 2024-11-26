const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ id: user.id, email: user.email, avatar: user.avatar });
  } catch (error) {
    res.status(500).json({ error: "Error fetching user information." });
  }
};

const updateAvatar = async (req, res) => {
  const { avatar } = req.body;

  const allowedAvatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
  ];
  if (!allowedAvatars.includes(avatar)) {
    return res.status(400).json({ error: "Invalid avatar selection." });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { avatar },
    });

    res.json({ message: "Avatar updated successfully.", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating avatar." });
  }
};

module.exports = { getUserProfile, updateAvatar };
