function getDogImage(dogCount) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson.message))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(pictureList) {
    //console.log(pictureList);
    pictureList.forEach(element => {
        console.log(element);
    });
  }
  
  function watchForm() {
      //console.log("submitted")
    $('form').submit(event => {
      event.preventDefault();
      //console.log($('input').val());
      let dogCount = $('input').val();
      getDogImage(dogCount);
    });
  }
  
  $(function() {
    //wait for submission
    watchForm();
  });