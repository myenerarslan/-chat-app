import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("socket-client connecting...");
  socket = io("http://localhost:5050/", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("socket-client connected"));
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;
  socket.on("receive-message", (message) => {
    console.log("new message", message);
    cb(message);
  });
};

export const subscribeInitialMesssages = (cb) => {
  if (!socket) return;
  socket.on("message-list", (messages) => {
    cb(messages);
  });
};
