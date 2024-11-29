import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(); //crea el contexto

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); //estado para saber si esta logueado
    const [user, setUser] = useState(null); //iniciamos sin usuarios

    useEffect(() => {
        const token = sessionStorage.getItem('access-token');
        const userData = localStorage.getItem("user");
        if (token && userData) {
            try{
                const userObject = JSON.parse(userData);
                setUser(userObject);
                setIsAuthenticated(true);
            } catch(error){
                console.error("Error al decodificar el token",error);
                logout();
            }
        }
    }, []);

    const loginSuccess = (token) => {

        sessionStorage.setItem("access-token", token);
        const decoded = jwtDecode(token);
        localStorage.setItem("user",JSON.stringify(decoded));
        setUser(decoded); // Actualiza la información del usuario
        setIsAuthenticated(true); // Actualiza el estado de autenticación
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        localStorage.removeItem("user");
        setIsAuthenticated(false); //cambia los estados
        setUser(null);
    };

    const register = (newUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginSuccess, logout, register, user }}>
            {children}
        </AuthContext.Provider>
    );
};