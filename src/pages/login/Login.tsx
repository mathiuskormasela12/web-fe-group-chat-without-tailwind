// ========== Login
// import all packages
import React, { Fragment } from 'react'

// import all components
import {
  Title,
  Hero,
  Helmet,
  Container,
  Header,
  Row,
  Col,
  Input,
  Label,
  Control,
  Field,
  Form,
  Button,
  TextLink,
  GoogleButton,
  Paragraph,
  Image
} from '../../components'
import { useLogin } from '../../hooks/login-hooks/useLogin'
import { Controller } from 'react-hook-form'

// import assets
import loginRegisterImg from '../../assets/images/login-register-img.svg'

export const Login: React.FC = () => {
  const {
    handleSubmit,
    onSubmit,
    control,
    isEmailError,
    isPasswordError
  } = useLogin()

  return (
    <Fragment>
      <Helmet title='Group Chat | Login' />
     <Hero>
      <Container>
        <Row>
          <Col>
            <Header>
              <Title>Login</Title>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Control>
                <Label htmlFor="email">Email</Label>
                <Field>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, onChange } }) => (
                      <Input
                        type="email"
                        id="email"
                        placeholder="Type your email here..."
                        autoComplete="off"
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={isEmailError}
                      />
                    )}
                    name="email"
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="password">Password</Label>
                <Field>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, onChange } }) => (
                      <Input
                        type="password"
                        id="password"
                        placeholder="Type your password here..."
                        autoComplete="off"
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={isPasswordError}
                      />
                    )}
                    name="password"
                  />
                </Field>
              </Control>
              <Control>
                <Paragraph>
                  {"Don't you have an account ? "}
                  <TextLink to={'/auth/create-account'}>
                    Register here
                  </TextLink>
                </Paragraph>
              </Control>
              <Control>
                <Button
                  type="submit"
                  variant="primary"
                >
                  Login
                </Button>
              </Control>
              <Control>
                <GoogleButton type="button">
                  Login with Google
                </GoogleButton>
              </Control>
            </Form>
          </Col>
          <Col>
            {/* Image Here */}
            <Image src={loginRegisterImg} alt="Login Image" />
          </Col>
        </Row>
      </Container>
     </Hero>
    </Fragment>
  )
}
