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
import s from './Footer.css';


function Footer() {
  return (
    <div className={s.footer}>
      <div className="container-fluid">
        <div className={s.footer_social}>
          <a href="#"><i className="fa fa-envelope-o"></i></a>
          <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-8 text-left">
          <div className={s.footer_right_copyright}>© 2017 ImaginariumBox ® London </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
