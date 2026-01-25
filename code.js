onEvent("button2", "click", function( ) {
	console.log("button2 clicked!");
	setScreen("yourdetail");
});
var data = {};
onEvent("Dietprediction_predict", "click", function() {
    addPair(data, "Areyouavegetarianornot", getText("Areyouavegetarianornot_dropdown"));
		addPair(data, "Howactivewereyouperweekbeforethediet", getText("Howactivewereyouperweekbeforethediet_dropdown"));
		addPair(data, "WhatwasyouroriginalweightinKg", getText("WhatwasyouroriginalweightinKg_input"));
		addPair(data, "Inhowmanymonthsdidyouloseyourweight", getText("Inhowmanymonthsdidyouloseyourweight_input"));
		addPair(data, "WhatwasyourfinalweightKg", getText("WhatwasyourfinalweightKg_input"));
		addPair(data, "Whatwasyourolddiet", getText("Whatwasyourolddiet_dropdown"));
		addPair(data, "Doyouwalktoworkorschoolbeforestarting", getText("Doyouwalktoworkorschoolbeforestarting_dropdown"));
		addPair(data, "Areyouallergicorintoleranttosomefoods", getText("Areyouallergicorintoleranttosomefoods_dropdown"));
    setText("Dietprediction_prediction", '');
    getPrediction("Diet prediction", "9S2DmXeJspu6", data, function(value) {
      setText("Dietprediction_prediction", value);
    });
  });
onEvent("button1", "click", function( ) {
	console.log("button clicked!");
	setScreen("Text");
});
onEvent("button2", "click", function( ) {
	console.log("button2 clicked!");
	setScreen("yourdetail");
});
