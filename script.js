let zoomedIn = false; 
function openPopup(imageUrl) {
  const popupContainer = document.getElementById('popupContainer');
  const popupImage = document.getElementById('popupImage');
  zoomedIn = !zoomedIn;

  if (zoomedIn) {
    popupImage.src = imageUrl;
    popupContainer.style.display = 'flex';
  } else {
    closePopup();
  }
}

function closePopup() {
  const popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'none';
}
