import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ErrorContainer, ErrorMessage, ButtonErrorBack} from '../Styles/StyledComponents'

const Error = () => {
    const navigate = useNavigate()
  return (
    <ErrorContainer>
        <ErrorMessage>
          <h1>Error! esta pagina no existe</h1>
          <ButtonErrorBack onClick={() => navigate('/home')}>Volver</ButtonErrorBack>
        </ErrorMessage>
    </ErrorContainer>
  )
}

export default Error