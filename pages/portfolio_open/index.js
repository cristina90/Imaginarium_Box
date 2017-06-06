









import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class Portfolio_openPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className="container col-md-12 col-sm-12 col-xs-12">
        <div class="row relative">
          <div className={"col-xs-12 col-md-2 hidden-xs " + s["detail_product"]}>
            <div className ={"col-xs-4 col-md-12 col-centered " + s["product_image"]}>
              <img src="/images/img2.jpg" />
            </div>
            <div className ={"col-xs-4 col-md-12 col-centered " + s["product_image"]}>
              <img src="/images/img2.jpg" />
            </div>
            <div className ={"col-xs-4 col-md-12 col-centered " + s["product_image"]}>
              <img src="/images/img2.jpg" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
              <div className={s.main_image}>
                <div className="product-image-main">
                <div className="visible-lg visible-md hidden-xs">
                      <img src="/images/img2.jpg" />
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className ="col-xs-12 col-md-4 product-essential-container">
          <div className={s.collection_details}>
            <p>LykeAnna 2018</p>
            <h3>Dress Name</h3>
            <p>$2000</p>
            <a href="#"><button type="submit" className="btn btn-info">REQUEST AN APPOINTMENT</button></a></div>
            <div className={s.product_description_content}>
              <h4>Product Details</h4>
              <p>
                The most modern princesses wear dresses like this one, with a two-piece effect that combines a
                skirt with lots of volume created in layers of tulle, with a spectacular bodice that blends into
                the skin, creating an illusion effect, thanks to crystal tulle and floral motif appliqués that
                travel across the neckline, back and long sleeves.
              </p>
            </div>
            <div className={s.product_share_social}>
                <a href="#"><i className="fa fa-envelope-o"></i></a>
                <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
      </Layout>
    );
  }

}

export default Portfolio_openPage;
