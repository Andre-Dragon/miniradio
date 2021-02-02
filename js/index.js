'use strict';

const $appWrap = document.querySelector( '.app__wrap' );
const $appRecord = document.querySelector( '.app__record' );
const $appDescription = document.querySelector( '.app__description' );
const $videoPlayer = document.querySelector( '.video__player' );
const $btnStopRadio = document.querySelector( '.btn__stop--radio' );
const $footerImg = document.querySelector( '.footer__img' );
const $form = document.querySelector( '.form' );
const $footerName = document.querySelector( '.footer__name' );

const $audio = new Audio();
$audio.type = 'audio/aac';
$videoPlayer.loop = true;

$btnStopRadio.disabled = true;

const hide = $el => {
  $el.classList.add( 'hide' );
};

const show = $el => {
  $el.classList.remove( 'hide' );
};

const changeBtnPlay = () => {

  if ( $audio.paused ) {

  $btnStopRadio.classList.add( 'button__play' );
  $btnStopRadio.classList.remove( 'button__stop' );
  $appWrap.classList.remove( 'app__wrap--offset' );
  $appRecord.classList.remove( 'app__rotate' );
  $footerImg.classList.add( 'done' );
  $footerName.classList.add( 'done' );

  setTimeout( () => {

    $form.classList.remove( 'done' );

    setTimeout( () => {

      hide( $footerImg );
      hide( $footerName );

    }, 300 );

  }, 200 );

  } else {

  $btnStopRadio.classList.remove( 'button__play' );
  $btnStopRadio.classList.add( 'button__stop' );
  $appWrap.classList.add( 'app__wrap--offset' );
  $appRecord.classList.add( 'app__rotate' );
  show( $footerImg );
  show( $footerName );

    setTimeout( () => {

      $form.classList.add( 'done' );

      setTimeout( () => {

        $footerImg.classList.remove( 'done' );
        $footerName.classList.remove( 'done' );
      
      }, 300 );

    }, 200 );
  }
};

const changeAudioApp = () => {

  if ( $audio.paused ) {
    $audio.play();
    $videoPlayer.play();
  } else {
    $audio.pause();
    $videoPlayer.pause();
  }

};

$form.addEventListener( 'change', event => {

  const target = event.target;
  const parent = target.closest( '.form__group' );
  const title = parent.querySelector( '.form__label--radio' ).textContent;

  $footerName.textContent = title;
  $btnStopRadio.disabled = false;
  $audio.src = target.dataset.radioStantion;

  hide( $appDescription );
  show( $btnStopRadio );

  changeAudioApp();
  changeBtnPlay();

});

$btnStopRadio.addEventListener( 'click', event => {

  event.preventDefault();

  changeAudioApp();
  changeBtnPlay();

});

