export const heartbeat = async (req, res) => {
  res.json({ connection: "true" });
};

export const csrfProtection = async (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};

export const cookieClear = async (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "Auth cookie has been cleared from the browser" });
};

export const isUserLoggedIn = async (req, res) => {
  res.json({ message: "User is logged in" });
};
