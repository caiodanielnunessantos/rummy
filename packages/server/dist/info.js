"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_global_info = void 0;
const _1 = require(".");
function get_global_info() {
    return __awaiter(this, void 0, void 0, function* () {
        const global_info = {
            named_players: [],
            unnamed_players: [],
            hosting_waiting: {}
        };
        const sockets = yield _1.server.fetchSockets();
        sockets.forEach((socket) => {
            if (socket.data.name) {
                global_info.named_players.push(socket.data.name);
            }
            else {
                global_info.unnamed_players.push(socket.id);
            }
        });
        return global_info;
    });
}
exports.get_global_info = get_global_info;
