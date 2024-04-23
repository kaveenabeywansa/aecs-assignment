const AuthGuard = function () {
    this.isAuthenticated = () => {
        return localStorage.getItem('loggedUsername');
    }
};

export default new AuthGuard();
