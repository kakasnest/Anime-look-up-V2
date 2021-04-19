import axios from "axios";

export const getData = async () => {
  try {
    const {
      data: { connection },
    } = await axios.get("/api/heartbeat");
    setConnected(connection);
  } catch (error) {
    setError(error.message);
  }
};
