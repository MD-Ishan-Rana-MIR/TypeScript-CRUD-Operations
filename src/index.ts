import app from "./app";
import port from "./config/config";
const serverPort = port.port;

app.listen(serverPort,()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
})