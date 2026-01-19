// AppLab API Shim - Custom implementation for button functionality

// Event handler storage
window.eventHandlers = {};

// onEvent - Register event handlers
function onEvent(elementId, eventType, callback) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.warn('Element not found:', elementId);
    return;
  }
  
  if (!window.eventHandlers[elementId]) {
    window.eventHandlers[elementId] = {};
  }
  window.eventHandlers[elementId][eventType] = callback;
  
  element.addEventListener(eventType, callback);
}

// setScreen - Show/hide screens
function setScreen(screenId) {
  var screens = document.querySelectorAll('[id^="screen"]');
  screens.forEach(function(screen) {
    screen.style.display = 'none';
  });
  
  var targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.style.display = 'block';
    console.log('Screen changed to:', screenId);
  } else {
    console.warn('Screen not found:', screenId);
  }
}

// getText - Get text from input/textarea
function getText(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.warn('Element not found:', elementId);
    return '';
  }
  
  if (element.value !== undefined) {
    return element.value; // Input or textarea
  }
  return element.textContent || element.innerText || '';
}

// setText - Set text on element
function setText(elementId, value) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.warn('Element not found:', elementId);
    return;
  }
  
  if (element.value !== undefined) {
    element.value = value; // Input or textarea
  } else {
    element.textContent = value;
  }
}

// addPair - Add data to object (for API calls)
function addPair(obj, key, value) {
  obj[key] = value;
}

// getPrediction - Local ML prediction using heuristic rules based on survey data
function getPrediction(modelName, modelId, data, callback) {
  console.log('getPrediction called:', modelName, modelId, data);
  
  // Simple heuristic based on patterns from Diet Data Survey.csv
  var prediction = 'Normal Healthy Food (Roti, Daal, etc)'; // Default
  
  var oldDiet = data['Whatwasyourolddiet'];
  var activity = data['Howactivewereyouperweekbeforethediet'];
  var vegetarian = data['Areyouavegetarianornot'];
  var months = parseFloat(data['Inhowmanymonthsdidyouloseyourweight']) || 0;
  var originalWeight = parseFloat(data['WhatwasyouroriginalweightinKg']) || 0;
  
  // Extended rules based on data analysis
  if (oldDiet === 'Unhealthy [ Oily, Cheese, Pizza, Cold Drinks, Chips ]' && activity === 'Less than 30 minutes') {
    prediction = 'Keto';
  } else if (vegetarian === 'Vegetarian') {
    prediction = 'Salads and Exercise';
  } else if (months > 6 && originalWeight > 80) {
    prediction = 'Salads and Exercise';
  } else if (activity === 'More than 2 hours per week' && oldDiet === 'Healthy [Roti, Rice, Vegetables, Pulses(Daal)]') {
    prediction = 'Normal Healthy Food (Roti, Daal, etc)';
  }
  
  // Simulate async for consistency
  setTimeout(function() {
    callback(prediction);
  }, 100);
}

// Make functions global
window.onEvent = onEvent;
window.setScreen = setScreen;
window.getText = getText;
window.setText = setText;
window.addPair = addPair;
window.getPrediction = getPrediction;

console.log('AppLab Shim loaded successfully');
