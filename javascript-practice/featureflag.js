function fetchAllFeatures() {
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}

let cacheFeatures = new Map();

const getFeatureState = (featureName, isFeatureEnabled) => {
  return new Promise(async (resolve, _) => {
    let features = null;

    if (cacheFeatures.has("features-list")) {
      console.log("Features from Cache", cacheFeatures);
      features = await cacheFeatures.get("features-list");
    } else {
      console.log("Features from API", cacheFeatures);
      const promiseFeatures = fetchAllFeatures();
      cacheFeatures.set("features-list", promiseFeatures);
      features = await promiseFeatures;
    }

    if (!featureName) resolve(isFeatureEnabled);

    if (features[featureName]) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const setOverrideState = async (featureName, overrideValue) => {
  const updatedFeatures = await cacheFeatures.get("features-list");

  if (!updatedFeatures) {
    console.log("Error: Feature List is Not Present!");
    return;
  }

  updatedFeatures[featureName] = overrideValue;
  cacheFeatures.set("features-list", Promise.resolve(updatedFeatures));
};

// feedback-dialog.js
getFeatureState("feedback-dialog", true).then((isEnabled) => {
  console.log("isEnabled (feedback-dialog):", isEnabled);
});

setOverrideState("feedback-dialog", true);

// src/feature-x/summary.js
getFeatureState("feedback-dialog", false).then((isEnabled) => {
  console.log("isEnabled (feedback-dialog) 2:", isEnabled);
});
