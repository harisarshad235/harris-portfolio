import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    <ButtonFront type="button" alt={props.alt} onClick={props.onClick} disabled={props.disabled} aria-label={props['aria-label']}>
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button
