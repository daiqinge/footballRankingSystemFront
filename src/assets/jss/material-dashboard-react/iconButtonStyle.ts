
// tslint:disable:max-line-length

import { StyleRules } from '@material-ui/core/styles';
import {
  infoColor,
  blueColor,
  successColor,
  warningColor,
} from 'assets/jss/material-dashboard-react';

const iconButtonStyle: StyleRules = {
  button: {
    height: '40px',
    minWidth: '40px',
    width: '40px',
    borderRadius: '50%',
    fontSize: '24px',
    margin: 'auto',
    padding: '0',
    boxShadow:
      '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    overflow: 'hidden',
    position: 'relative',
    lineHeight: 'normal',
    border: 'none',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
  },
  blue: {
    backgroundColor: blueColor,
    boxShadow:
      '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover': {
      backgroundColor: blueColor,
      boxShadow:
        '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    },
  },
  info: {
    backgroundColor: infoColor,
    boxShadow:
      '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
    '&:hover': {
      backgroundColor: infoColor,
      boxShadow:
        '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
    },
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
    '&:hover': {
      backgroundColor: successColor,
      boxShadow:
        '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
    },
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
    '&:hover': {
      backgroundColor: warningColor,
      boxShadow:
        '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
    },
  },
  simple: {
    color: '#FFFFFF',
    background: 'transparent',
    boxShadow: 'none',
  },
};

export default iconButtonStyle;
