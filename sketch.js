let img;
function imageReady() {
console.log('image loaded');
}
function preload() {
img = loadImage('images/Lyon.jpeg', imageReady);
}
function draw() {
image(img, 0, 0, width, height);
}

function modelLoaded() {
    console.log('model loaded');
    mobilenet.predict(img, gotResults);
}
function setup() {
    createCanvas(400, 400);
    mobilenet =
    ml5.imageClassifier('MobileNet',
    modelLoaded);
}

let mobilenet;
function gotResults(errors, results) {
    if (errors) {
        console.error(errors);
    } else {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        createP(label);
        createP(prob);
    }
}
