export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        // Get Prediction Details

        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];

        // Set Style
        const color = 'red';
        ctx.strokeStyle = 'red'
        ctx.font = '18px Arial';
        ctx.fillStyle = color


        // Draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}