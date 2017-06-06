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

class ContactPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className="container">
        <div className={s.page_contact}>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className={s.contactinfo}>
                <h3>Let's get in touch</h3>
                <form className="group">
                    <div className={"form-group " + s["form-form"]}>
                      <div className={"input-group-addon " + s["add-form"]}><i className="fa fa-user"></i></div>
                        <input type="text" name="uname" id="uname" placeholder="your name" />
                    </div>
                    <div className={"form-group " + s["form-form"]}>
                      <div className={"input-group-addon " + s["add-form"]}><i className="fa fa-envelope"></i></div>
                      <input type="text" name="uemail" id="uemail" placeholder="Email adress" />
                    </div>
                    <div className={"form-group " + s["form-form"]}>
                      <div className={"input-group-addon " + s["add-form"]}><i className="fa fa-mobile"></i></div>
                      <input type="text" name="uphone" id="uphone" placeholder="Phone Number" />
                    </div>
                    <div className={"form-group " + s["form-form"]}>
                      <div className={"input-group-addon " + s["add-form"]}><i className="fa fa-calendar"></i></div>
                      <input type="date" name="udate" id="udate" placeholder="Date" />
                    </div>
                    <div className={"form-group " + s["form-form"]}>
                        <div className={"input-group-addon " + s["add-form-last"]}><i className="fa fa-pencil"></i></div>
                        <textarea name="umessage" id="umessage" placeholder="your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info">Send</button>
                </form>
              </div>
            </div>
            <div className={"col-md-6 col-sm-12 col-xs-12 " + s["getintouchinfo"]}>
                  <h3>Contact Information</h3>
                  <div className={s.contact_left}>
                    <h4>LONDON UK</h4>
                    <h4>E-mail:</h4>
                  </div>
                  <div className={s.contact_right}>
                    <p>Tel: (+44) 216-4404-000</p>
                    <p>info@imaginarium_box.com</p>
                  </div>
              <h3>Find us on the map!</h3>
            </div>
        </div>
      </Layout>
    );
  }

}

export default ContactPage;
