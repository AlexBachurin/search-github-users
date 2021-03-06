// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data
//data will be dynamic for different charts



// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Column2D = ({ data }) => {
    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
        type: "column2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                "caption": "Most Popular Repos",
                "enableSmartLabels": "0",
                "startingAngle": "0",
                "xAxisName": 'Repos',
                "yAxisName": 'Stars',
                "xAxisNameFontSize": '20',
                "yAxisNameFontSize": '20',
                "thousandSeparator": 'k',
                "palettecolors": '#003f5c,#58508d,#bc5090,#ff6361,#ffa600',
                "showValues": '1',
                "useDataPlotColorForLabels": "1",
                "theme": "fusion"
            },
            // Chart Data
            data
        }
    };

    return (<ReactFC {...chartConfigs} />);
}

export default Column2D;