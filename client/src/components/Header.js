import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Acceso con Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
            <a href="#">Inicio</a>
          </li>,
          <li key="3">
            <a href="/surveys/onlineSales">Ventas en linea</a>
          </li>,
          <li key="4">
            <a href="#">Historia</a>
          </li>,
          <li key="5">
            <a href="#">Contacto</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Salir</a>
          </li>,
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brandlogo">
            Farmacia Meridional
          </Link>
          <ul id="nav-mobile" className="right	hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
