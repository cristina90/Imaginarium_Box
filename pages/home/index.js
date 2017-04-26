/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import main_images from './slides.json';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className="container col-md-12 col-sm-12 col-xs-12">
        <div className={s.split_page}>
          <div className="mywork col-md-6 col-sm-6 col-xs-12">
            <img src="images/img1.jpg" />
            <div className="more">
              <a href="portfolio.html">
                <p>See Collections</p>
              </a>
            </div>
          </div>

          <div className="getintouch col-md-6 col-sm-6 col-xs-12">
            <img src="images/img1.jpg" />
            <div className="more">
              <a href="contact.html">
                <p>Get in Touch</p>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
