// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { Box, Button, Grid } from '@mui/material';
// import ErrorIcon from '@mui/icons-material/Error';
// import { ShippingDetailsType } from '../../types/sippingDetails';

// type Props = {
//     deliveryMethod: { data: string, setData: Function};
//     shippingDetails: { data: ShippingDetailsType, setData: Function };
//     onNext: Function;
// }

// const ShippingDetails = (props: Props) => {
//     // deliveryMethod.
//     const deliveryMethod = props.deliveryMethod.data;
//     const setDeliveryMethod = props.deliveryMethod.setData;

//     // CreditCardDetails.
//     const shippingDetails: ShippingDetailsType = props.shippingDetails.data;
//     const setShippingDetails: Function = props.shippingDetails.setData;



//     const [errors, setErrors] = useState<Partial<ShippingDetailsType>>({});

//     const [error, setError] = React.useState('');

//     const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDeliveryMethod(event.target.value);
//     };




//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setError('');

//         const { name, value } = event.target;


//         setShippingDetails({
//             ...shippingDetails,
//             [name]: value,
//         });

//         const newErrors = { ...errors };
//         switch (name) {
//             case 'country':
//                 newErrors.country = value.trim() === '' ? 'Please enter your country' : '';
//                 break;
//             case 'city':
//                 newErrors.city = value.trim() === '' ? 'Please enter your city' : '';
//                 break;
//             case 'street':
//                 newErrors.street = value.trim() === '' ? 'Please enter your street' : '';
//                 break;
//             case 'celPhone':
//                 newErrors.celPhone = value.trim() === '' ? 'Please enter your  cel phone number' : '';
//                 break;
//             case 'zipCode':
//                 newErrors.zipCode = value.trim() === '' ? 'Please enter your postal code' : '';
//                 break;
//             default:
//                 break;
//         }
//         setErrors(newErrors);
//     };

//     const handleNextClick = async () => {
//         if (deliveryMethod === 'delivery') {
//         const { country, city, street, celPhone, zipCode } = shippingDetails;

//         const formErrors: Partial<ShippingDetailsType> = {};
//         if (country.trim() === '') {
//             formErrors.country = 'Please enter your country';
//         }
//         if (city.trim() === '') {
//             formErrors.city = 'Please enter your city';
//         }
//         if (street.trim() === '') {
//             formErrors.street = 'Please enter your postal code';
//         }
//         if (celPhone.trim() === '') {
//             formErrors.celPhone = 'Please enter your  cel phone number';
//         }
//         if (zipCode.trim() === '') {
//             formErrors.zipCode = 'Please enter your street';
//         }

//         setErrors(formErrors);

//         const isValid = Object.keys(formErrors).length === 0;

//         if (isValid) {
//             setError('');
//             props.onNext();

//         } else {
//             setError('Please fill in all required fields !!!');
//         }
//     } else{
//         props.onNext();
//     }

//     };


//     return (
//         <React.Fragment>
//             <Typography component="h1" variant="h6" align="center">
//                 Shipping Options
//             </Typography>

//             <hr style={{ width: '90%', color: 'gray', marginBottom: '40px' }} />

//             <FormControl component="fieldset">
//                 <FormLabel component="legend">Choose delivery method:</FormLabel>
//                 <RadioGroup
//                     aria-label="deliveryMethod"
//                     name="deliveryMethod"
//                     value={deliveryMethod}
//                     onChange={handleDeliveryMethodChange}
//                 >
//                     <FormControlLabel value="pickup" control={<Radio />} label="Self Pickup" />
//                     <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
//                 </RadioGroup>

//                 {deliveryMethod === 'delivery' && (
//                     <Grid container spacing={3}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="country"
//                                 name="country"
//                                 label="Country"
//                                 fullWidth
//                                 autoComplete="shipping country"
//                                 variant="standard"
//                                 value={shippingDetails.country}
//                                 onChange={handleInputChange}
//                                 error={!!errors.country}
//                                 helperText={errors.country}
//                             />
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="city"
//                                 name="city"
//                                 label="City"
//                                 fullWidth
//                                 autoComplete="shipping street-city"
//                                 variant="standard"
//                                 value={shippingDetails.city}
//                                 onChange={handleInputChange}
//                                 error={!!errors.city}
//                                 helperText={errors.city}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 required
//                                 id="street"
//                                 name="street"
//                                 label="Street"
//                                 fullWidth
//                                 autoComplete="shipping street"
//                                 variant="standard"
//                                 value={shippingDetails.street}
//                                 onChange={handleInputChange}
//                                 error={!!errors.street}
//                                 helperText={errors.street}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 required
//                                 id="celPhone"
//                                 name="celPhone"
//                                 label="Cel phone"
//                                 fullWidth
//                                 autoComplete="celPhone"
//                                 variant="standard"
//                                 value={shippingDetails.celPhone}
//                                 onChange={handleInputChange}
//                                 error={!!errors.celPhone}
//                                 helperText={errors.celPhone}
//                             />
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="zipCode"
//                                 name="zipCode"
//                                 label="Postal code"
//                                 fullWidth
//                                 autoComplete="shipping postal-code"
//                                 variant="standard"
//                                 value={shippingDetails.zipCode}
//                                 onChange={handleInputChange}
//                                 error={!!errors.zipCode}
//                                 helperText={errors.zipCode}
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <FormControlLabel
//                                 control={<Checkbox color="secondary" name="savestreet" value="yes" />}
//                                 label="Use this street for payment details"
//                             />
//                         </Grid>
//                     </Grid>
//                 )}

//                 {error && (
//                     <div>
//                         <ErrorIcon sx={{ color: 'red', fontSize: 40 }} />
//                         <Typography variant="body1" color="error">
//                             {error}
//                         </Typography>
//                     </div>
//                 )}
//             </FormControl>

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Button
//                     variant="contained"
//                     onClick={handleNextClick}
//                     sx={{ mt: 3, ml: 1 }}
//                 >
//                     Next
//                 </Button>
//             </Box>
//         </React.Fragment>
//     );
// };

// export default ShippingDetails;
