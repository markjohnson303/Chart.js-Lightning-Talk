//sales by month = proofs by day

// var firebaseRef;
// var proofsRef;


var dataProofsSentByDay = {
       labels : ["7", "6", "5", "4", "3", "2", "1"],
       datasets: [
       {
           label: "This Week",
           fillColor: "rgba(67, 214, 92, 0.5)", 
           strokeColor: "rgba(67, 214, 92, 1)",
           pointColor: "rgba(67, 214, 92,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(67, 214, 92,1)",
           data: [54, 55, 55, 51, 37, 31, 44]
       },
       {
           label: "Last Week",
           fillColor: "rgba(240, 15, 92, 0.5)", 
           strokeColor: "rgba(67, 214, 92, 1)",
           pointColor: "rgba(67, 214, 92,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(67, 214, 92,1)",
           data: [30, 40, 55, 51, 15, 31, 44]
       }  
   ]};

   var dataProofsSentByDesigner = {
      labels : ["Bill", "Bob", "Jane", "Judy", "Max"],
      datasets: [
      {
          label: "Total Sales",
          fillColor: "rgba(67, 214, 92, 0.5)", 
          strokeColor: "rgba(67, 214, 92, 1)",
          pointColor: "rgba(67, 214, 92,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(67, 214, 92,1)",
          data: [15, 21, 8, 13, 16]
      },                      
  ]};

  var dataProofsSentByPipeline = [
     {
         label: "Weddings",
         color: "rgba(67, 214, 92, 0.5)", 
         highlight: "rgba(67, 214, 92, 1)",
         value: 400
     },
     {
         label: "Organizations",
         color: "rgba(218, 233, 39, 0.5)", 
         highlight: "rgba(218, 233, 39, 1)",                            
         value: 50
     },                        
     {
         label: "Individuals",
         color: "rgba(230, 150, 200, 0.5)", 
         highlight: "rgba(230, 150, 200, 1)",
         value: 130
     }                  
 ];

$(document).ready(function(){



var ctxProofsSentByDay = $("#proofsSentByDay").get(0).getContext("2d"); 
var ctxProofsSentByDesigner = $("#proofsSentByDesigner").get(0).getContext("2d"); 
var ctxProofsSentByPipeline = $("#proofsSentByPipeline").get(0).getContext("2d");

var chartProofsSentByDay = new Chart(ctxProofsSentByDay).Line(dataProofsSentByDay);
var chartProofsSentByDesigner = new Chart(ctxProofsSentByDesigner).Bar(dataProofsSentByDesigner);	
var chartProofsSentByPipeline = new Chart(ctxProofsSentByPipeline).Pie(dataProofsSentByPipeline);

$("#legendProofsSentByDay").html(chartProofsSentByDay.generateLegend());
$("#legendProofsSentByDesigner").html(chartProofsSentByDesigner.generateLegend());
$("#legendProofsSentByPipeline").html(chartProofsSentByPipeline.generateLegend());


});





















