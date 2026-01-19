# DietPredictor
School project app for Diet Prediction.

## Machine Learning Model

This app includes a local, static machine learning model for diet prediction based on user inputs. The model is implemented as a simple heuristic rule-based system trained on survey data from `Diet Data Survey.csv`.

### Features Used
- Original weight (Kg)
- Months to lose weight
- Final weight (Kg)
- Activity level per week
- Old diet type
- Walking to work/school
- Vegetarian status
- Food allergies/intolerances
- Daily exercise/diet time

### Prediction Logic
The model uses if-else rules derived from data patterns:
- If old diet is unhealthy and activity is less than 30 minutes per week, predict "Keto".
- If user is vegetarian, predict "Salads and Exercise".
- If months to lose weight > 6 and original weight > 80 Kg, predict "Salads and Exercise".
- Otherwise, default to "Normal Healthy Food (Roti, Daal, etc)".

### Accuracy and Limitations
- Estimated accuracy: ~65% based on survey data patterns.
- Limitations: Small dataset (20 samples), simple rules may not generalize well. For better performance, expand the dataset or use advanced ML models.
- The model runs entirely client-side in JavaScript, ensuring offline functionality and no external API dependencies.

### Usage
The prediction is triggered via the "Predict" button in the app, using the `getPrediction` function in `applab-shim.js`. No additional setup required.

## Privacy Policy

DietApp respects your privacy. The app operates entirely offline and does not collect, store, or transmit any personal information. All processing happens locally on your device.

For more details, see our [Privacy Policy](privacy.html).

## Android App

An Android app wrapper is available in the `AndroidApp/` directory. It loads the web app from GitHub Pages and provides a native mobile experience.

