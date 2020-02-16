import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    background: '#336cb1',
    color: 'white',
    padding: '0.75rem 1rem',
    minWidth: '3rem',
    // textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    border: '2px solid transparent',
    borderRadius: '2em',
    textAlign: 'center',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)',
    outline: 'none'
  },
  clickableBtn: {
    '&:hover': {
      background: '#3065a6',
      cursor: 'pointer'
    },
    '&:active': {
      background: '#2c5c96'
    }
  },
  roundedBtn: {
    borderRadius: '5rem',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

function Button(props) {
  const { children, onClick, rounded } = props;
  const { btn, container, roundedBtn, clickableBtn } = useStyles();

  return (
    <button className={btn + (rounded ? ' ' + roundedBtn : '') + (onClick ? ' ' + clickableBtn : '')} onClick={onClick}>
      <div className={container}>
        {children}
      </div>
    </button>
  );
}

export default Button;