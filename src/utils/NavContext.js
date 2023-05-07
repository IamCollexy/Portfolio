import { createContext } from 'react';

export const NavItemsContext = createContext();


export function NavItemsProvider(props) {
    const navItems = [
      { label: 'About', id: 'about' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'Contact Me', id: 'contact' },
    ];
  
    return (
      <NavItemsContext.Provider value={navItems}>
        {props.children}
      </NavItemsContext.Provider>
    );
  }
  