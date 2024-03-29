import { API_HOST, TOKEN } from "../Utils/constants";
import { result } from "lodash";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

export function signUpApi(user) {
    const url = `${API_HOST}/registro`;
    const userTemp = {
        ...user,
        email: user.email.tolowerCase(),
        // fechaNacimiento: new Date()
    };

    delete userTemp.repeatpassword;

    const params = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },

        body: JSON.stringify(userTemp),
    };
    return fetch(url, params)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            return { code: 404, message: "Email no disponible" };
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
}

export function signInApi(user) {
    const url = `${API_HOST}/login`;

    const data = {
        ...user,
        email: user.email.tolowerCase(),
    };

    const params = {
        method: "POST",
        headers: {
            "Content-type": "aplication/json",
        },
        body: JSON.stringify(data),
    };
    return fetch(url, params)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            return { message: "Usuario y contraseña incorrectas" };
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
}

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token);
}

export function getTokenApi() {
    return localStorage.getItem(TOKEN);
}

export function logoutApi() {
    localStorage.removeItem(TOKEN);
}

export function isUserLogedApi() {
    const token = getTokenApi();

    if (!token) {
        logoutApi();
        return null;
    }
    if (isExpired(token)) {
        logoutApi();
    }
    return jwtDecode(token);
}

function isExpired(token) {
    const { exp } = jwtDecode(token);
    const expire = exp * 1000;
    const timeout = expire - Date.now();

    if (timeout < 0) {
        return true;
    }
    return false;
}