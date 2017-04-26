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
      <Layout className="container col-md-12 col-sm-12 col-xs-12">
        <div className="page_contact">
          <div className="contactinfo col-md-6 col-sm-6 col-xs-12"><h3>Let's get in touch</h3>
            <form className="group">
                <div className="form-group">
                  <div className="input-group-addon"><i className="fa fa-user"></i></div>
                    <input type="text" name="uname" id="uname" placeholder="your name" />
                </div>
                <div className="form-group ">
                  <div className="input-group-addon"><i className="fa fa-envelope"></i></div>
                  <input type="text" name="uemail" id="uemail" placeholder="Email adress" />
                </div>
                <div className="form-group ">
                    <div className="input-group-addon last"><i className="fa fa-pencil"></i></div>
                    <textarea name="umessage" id="umessage" placeholder="your message"></textarea>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
          </div>
            <div className="getintouchinfo col-md-6 col-sm-6 col-xs-12">
                  <h3>Contact Information</h3>
                  <div className="contact_left">
                    <h4>LONDON UK</h4>
                    <h4>E-mail:</h4>
                  </div>
                  <div className="contact_right">
                    <p>Tel: (+44) 216-4404-000</p>
                    <p>info@imaginarium_box.com</p>
                  </div>
            </div>
                <h3>Find us on the map!</h3>
        </div>
      </Layout>
    );
  }

}

export default ContactPage;
