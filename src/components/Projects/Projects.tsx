import React from "react"
import "./Projects.scss"
import Alert from "react-bootstrap/cjs/Alert"

function generateAlerts() {
  return([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  )));
}

export default function Projects() {
  return <>
    {generateAlerts()}
    <Alert variant='danger'>
      This is an alert—check it out!
    </Alert>
  </>
}
