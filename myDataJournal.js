/*
* Nicole Rodriguez
* CS 81
* Module 4b Assignment
* URL: https://github.com/nicolerodriguezsmc/cs81-module4b-mydataexplorer
*/
// Weekly data journal
let weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 5, mood: "happy", caffeineIntake: 2, focusLevel: 7 },
  { day: "Tuesday", sleepHours: 6, screenTime: 7, mood: "productive", caffeineIntake: 3, focusLevel: 6 },
  { day: "Wednesday", sleepHours: 8, screenTime: 8, mood: "tired", caffeineIntake: 1, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 8 },
  { day: "Friday", sleepHours: 6, screenTime: 4, mood: "happy", caffeineIntake: 2, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 4 },
  { day: "Sunday", sleepHours: 8, screenTime: 5, mood: "productive", caffeineIntake: 1, focusLevel: 6 }
];

// Predictions
// I think Wednesday will have the most screen time.
// My best focus day will be Thursday.
// I predict I assume around 7.75 hours.
// My most frequent mood will be happy.
// At least for me, caffeine helps with focus.

// Function to find the day with the highest screen time
function findHighestScreenTime(weekData) {

  let highestScreenTime = 0;
  let dayWithHighestScreenTime = "";

  for (let day of weekData) {
    if (day.screenTime > highestScreenTime) {
      highestScreenTime = day.screenTime; //Update the highest screen time
      dayWithHighestScreenTime = day.day; //Update the day with the highest screen time
    }
  }
  return dayWithHighestScreenTime;
}

// Function to find the day with the best focus level
function findBestFocusDay(weekData) {

  let highestFocus = 0;
  let dayWithHighestFocus = "";

  for (let day of weekData) {
    if (day.focusLevel > highestFocus) {
      highestFocus = day.focusLevel; //Update the highest focus level
      dayWithHighestFocus = day.day; //Update the day with the highest focus level
    }
  }
  return dayWithHighestFocus;
}

// Function to calculate average sleep
function averageSleep(weekData) {

  let totalSleep = 0;

  for (let day of weekData) {
    totalSleep += day.sleepHours; //Add sleep hours to the total
  }
  return totalSleep / weekData.length; //Return the average sleep hours
}

// Function to find the most frequent mood
function mostFrequentMood(weekData) {

  let moodCount = {};
  let mostFrequent = "";
  let highestCount = 0;

  for (let day of weekData) {
    if (moodCount[day.mood]) {
      moodCount[day.mood] += 1; //Add to the count if the mood exists
    } else {
      moodCount[day.mood] = 1; //Add a new mood if the mood does not already exist
    }
  }

  // Find the mood with the highest count
  for (let mood in moodCount) {
    if (moodCount[mood] > highestCount) {
      mostFrequent = mood; //Update the most frequent mood
      highestCount = moodCount[mood]; //Update the highest mood count
    }
  }
  return mostFrequent;
}

// Function to correlate caffeine intake to focus level
function correlateCaffeineToFocus(weekData) {
  let highestFocusDay = { day: "", focusLevel: 0, caffeineIntake: 0 };
  let highestCaffeineDay = { day: "", focusLevel: 0, caffeineIntake: 0 };


  for (let day of weekData) {
    // Check for highest focus level
    if (day.focusLevel > highestFocusDay.focusLevel) {
      highestFocusDay = day; //Update the day with the highest focus level
    }


    if (day.caffeineIntake > highestCaffeineDay.caffeineIntake) {
      highestCaffeineDay = day;  //Update the day with the highest caffeine level
    }
  }

  //Return True or False if the highest focus day is equal to the highest caffeine day
  return highestFocusDay.day === highestCaffeineDay.day;
}


// Output the results
console.log("Analyzing Nicole's Data Journal...");
console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Best focus day:", findBestFocusDay(weekData));
console.log("Average sleep:", averageSleep(weekData), "hrs");
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log("Does more caffeine mean better focus?", correlateCaffeineToFocus(weekData) ? "Heck Yeah" : "Heck No");

  return dayWithHighestFocus;
}
