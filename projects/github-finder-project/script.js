// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUsers(userText)
    .then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alert

      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
  }
});
