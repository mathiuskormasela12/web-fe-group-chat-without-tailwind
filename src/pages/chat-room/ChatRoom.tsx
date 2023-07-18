// ========== Chat Room
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
  GoogleButton
} from '../../components'

export const ChatRoom: React.FC = () => {
  return (
    <Fragment>
      <Helmet title='Group Chat | Chat Room' />
     <Hero>
      <Container>
        <Row>
          <Col>
            <Header>
              <Title>Create an Account</Title>
            </Header>
            <Form>
              <Control>
                <Label htmlFor="name">Your Name</Label>
                <Field>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Type your name here..."
                    autoComplete="off"
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="email">Email</Label>
                <Field>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Type your email here..."
                    autoComplete="off"
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="password">Password</Label>
                <Field>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Type your password here..."
                    autoComplete="off"
                  />
                </Field>
              </Control>
              <Control>
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Field>
                  <Input
                    type="password"
                    id="repeatPassword"
                    placeholder="Type your repeat password here..."
                    autoComplete="off"
                  />
                </Field>
              </Control>
              <Control>
                <TextLink to="/">
                Do you have an account already ?
                </TextLink>
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
                <GoogleButton type="submit">
                  Register with Google
                </GoogleButton>
              </Control>
            </Form>
          </Col>
          <Col>
            {/* Image Here */}
            <p>wwlw</p>
          </Col>
        </Row>
      </Container>
     </Hero>
    </Fragment>
  )
}
