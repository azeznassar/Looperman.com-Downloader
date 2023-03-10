function button(href) {
    var link = document.createElement('a');
    link.href = href;
    link.style.position = 'absolute';
    link.style.top = '7px';
    link.style.right = '199px';
    link.style.zIndex = 100;
    link.style.textDecoration = 'none';
    link.style.fontSize = '17px';
    link.style.fontFamily = 'system-ui';
    link.style.background = '#000000';
    link.style.padding = '5px';
    link.style.color = 'white';
    link.style.borderRadius = '10px';
    link.classList.add('download');
    link.setAttribute('download', '');

    var span = document.createElement('span');
    span.classList.add('download-label');
    span.innerText = 'Download MP3 ⬇️';
  
    link.appendChild(span);
    return link.outerHTML;
  }
  
  var playerWrappers = document.querySelectorAll('.player-wrapper');
  
  playerWrappers.forEach(function(playerWrapper) {
    let url = playerWrapper.getAttribute('rel');
    
    playerWrapper.insertAdjacentHTML('beforeend', button(url));
  });