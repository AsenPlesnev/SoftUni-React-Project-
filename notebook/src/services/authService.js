const AuthService = {
    registerUser: async (email, password, confirmPassword, code) => {
        try {
            const promise = await fetch('http://localhost:9999/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    confirmPassword,
                    code
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const authToken = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${authToken}`;

            const response = await promise.json();

            if (response.email && authToken) {
                return true;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    },

    loginUser: async (email, password) => {
        try {
            const promise = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const authToken = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${authToken}`;

            const response = await promise.json();

            console.log(response);

            if (response.email && authToken) {
                return true;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    }
};

export default AuthService;