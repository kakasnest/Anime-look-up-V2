export const heartbeat = (req, res) => {
  res.json({ connection: "true" });
};

export const csrfProtection = (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};

export const cookieClear = (req, res) => {
  res.clearCookie("auth");
  res.json({ message: "Auth cookie has been cleared from the browser" });
};

export const isUserLoggedIn = (req, res) => {
  res.json({ message: "User is logged in" });
};
