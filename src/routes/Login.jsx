import React, {useContext} from 'react'
import { TextField, Button } from '@mui/material'
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { FormContainer, FormDivStyle, LoginBody } from '../Styles/StyledComponents'
import { LoginContext } from '../context/Context';

const VALID_PASSWORD_REGEX  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const Login = () => {

    const navigate = useNavigate()
    const {dispatch} = useContext(LoginContext)

    const initialValues = {
        email:"",
        password: ""
    }



    return (
        <LoginBody>
            <FormContainer>
                <Formik initialValues={initialValues}
                    onSubmit={(values, resetForm) => {
                        resetForm.resetForm()
                        dispatch({type: "LOGIN"})
                        navigate('/home')
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("Por favor ingrese su correo").email("Correo invalido"),
                        password: Yup.string().min(8, 'La conntraseña debe tener al menos 8 caracteres').required('Por favor ingrese una contraseña').matches(VALID_PASSWORD_REGEX,'La contraseña debe tener al menos 8 caracteres, una letra y un numero')
                    })}
                >
                    {({errors, isValid, touched, dirty}) => (
                        <FormDivStyle>
                            <Form style={{display:'flex', flexDirection:'column', gap:'10px', maxWidth:'222.4px'}}>
                                <Field
                                    name='email'
                                    type='email'
                                    as={TextField}
                                    size='small'
                                    label='E-mail'
                                    placeholder="Ingrese su email"
                                    error={Boolean(errors.email) && Boolean(touched.email)}
                                    helperText={Boolean(touched.email) && errors.email}
                                />
                                <Field
                                    name='password'
                                    type='password'
                                    as={TextField}
                                    size='small'
                                    label='Contraseña'
                                    placeholder="Ingrese su contraseña"
                                    error={Boolean(errors.password) && Boolean(touched.password)}
                                    helperText={Boolean(touched.password) && errors.password}
                                />
                                <Button type='submit' size='small' variant='contained' disabled={!dirty || !isValid}>Ingresar</Button>
                            </Form>
                        </FormDivStyle>
                    )}
                </Formik>
            </FormContainer>
        </LoginBody>
    )}
    
export default Login
