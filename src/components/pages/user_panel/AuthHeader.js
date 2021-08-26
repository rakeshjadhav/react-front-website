export default function authHeader() {
    const logininfo = JSON.parse(localStorage.getItem('userinfo'));
    const accessToken = localStorage.getItem('token');
  
    if (logininfo && accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }