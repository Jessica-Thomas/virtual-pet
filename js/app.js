




// function checkWeight() {
//     let petWeight = 70;
//     if (petWeight > 130) {
//         console.log("Put Rambo on a diet-- less snackos")
//         else  {
//         console.log("Give that boy some snackos. His ribs are touching")
//     }
//     }
// }





$(function() {
 
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    let pet_info = {
    name: "Rambo",
    weight: 70,
    happiness: 10
    }
   

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    

  
    function clickedTreatButton() {
        // Increase pet happiness
        pet_info['happiness'] =  pet_info['happiness'] + 1;

      // Increase pet weight
        pet_info['weight'] = pet_info['weight'] + 5;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] =  pet_info['happiness'] + 1;

      // Decrease pet weight
      pet_info['weight'] = pet_info['weight'] - 5;

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] =  pet_info['happiness'] - 1;

      // Decrease pet weight
      pet_info['weight'] = pet_info['weight'] - 5;

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
        if pet_info['weight'] < 1
      updatePetInfoInHtml();

    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info.name);
      $('.weight').text(pet_info.weight);
      $('.happiness').text(pet_info.happiness);
    }
  }
  )