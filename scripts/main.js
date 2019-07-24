var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/apartament.jpg') {
      myImage.setAttribute ('src','images/DSC_0923.jpg');
    } else {
      myImage.setAttribute ('src','images/apartament.jpg');
    }
}