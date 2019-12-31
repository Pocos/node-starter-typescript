import io_socket_library, { Socket } from 'socket.io';
import { Server } from 'http';
function init(http: Server) {
    const io = io_socket_library(http);

    io.on('connection', (socket: Socket) => {
        socket.broadcast.emit('broadcast', 'Channel > Say hello to new user:' + uuidv4());
        socket.on('disconnect', () => {
            console.log('disconnection');
        });
        socket.on('chat', (msg: string) => {
            io.emit('chat', msg);
        });
    });

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
            const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
export default init;
