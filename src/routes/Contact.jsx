import React from 'react'
import { TextField, Button} from '@mui/material'
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup'
import { BodyPage, FormContainer, FormDivStyle} from '../Styles/StyledComponents'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer';

const Contact = () => {

    const initialValues = {
        email:"",
        completeName: ""
    }

return (
    <BodyPage>
    <HeaderNav/>
        <FormContainer>
            <Formik initialValues={initialValues} 
                onSubmit={(values, resetForm) => {
                    resetForm.resetForm();
                    alert(`Gracias ${values.completeName}, te contactaremos cuando antes vía mail`)
                }}
                validationSchema={Yup.object({
                    email: Yup.string().required("Por favor ingrese su correo").email("Correo invalido"),
                    completeName: Yup.string().required('Por favor ingrese su nombre completo').min(5, 'El nombre debe contener minimo 5 cracateres')
                })}
            >
                {({errors, isValid, touched, dirty}) => (

                    <FormDivStyle>
                        <Form style={{display:'flex', flexDirection:'column', gap:'10px', maxWidth:'222.4px'}}>
                            <Field
                                name='completeName'
                                type='name'
                                as={TextField}
                                size='small'
                                label='Nombre completo'
                                placeholder="Ingrese su nombre completo"
                                error={Boolean(errors.completeName) && Boolean(touched.completeName)}
                                helperText={Boolean(touched.completeName) && errors.completeName}
                            />
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
                            <Button type='submit' size='small' variant='contained' disabled={!dirty || !isValid}>Enviar</Button>
                        </Form>
                    </FormDivStyle>

                )}
            </Formik>
        </FormContainer>
    <Footer/>
    </BodyPage>
)
}

export default Contact