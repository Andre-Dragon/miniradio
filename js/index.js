'use strict';

const $appWrap = document.querySelector( '.app__wrap' );
const $appRecord = document.querySelector( '.app__record' );
const $videoPlayer = document.querySelector( '.video__player' );
const $audio = new Audio( 'http://air.radiorecord.ru:8102/rus_320' );

$audio.type = 'audio/aac';
$videoPlayer.loop = true;

const changeAudioApp = () => {

  if ( $audio.paused ) {
    $audio.play();
    $videoPlayer.play();
    $appWrap.classList.add( 'app__wrap--offset' );
    $appRecord.classList.add( 'app__rotate' );
  } else {
    $audio.pause();
    $videoPlayer.pause();
    $appWrap.classList.remove( 'app__wrap--offset' );
    $appRecord.classList.remove( 'app__rotate' );
  }

};

$appWrap.addEventListener( 'click', changeAudioApp );

