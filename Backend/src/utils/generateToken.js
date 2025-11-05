import jwt from "jsonwebtoken";

export const generateToken = async (user) => {
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return token;
};
