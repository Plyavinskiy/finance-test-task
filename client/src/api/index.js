import io from "socket.io-client";

const API = "http://localhost:4000";
const socket = io.connect(API);

export default socket;