// This uses the function to read json from the app.js
// 

// Function to create gauge
function createGauge(sample) {
    d3.json("../data/samples.json").then(function(data) {
        var result = data.metadata.filter(obj => obj.id == sample)[0];
        var level = parseFloat(result.wfreq);
        
        // Define data for gauge
        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: level,
                title: { text: "Frequency of Washing" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {
                        range: [0, 9]
                    },
                    steps: [
                        { range: [0, 1], color: "#66004d" },
                        { range: [1, 2], color: "#990073" },
                        { range: [2, 3], color: "#cc0099" },
                        { range: [3, 4], color: "#ff00bf" },
                        { range: [4, 5], color: "#ff33cc" },
                        { range: [5, 6], color: "#ff66d9" },
                        { range: [6, 7], color: "#ff99e6" },
                        { range: [7, 8], color: "#ffccf2" },
                        { range: [8, 9], color: "#ffffff" }
                    ],
                }
            }
        ];
        // Layout and create gauge
        var layout = {
            width: 400,
            height: 400,
            margin: {
                 t: 0, b: 0 
            },
            
        };
        Plotly.newPlot('gauge', data, layout);
    
    });
};

    // 6. Update all of the plots any time that a new sample is selected.
    function optionChanged(newSample) {
        createChart(newSample);
};