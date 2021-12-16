import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormConatainer'
import Checkout from '../Checkout'
import { savePaymentMethod } from '../../actions/cartActions'

const Payment = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <Checkout step1 step2 step3 />
      <h1 style={{ color: 'Black' }}>Payment Method</h1>
      <Form
        onSubmit={submitHandler}
        style={{
          color: 'black',
          fontSize: '24px',
          fontWeight: 'bold',
          background: 'Bisque',
        }}
      >
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>
            <Form.Check
              type='radio'
              label='PayPal'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='mb-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='Visa'
              id='Visa'
              name='paymentMethod'
              value='Visa'
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='mb-3'
            ></Form.Check>

            <Form.Check
              type='radio'
              label='MasterCard'
              id='MasterCard'
              name='paymentMethod'
              value='MasterCard'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Payment
