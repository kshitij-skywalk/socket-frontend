const sock = io("ws://localhost:6004", { transports: ["websocket"] });
sock.on("new_msg", function (data) {
  alert(data);
});

setTimeout(() => {
  console.log("EVENT EMITTED");
  sock.emit("joinMe", { email: "user1@example.com" });
}, 2000);
// const apiCall = async function () {
//   const data = await fetch("http://localhost:6004/home");
//   console.log(await data.json());
// };

// apiCall();
