import Pusher, { Channel } from 'pusher-js';

let pusherService: null | Pusher = null;
let pusherChannel: Channel | null = null;
function getPusherChannel(): Channel {
    if (pusherService === null) {
        pusherService = new Pusher('fe8bd0e55821753865ac', { cluster: 'ap4' });
    }
    if (pusherChannel === null) {
        pusherChannel = pusherService.subscribe('risk-free-rate');
    }
    return pusherChannel;
}

export default getPusherChannel;