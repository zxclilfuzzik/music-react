import React from 'react';
import '../css/header.css';

const Header = () => {
    
    return(
      <header className = 'header-wrapper'>
            <div className = 'header-list'>
                <li><a>Проверка 1</a></li>
                <li><a>Проверка 2</a></li>
                <li><a>Проверка 3</a></li>
                <li><a>Проверка 4</a></li>
                <li><a>Проверка 5</a></li>
            </div>
        </header>
    );
}

export default Header;
