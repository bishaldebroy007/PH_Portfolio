const downloadButton = document.getElementsById('downloadButton');
const hiddenDownloadLink = document.getElementById('hiddenDownloadLink');

downloadButton.addEventListener('click', () => {
  hiddenDownloadLink.click();
});