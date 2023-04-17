import React, {useState} from 'react';
import { THEME_MAIN_COLOR, THEME_DARK_COLOR } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'

export default function ThemeColorButton() {
  const [theme, setTheme] = useState();


  const handleClick = () => {
    const root = document.documentElement;
    const docStyle = getComputedStyle(root);
    const currentMainColor = docStyle.getPropertyValue('--main-color').trim();

    if (currentMainColor === THEME_MAIN_COLOR) {
      document.documentElement.style.setProperty('--main-color', THEME_DARK_COLOR) 
      document.documentElement.style.setProperty('--main-text-color', THEME_MAIN_COLOR) 
      setTheme(THEME_DARK_COLOR)
    } else {
      document.documentElement.style.setProperty('--main-color', THEME_MAIN_COLOR)
      document.documentElement.style.setProperty('--main-text-color', THEME_DARK_COLOR) 
      setTheme(THEME_MAIN_COLOR)
    }
  }

  return (
    <FontAwesomeIcon cursor={'pointer'} onClick={handleClick} icon={theme === THEME_DARK_COLOR ? faMoonRegular : faMoonSolid} />
  );
}

