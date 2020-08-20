import React, { useState, useEffect } from 'react';
import netflixLogo from '../img/Asset1.png';
import netflixAvatar from '../img/Asset3.png';

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsScrolling(true) : setIsScrolling(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  };

  return (
    <nav className={`Navbar ${isScrolling && 'Navbar__black'}`}>
      <img className='Navbar__logo' src={netflixLogo} alt='DogaTime' />
      <img
        className='Navbar__avatar'
        src={netflixAvatar}
        alt='DogaLogo'
      />
    </nav>
  );
};

export default Navbar;
