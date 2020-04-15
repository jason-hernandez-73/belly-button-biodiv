// 1. Use the D3 library to read in samples.json.
function readJson(){
    d3.json("../data/samples.json").then(function(data) {
        var names = data.names;
        var select = d3.select("#selDataset");
        names.forEach(function (data) {
            select.append("option").text(data).property("value", data);
        })
        createChart(names[0]);
    })
};

readJson();

// Function to create charts
function createChart(sample) {
    d3.json("../data/samples.json").then(function(data) {
        var result = data.samples.filter(obj => obj.id == sample)[0];
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        // 3. Create a bubble chart that displays each sample.
        var trace1 = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
            size: sample_values,
            color: otu_ids
        }
        };

        var data = [trace1];

        var layout = {
        title: 'Total numbers, by OTU',
        showlegend: false,
        height: 600,
        width: 1200
        };

        Plotly.newPlot('bubble', data, layout);

        // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        var trace2 = [{
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(otu_ids => `OTU ${otu_ids}`).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
            }];

        var layout = {
            title: "Top 10 OTUs",
            xaxis: {
                title: "Microbial population"
            },
            yaxis: {
                title: "OTU id"
            }
        };
        
        Plotly.newPlot("bar", trace2, layout);
    })
        
}

// // 4. Display the sample metadata, i.e., an individual's demographic information
// // 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// function unpack(rows, index){
//     return rows.map(function(row){
//         return row[index];
//     });
// }

// d3.select("#sample-metadata").append(row[index]);

// 6. Update all of the plots any time that a new sample is selected.
function optionChanged(newSample) {
    createChart(newSample);
}