const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');


const totalLength = 1700; // Total length of the line
const lineY = 200;

let waveAmplitude = 1;
let waveFrequency = 0.05;
let wavePhase = 0;
const waveCount = 15;
const lineStrokeWidth = 10;
const mergeFactor = 3; // Position of the merging point on a scale of 0 to 10

function drawStraightLine(mergePosition) {
    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(100 + mergePosition, lineY);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = lineStrokeWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function drawWavyLine(mergePosition) {
    ctx.beginPath();
    ctx.moveTo(100 + mergePosition, lineY);
    for (let x = mergePosition; x < totalLength; x++) {
        const progress = (x - mergePosition) / (totalLength - mergePosition);
        const amplitude = waveAmplitude * progress;
        const frequency = waveCount * Math.PI / (totalLength - mergePosition);
        const y = lineY + Math.sin(x * frequency + wavePhase) * amplitude * 2;
        ctx.lineTo(100 + x, y);
    }
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = lineStrokeWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function animate() {
    canvas.width = (2000);
    canvas.height = (2000);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const mergePosition = (mergeFactor / 10) * totalLength;
    drawStraightLine(mergePosition);
    drawWavyLine(mergePosition);
    wavePhase += 0.05;
    waveAmplitude = 20 * Math.sin(wavePhase * 0.1);
    requestAnimationFrame(animate);
}

animate();