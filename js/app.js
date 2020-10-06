$(function() {
 
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    let pet_info = {
    "name": "Soph",
    "weight": 70,
    "happiness": 10
    }
   
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
// Calls the function when the button is clicked
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    

  
    function clickedTreatButton() {
      // Increase happiness
        pet_info['happiness'] =  pet_info['happiness'] + 2;
      // Increase weight
        pet_info['weight'] = pet_info['weight'] + 5;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase happiness
        pet_info['happiness'] =  pet_info['happiness'] + 3;
      // Decrease weight
        pet_info['weight'] = pet_info['weight'] - 2;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease happiness
        pet_info['happiness'] =  pet_info['happiness'] - 1;
      // Decrease weight
        pet_info['weight'] = pet_info['weight'] - 3;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
    // Sets weight to 0 if it goes lower than 0
      if (pet_info['weight'] < 1) {
        pet_info['weight'] = 1;
      }

     if (pet_info['happiness'] < 0) {
      pet_info['happiness'] = 0;
      }

    }


    
    // Updates HTML with the current values in pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  }
  )