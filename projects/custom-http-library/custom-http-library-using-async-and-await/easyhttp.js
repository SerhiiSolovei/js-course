/**
 * Easy HTTP Library
 * @version 3.0.0
 * Library for making HTTP Request
*/

class EasyHTTP {
  // // Making an HTTP Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  };

  // Making an HTTP POST Request
  async post (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  };

  // Making an HTTP POST Request
  async put (url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  };

  // Making an HTTP DELETE Request
  async delete (url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const resData = await 'Resource Deleted...';
    return resData;
  };
};
