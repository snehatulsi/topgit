/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

const Header = () => (
  <header className={s.header}>
    <div className={s.container}>
      <Link className={s.title} to="/">
        <img src="/logo.png" alt="Logo" />
        <span>Top <strong>GIT</strong></span>
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;
