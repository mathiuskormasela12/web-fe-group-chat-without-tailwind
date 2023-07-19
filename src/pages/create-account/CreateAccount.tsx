// ========== Create Account
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
import { useCreateAccount } from '../../hooks/create-account-hooks/useCreateAccount'
import { Controller } from 'react-hook-form'

// import assets
import registerImg from '../../assets/images/register-img.svg'

export const CreateAccount: React.FC = () => {
  const {
    handleSubmit,
    onSubmit,
    control,
    isNameError,
    isEmailError,
    isPasswordError,
    isRepeatPassword
  } = useCreateAccount()

  return (
    <Fragment>
      <Helmet title='Group Chat | Create Account' />
     <Hero>
      <Container>
        <Row>
          <Col>
            <Header>
              <Title>Create an Account</Title>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Control>
                <Label htmlFor="name">Your Name</Label>
                <Field>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, onChange } }) => (
                      <Input
                        type="text"
                        id="name"
                        placeholder="Type your name here..."
                        autoComplete="off"
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={isNameError}
                      />
                    )}
                    name="name"
                  />
                </Field>
              </Control>
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
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Field>
                  <Controller
                    control={control}
                    render={({ field: { onBlur, onChange } }) => (
                      <Input
                        type="password"
                        id="repeatPassword"
                        placeholder="Type your repeat password here..."
                        autoComplete="off"
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={isRepeatPassword}
                      />
                    )}
                    name="repeatPassword"
                  />
                </Field>
              </Control>
              <Control>
                <Paragraph>
                  {'Do you have an account ? '}
                  <TextLink to={'/'}>
                    Login here
                  </TextLink>
                </Paragraph>
              </Control>
              <Control>
                <Button
                  type="submit"
                  variant="primary"
                >
                  Create an Account
                </Button>
              </Control>
              <Control>
                <GoogleButton type="button">
                  Register with Google
                </GoogleButton>
              </Control>
            </Form>
          </Col>
          <Col>
            {/* Image Here */}
            <Image src={registerImg} alt="Register Image" />
          </Col>
        </Row>
      </Container>
     </Hero>
    </Fragment>
  )
}
