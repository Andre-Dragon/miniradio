document.body.onload = () => {
  'use strict';

  const $radioPreloader = document.getElementById( 'radio__preloader' );
  let images = document.images,
  imagesCount = images.length,
  loadedImg = 0;
  $radioPreloader.classList.remove( 'hide' );

    function imageLoaded() { 

      loadedImg++;

      if ( loadedImg >= imagesCount ) {
        setTimeout( () => {
          setTimeout( () => {
            $radioPreloader.classList.add( 'hide' );
          }, 3100 );
          if ( !$radioPreloader.classList.contains( 'done' ) ) {
            $radioPreloader.classList.add( 'done' );
          }
        }, 3000 );
      }
      
    }

    for ( let i = 0; i < imagesCount; i++ ) {
      const imageCopy = new Image();
      imageCopy.src = images[i].src;
      imageCopy.onload = imageLoaded;
      imageCopy.onerror = imageLoaded;
    }

};