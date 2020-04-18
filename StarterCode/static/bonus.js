var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: wfreq,
		title: { text: "Frequency of Washing" },
		type: "indicator",
        mode: "gauge+number"
        gauge: {
            axis: {
                range: [0, 9]
            }
            steps: [
                { range: [0, 1], color: "#331f00" },
                { range: [1, 2], color: "#663d00" },
                { range: [2, 3], color: "#995c00" },
                { range: [3, 4], color: "#cc7a00" },
                { range: [4, 5], color: "#ff9900" },
                { range: [5, 6], color: "#ffad33" },
                { range: [6, 7], color: "#ffc266" },
                { range: [7, 8], color: "#ffd699" },
                { range: [8, 9], color: "#ffebcc" },
              ],
        }
	}
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('gauge', data, layout);