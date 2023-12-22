document.getElementById('santaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('Name');
  const Name = nameInput.value;
  const submitButton = document.getElementById('submitBtn');
  submitButton.classList.add('sparkle');
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      alert('Form submitted successfully');
      submitButton.classList.remove('sparkle');
  
      // Show the surprise after a delay
      setTimeout(() => {
        document.getElementById('secretChildName').innerText = response.name;
        document.getElementById('surpriseBox').style.display = 'block';
      }, 2000); // Adjust the delay time (in milliseconds) as needed
    } else {
      alert('Form submission failed');
      submitButton.classList.remove('sparkle');
    }
  };

  xhr.onerror = function() {
    alert('Error: Failed to send data');
    submitButton.classList.remove('sparkle');
  };

  const formData = new FormData();
  formData.append('Name', Name);
  xhr.send(formData);
});

// Event delegation for the reveal button
document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'revealButton') {
    document.getElementById('secretChildName').style.visibility = 'visible';
  }
});
