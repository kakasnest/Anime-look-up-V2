const cookieClear = async (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "Successfully logged out" });
};

export default cookieClear;
