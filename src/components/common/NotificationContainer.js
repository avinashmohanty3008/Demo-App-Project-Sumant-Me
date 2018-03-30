import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Message} from 'semantic-ui-react';
import {removeMessageAction} from '../../actions/messages.actions';
import styles from './NotificationContainer.module.scss';
import PropTypes from 'prop-types';

export class NotificationContainer extends React.Component {

  handleDismiss = () => {
    this.props.removeMessageAction(this.props.message);
  };

  showNextMessage = (message) => {
    if (message.toast && message.toast.toastLike) {
      this.timeout = setTimeout(() => {
        this.handleDismiss();
      }, message.toast.timeout);
    }

    return (
      <div className={styles.notificationMessage}>
        <Message className={message.cssClass} onDismiss={this.handleDismiss}>{message.displayText}</Message>
      </div>);
  };

  render() {
    let message = null;
    if (this.props.message) {
      message = this.showNextMessage(this.props.message);
    }
    return (message);
  }
}

NotificationContainer.propTypes = {
  message: PropTypes.object,
  removeMessageAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  let message = null;
  if (state.messages.messages.length > 0) {
    message = state.messages.messages[0];
  }
  return {message};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({removeMessageAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
