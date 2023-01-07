import React from "react";
import { withTranslation } from "react-i18next";
import "./translations/i18n";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;

    return <div className="Login"></div>;
  }
}

export default withTranslation()(Login);
