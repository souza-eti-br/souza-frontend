//import http from "utils/http";
//
//class Server {
//    online: boolean = false;
//    
//    constructor() {
//        http.get("http://localhost:8080/status", (data: any) => {
//            if (data && data.serverOnline) {
//                this.online = true;
//            } else {
//                this.online = false;
//            }
//        });
//    }
//}
//
//const server = new Server();
//
//export default server;