import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(throttleCallback, 1000));

function throttleCallback(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
let dataSeconds = Number(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(dataSeconds);


