// This requires the same function to read json as the app.js
// 1. Use the D3 library to read in samples.json.
function readJson(){
    d3.json("../data/samples.json").then(function(data) {
        var names = data.names;
        var select = d3.select("#selDataset");
        names.forEach(function (data) {
            select.append("option").text(data).property("value", data);
        });
        createChart(names[0]);
    });
};

readJson();

// Function to create charts
function createChart(sample) {
    d3.json("../data/samples.json").then(function(data) {
        var result = data.samples.filter(obj => obj.id == sample)[0];
        
        // Define data for gauge
        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: result.wfreq,
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
                        { range: [8, 9], color: "#ffebcc" }
                    ],
                }
            }
        ];
        // Layout and create gauge
        var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);
    
    });
};

    // 6. Update all of the plots any time that a new sample is selected.
    function optionChanged(newSample) {
        createChart(newSample);
};