class AuthService {
    static _baseUrl = "http://ec2-3-142-149-239.us-east-2.compute.amazonaws.com:8080"

    static authenticate(user) {
        return axios
            .get(AuthService._baseUrl + "/sign-in")
            .then((response) => {
                return response.data
            })
    }
}