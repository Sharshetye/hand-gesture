function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captureimage" scr="' + data_uri + '">';
    });

}
Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x7tGzRQ-0/model.json', modelLoaded);
function modelLoaded() {
    console.log("modelLoaded");
}
function check() {
    img = document.getElementById("captureimage");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("label").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence;
    }
}