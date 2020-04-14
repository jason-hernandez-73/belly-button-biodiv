// 1. Use the D3 library to read in samples.json.
function readJson(){
    d3.json("../samples.json").then(function(data) {
        var biodivData = unpack(resolved.dataset.data[0]);
        var trace1 = {
            values: sample_values,
            labels: otu_ids,
            hovertext: otu_labels,
            type: "bar",
            orientation: "h"
        };
    })
};

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
var layout = {
    title: "Top 10 OTUs",
    xaxis: {
        title: "Microbial population"
    },
    yaxis: {
        title: "OTU id"
    }
};

d3.select("#bar")

Plotly.newPlot("plot", trace1, layout);

// 3. Create a bubble chart that displays each sample.
var trace1 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
      size: sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Total numbers, by OTU',
    showlegend: false,
    height: 600,
    width: 600
  };

  d3.select("#bubble")

  Plotly.newPlot('myDiv', data, layout);

// 4. Display the sample metadata, i.e., an individual's demographic information
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

function unpack(rows, index){
    return rows.map(function(row){
        return row[index];
    });
}

d3.select("#sample-metadata").append(row[index]);

// 6. Update all of the plots any time that a new sample is selected.
d3.select("#selDataset").on("change", updateChanges);
function updateChanges() {
    var dropdown = d3.select("#selDataset");
    var dataset = dropdown.node.value;
    // Put if statements here
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("myDiv", "y", [y]);
}