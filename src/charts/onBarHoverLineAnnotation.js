const onBarHoverLineAnnotation = {
    id: 'on_bar_hover_line',
    beforeDraw: (chart) => {
        const tooltip = chart.tooltip;
        tooltip.opacity = 0;
    },
    afterDraw: (chart) => {
        const tooltip = chart.tooltip;
        tooltip.opacity = 0;

        if (tooltip._active.length) {
            const ctx = chart.ctx;
            const barElement = tooltip.dataPoints[0].element;
            const chartArea = chart.chartArea;

            //disable default tooltip
            tooltip.width = 0;
            tooltip.height = 0;
            tooltip._size.height = 0;
            tooltip._size.width = 0;
            ctx.save();

            // Draw paths in the middle of the bars
            ctx.beginPath();
            ctx.moveTo(barElement.x, 10);
            ctx.lineTo(barElement.x, chartArea.height);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.save();
            ctx.closePath();


            // Draw the circle on the target point of the bar
            ctx.beginPath();
            ctx.arc(barElement.x, barElement.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.stroke();
            ctx.save();
            ctx.closePath();

            
            // Area of the text after hovering
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.rect(0, 0, chart.width, 25);
            ctx.fillStyle = "#088F8F";
            ctx.fill();
            ctx.stroke();
            ctx.save();

            // styling of "Return"
            ctx.font = '12px sans-serif';
            ctx.fillStyle="white";
            ctx.fillText('Return:', 10, 15);

            // styling of the content of "Return"
            ctx.fillStyle = "white";
            ctx.fillText(tooltip.dataPoints[0].raw + 'pips', ctx.measureText('Return:').width + 20, 15);

            
            ctx.fillStyle = "white";
            let previousText = 'Return: ' + tooltip.dataPoints[0].raw;
            ctx.fillText('Trades:', ctx.measureText(previousText).width + 50, 15);
            previousText = 'Return: ' + tooltip.dataPoints[0].raw + 'Trades';
            ctx.fillText('2', ctx.measureText(previousText).width + 60, 15);
            ctx.fillStyle = "#FFB700";
            previousText += '2';
            ctx.fillText('Benchmark: ' + '7pips', ctx.measureText(previousText).width + 70, 15);
        }
    }
}

export default onBarHoverLineAnnotation;