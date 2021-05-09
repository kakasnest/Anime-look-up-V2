export const heartbeat = (req, res) => {
  try {
    res.json({ connection: "true" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const csrfProtection = (req, res) => {
  try {
    res.json({ csrfToken: req.csrfToken() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const cookieClear = (req, res) => {
  try {
    res.clearCookie("auth");
    res.json({ message: "Auth cookie has been cleared from the browser" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
