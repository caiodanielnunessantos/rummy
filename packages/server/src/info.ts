import { GlobalInfo } from 'base';
import { server } from '.';

export async function get_global_info() {
  const global_info: GlobalInfo = {
    named_players: [],
    unnamed_players: [],
    hosting_waiting: {}
  };
  const sockets = await server.fetchSockets();
  sockets.forEach((socket) => {
    if (socket.data.name) {
      global_info.named_players.push(socket.data.name);
    } else {
      global_info.unnamed_players.push(socket.id);
    }
  });
  return global_info;
}
