class GitHub {
  constructor() {
    this.client_id = '4c51f0449d108dd4669f';
    this.client_secret = 'f79074af8d94c82af0a646322f07e5c469139fa2';
  };

  async getUsers (user) {
    const profileUsers = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileUsers.json();

    return {
      profile // the same as profile: profile
    }
  }
};
