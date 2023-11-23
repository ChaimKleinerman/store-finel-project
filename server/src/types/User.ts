import Cart from './Cart.js';

type User = {
  user_id?: string
  name?: string;
  email: string;
  password: string;
  contactNumber?: number;
  payment?: string 
  address?: {
    country?: string,
    city?: string,
    street?: string,
    zip_code?: string
  } 
};

export default User;
