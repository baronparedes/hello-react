import React from 'react';

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div className="text-center">
          <a href="#"><i className="footer-icon fa fa-facebook-f fa-2x"></i></a>
          <a href="#"><i className="footer-icon fa fa-twitter fa-2x"></i></a>
          <a href="https://github.com/baronparedes/hello-react" target="_blank"><i className="footer-icon fa fa-github fa-2x"></i></a>
        </div>
        <div>Copyright © Magenic Masters - React JS</div>
      </footer>

    );
  }
}
