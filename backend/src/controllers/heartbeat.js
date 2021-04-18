const heartbeat = async (req, res) => {
  res.json({ connection: "true" });
};

export default heartbeat;
