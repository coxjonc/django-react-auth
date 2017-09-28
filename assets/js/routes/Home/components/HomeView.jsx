import React from 'react'
import reactDjangoLogo from '../../../public/react-django.png'
import Style from '../../../css/style.css'

export default () => (
  <div>
    <h1>Welcome to Django-React Start!</h1>
    <div className={Style.reactLogo}>
      <img src={reactDjangoLogo} className="img-responsive" alt="react-django" />
    </div>
  </div>
)
