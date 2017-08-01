export class AuthService {
  loggingIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() =>{
          resolve(this.loggingIn);
        },800);
      }
    );
    return promise;
  }
  logIn() {
    this.loggingIn = true;
  }

  logOut() {
    this.loggingIn = false;
  }

}
