import { Box, Card, CardContent, Stack } from '@mui/material';
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

// const PayBtnStyles = styled(PaystackButton)({
//   root: {
//     backgroundColor: 'green',
//     color: '#ffff',
//     '&:hover': {
//       backgroundColor: 'yellow-green',
//     },
//   },
// });
const PaystackPayment = (props) => {
  const apikey = process.env.PAYMENT_APIKEY;

  const [paymentInfo, setPaymentInfo] = useState({
    reference: new Date().getTime().toString(),
    email: '',
    amount: '',
    key: apikey,
    name: '',
  });

  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const {
    //   email,
    //   amount,
    //   key,
    //   name,
    // } = paymentInfo;
    // const options = {
    //   email,
    //   amount: amount * 100, // convert amount to kobo (Paystack's currency unit)
    //   name,
    // };
    const buttonRef = e.target.firstChild;
    buttonRef.props.disabled = true; // disable button to prevent multiple payments
    setPaymentInfo({ ...paymentInfo, amount: 0 }); // clear payment information after payment
    buttonRef.props.callback = handleSuccess; // handle payment on success
    buttonRef.props.close = () => {
      // enable button and reset payment information on close
      buttonRef.props.disabled = false;
      setPaymentInfo({
        ...paymentInfo,
        amount: props.onDemand.price,
      });
    };
    buttonRef.props.embed();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: { xs: '100%', md: '50%' },
          alignSelf: 'center',
        }}
      >
        <CardContent>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            onSubmit={(e) => handleSubmit(e, props)}
          >
            <Stack
              spacing={4}
              sx={{ alignSelf: 'center' }}
              width={'60%'}
            >
              <input
                type="hidden"
                name="key"
                value={paymentInfo.key}
              />
              <input
                type="email"
                name="email"
                value={paymentInfo.email}
                // onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="number"
                name="amount"
                value={paymentInfo.amount}
                onChange={handleChange}
                placeholder="Amount"
              />
              <input
                type="text"
                name="name"
                value={paymentInfo.name}
                onChange={handleChange}
                placeholder="Name"
              />

              <PaystackButton
                text="Pay to Watch"
                className="paystack-button"
                reference={new Date().getTime().toString()}
                email={paymentInfo.email}
                amount={paymentInfo.amount * 100} // convert to kobo
                metadata={paymentInfo.name}
                publicKey={paymentInfo.key}
                channels={['card']}
                onSuccess={handleSuccess}
                onClose={() =>
                  setPaymentInfo({
                    ...paymentInfo,
                    amount: props.onDemand.price,
                  })
                }
                disabled={
                  !paymentInfo.email ||
                  !paymentInfo.amount ||
                  !paymentInfo.name
                }
              />
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaystackPayment;
