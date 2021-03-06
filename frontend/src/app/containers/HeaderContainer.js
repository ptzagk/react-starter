import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectIsLoggedIn, selectUserEmail, logout } from '../../features/auth/ducks';
import { Header, HeaderMenu } from '../../app/components';

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  email: selectUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout }, dispatch),
});

const HeaderContainer = ({ isLoggedIn, email, actions }) =>
  <Header>
    <HeaderMenu isLoggedIn={isLoggedIn} email={email} logout={actions.logout} />
  </Header>;

HeaderContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
