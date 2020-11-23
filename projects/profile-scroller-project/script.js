const data = [
  {
    name: 'Steven Gerrard',
    age: 40,
    gender: 'male',
    footballClub: 'Liverpool FC',
    image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p1814.png'
  },

  {
    name: 'Lionel Messi',
    age: 33,
    gender: 'male',
    footballClub: 'Barcelona FC',
    image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564'
  },

  {
    name: 'Andriy Shevchenko',
    age: 44,
    gender: 'male',
    footballClub: 'Milan FC',
    image: 'https://np.pl.ua/wp-content/uploads/2019/12/15170966709_92ac99672f_z.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile () {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Football Club: ${currentProfile.footballClub}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}" width="280px" height="280px">
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
};

// Profile Iterator
function profileIterator (profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false}:
      {done: true}
    }
  }
};
