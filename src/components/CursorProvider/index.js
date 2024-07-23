import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [color, setColor] = useState('defaultColor');

    return (
        <CursorContext.Provider value={{ color, setColor }}>
            {children}
        </CursorContext.Provider>
    );
};
