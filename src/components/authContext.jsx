import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(); //crea el contexto

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); //estado para saber si esta logueado
    const [user, setUser] = useState(null); //iniciamos sin usuarios

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')); //transforma el string de usuario que esta almacenado en el local storage a un objeto de js
        if (loggedUser) { //si existe
            setIsAuthenticated(true);
            setUser(loggedUser);
        }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || []; //si esta vacio devuelve un arreglo vacio
        const user = users.find(user => user.mail === email && user.pass === password); //busca dentro de los usuarios almacenados que coincida el mail y el pass
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            setIsAuthenticated(true);
            setUser(user); //ahora va aser nuestro usuario
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setIsAuthenticated(false); //cambia los estados
        setUser(null);
    };

    const register = (newUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const updateUser = (updatedUser) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUserList = users.map(user => user.mail === updatedUser.mail ? updatedUser : user);
        localStorage.setItem('users', JSON.stringify(newUserList));
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    const deleteUser = (userEmail) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUserList = users.filter(user => user.email !== userEmail);
        localStorage.setItem('users', JSON.stringify(newUserList));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, user, updateUser, deleteUser }}>
            {children}
        </AuthContext.Provider>
    );
};