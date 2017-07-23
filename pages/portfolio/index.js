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
import { title, html } from './index.md';

class PortfolioPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
    console.log(this);
  }

  render() {
    return (
      <Layout className="container col-md-12 col-sm-12 col-xs-12">
        <div className={s.work}>
          {this.props.articles.map(article =>
            <div className={"col-md-4 col-sm-6 col-xs-12 " + s["item"]}>
              <a href={"portfolio/"+article.title.replace(new RegExp(" ", 'g'), "_")}>
                <div className={s.picture}>
                  <img src={article.product_image} />
                </div>
                  <div className={s.project_name}>
                    <h3>{article.short_description}</h3>
                    <h6>{article.title}</h6>
                  </div>
              </a>
            </div>
          )}
        </div>
      </Layout>
    );
  }

}

export default PortfolioPage;
