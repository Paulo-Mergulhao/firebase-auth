import React, { useState, createContext } from 'react';

export const UsuarioAutenticadoContexto = createContext({});

export const UsuarioAutenticadoProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsuarioAutenticadoContexto.Provider value={{ user, setUser }}>
      {children}
    </UsuarioAutenticadoContexto.Provider>
  );
};
