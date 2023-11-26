import * as React from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';
import OrderSummary from './OrderSummary';
import { CreditCardDetails } from '../../types/creditCard';
import { sendOrder } from '../../api/checkout';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';
import { Address, OrderEnum, OrderInterface, OrderStatusEnum } from '../../types/order';

interface ApiResponse {
  message: string;
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
};


const CheckoutPage = () => {
  const { totalAmount } = useParams();

  const [activeStep, setActiveStep] = React.useState(0);

  const [isChecking, setIsChecking] = React.useState(false);
  const [error, setError] = React.useState('');

  const [deliveryMethod, setDeliveryMethod] = React.useState<string>('pickup');

  const [res, setRes] = React.useState<string>('')

  // ShippingDetails.
  const [shippingDetails, setShippingDetails] = React.useState<Address>({
    country: '',
    city: '',
    street: '',
    cellPhone: '',
    zipCode: '',
    orderType: OrderEnum.Regular,
  });

  // CreditCardDetails.
  const [creditCardDetails, setcreditCardDetails] = React.useState<CreditCardDetails>({
    cardholderId: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard: false,
  });

  // Order summary.
  const order: OrderInterface = {
    cartItems: [],
    orderTime: new Date(),
    userId: '12345',
    userName: 'John Doe',
    userEmail: 'www.@gmail.com',
    status: OrderStatusEnum.Waiting,
    totalPrice: (totalAmount && parseInt(totalAmount)) || 0,
    shippingDetails: {
      address: shippingDetails,
      orderType: deliveryMethod === 'pickup' ? OrderEnum.SelfCollection : OrderEnum.Regular,
      contactNumber: shippingDetails.cellPhone || ''
    }
  };



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePlaceOrder = async () => {
    console.log("creditCardDetails :", creditCardDetails);
    console.log("shippingDetails :", shippingDetails);

    // Send order.
    setIsChecking(true);
    try {
      const response = await sendOrder(order);

      console.log('Response from server:', response);
      setIsChecking(false);

      if (typeof response === 'object' && 'message' in response) {
        setRes(response.message as string)
        handleNext()
      } else {
        setError('Unknown error occurred !!!');
      }
    } catch (error) {

      setIsChecking(false);
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const errorMessage = (error as ApiResponse).message || 'Unknown error occurred';
        setError(errorMessage);
        console.log(error.message);
      } else {
        setError('Unknown error occurred !!!');
      }
    }
  };

  const steps = [
    { component: <ShippingDetails deliveryMethod={{ data: deliveryMethod, setData: setDeliveryMethod }} shippingDetails={{ data: shippingDetails, setData: setShippingDetails }} onNext={handleNext} />, label: 'Shipping address' },
    { component: <PaymentDetails totalAmount={totalAmount || '0'} creditCard={{ data: creditCardDetails, setData: setcreditCardDetails }} onNext={handleNext} onBack={handleBack} />, label: 'Payment method' },
    { component: <OrderSummary totalAmount={totalAmount || '0'} onBack={handleBack} onPlaceOrder={handlePlaceOrder} />, label: 'Summary of order details' },
  ];


  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 20 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Just before the product is with you
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                {res}!
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {steps[activeStep].component}

              {isChecking && (
                <Typography variant="body1">
                  The order is placed...
                </Typography>
              )}

              {error && (
                <Box>
                  <ErrorIcon sx={{ color: 'red', fontSize: 40 }} />
                  <Typography variant="body1" color="error">
                    {error}
                  </Typography>
                </Box>
              )}
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}


export default CheckoutPage;

