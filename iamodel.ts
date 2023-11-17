import {
HandLandmarker,
FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0";
const demosSection = document.getElementById("demos");
let handLandmarker = undefined;
let runningMode = "IMAGE";
let enableWebcamButton: HTMLButtonElement;
let webcamRunning: Boolean = false;

const createHandLandmarker = async () => {
const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
handLandmarker = await HandLandmarker.createFromOptions(vision, {
baseOptions: {
modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
delegate: "GPU"
},
runningMode: runningMode,
numHands: 2
});
demosSection.classList.remove("invisible");
};

console.log("Olá")