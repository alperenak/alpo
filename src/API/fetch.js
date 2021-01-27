import axios from "axios";
const uri = "http://alpodev.herokuapp.com";

export async function SendHireMessage(payload) {
  const response = await axios.post(`${uri}/sendHireMessage`, payload);
  return response.data;
}
