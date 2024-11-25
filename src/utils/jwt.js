import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "6h",
    }
  );
};

export const verfiyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
