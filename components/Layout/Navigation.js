/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import s from './Navigation.css';

class Navigation extends React.Component {
   //
   //componentDidMount() {
   //  window.componentHandler.upgradeElement(this.root);
   //}
   //
   //componentWillUnmount() {
   //  window.componentHandler.downgradeElements(this.root);
   //}

  render() {
    return (
      <div className={s.menu}>
        <div className="mobile-menu">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header" id="toggle">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className={"nav navbar-nav " + s["myNavbar"]}>
                  <li><a href="/" className="active">Home</a></li>
                  <li role="presentation"><a href="/about" className="active">About</a></li>
                  <li role="presentation"><a href="/portfolio" className="active">Wedding Dresses</a></li>
                  <li role="presentation"><a href="/haute_couture" className="active">Haute Couture</a></li>
                  <li role="presentation"><a href="/contact" className="active">Contact</a></li>
                  <li role="presentation"><a href="/blog" className="active">Blog</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
       </div>
    );
  }

}

export default Navigation;
