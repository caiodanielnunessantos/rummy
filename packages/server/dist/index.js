"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const socket_io_1 = require("socket.io");
exports.server = new socket_io_1.Server({ cors: { methods: ['GET', 'POST'], origin: 'http://localhost:3000' } });
exports.server.on('connection', (socket) => {
    socket.emit('op_ok', 'global_info');
});
exports.server.listen(4000);
