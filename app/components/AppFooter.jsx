import React from 'react';
import ButtonSocial from './layout/ButtonSocial'

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer className="text-center footer">
        <div className="footer-above">
          <ButtonSocial href="#" fa="fa fa-facebook fa-fw"></ButtonSocial>
          <ButtonSocial href="#" fa="fa fa-twitter fa-fw"></ButtonSocial>
          <ButtonSocial href="https://github.com/baronparedes/hello-react" fa="fa fa-github fa-fw"></ButtonSocial>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Magenic Masters - React JS 2017
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
