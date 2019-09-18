console.log('marvel injector is ready...');

let fileNames = [
  'ussama-azam-Pb_QtB442h4-unsplash.jpg',
  'road-trip-with-raj-o4c2zoVhjSw-unsplash.jpg',
  'kon-karampelas-rf0FFzao8rQ-unsplash.jpg',
  'judeus-samson-rAomxXulMNM-unsplash.jpg',
  'joey-nicotra-0EI_4R2r0qg-unsplash.jpg',
  'azmathulla-shaik-K5TfhhrNs20-unsplash.jpg',
  'asmi-pai-XsOiiPpJNbg-unsplash (1).jpg'
];

const imageTag = document.getElementsByTagName('img');
console.log(imageTag);

for (imgElement of imageTag) {
  let r = Math.floor(Math.random() * fileNames.length);
  let file = 'images/' + fileNames[r];
  let url = chrome.extension.getURL(file);
  console.log(url);
  imgElement.src = url;
}
