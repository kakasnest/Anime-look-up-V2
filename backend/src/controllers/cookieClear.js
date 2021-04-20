const cookieClear = async (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "success" });
};

export default cookieClear;
