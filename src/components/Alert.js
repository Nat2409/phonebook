import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Alert.css';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.type = 'error';
defaults.delay = '3000';

defaultModules.set(PNotifyMobile, {});

const Alert = () => {
  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={250}
    classNames="Alert"
    unmountOnExit
  >
  alert({ text: `${contact.name} is already in the contacts list.` })
  </CSSTransition>);
};

export default Alert;
