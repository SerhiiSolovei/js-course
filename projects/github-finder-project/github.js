class GitHub {
  constructor() {
    this.client_id = '4c51f0449d108dd4669f';
    this.client_secret = 'f79074af8d94c82af0a646322f07e5c469139fa2';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  };

  async getUsers (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, // the same as profile: profile
      repos
    }
  }
};
