const csrfProtection = async (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};

export default csrfProtection;
