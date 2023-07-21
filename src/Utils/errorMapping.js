// Define constants for error messages
const USER_NOT_FOUND_ERROR = 'Please enter a valid email address or signup';
const WRONG_PASSWORD_ERROR = 'Incorrect credentials';
const EMAIL_ALREADY_IN_USE_ERROR = 'Email already in use';
const UNKNOWN_ERROR = 'Please try again later';

// Use the constants to create the errorMapping object
const errorMapping = {
  'auth/user-not-found': USER_NOT_FOUND_ERROR,
  'auth/wrong-password': WRONG_PASSWORD_ERROR,
  'auth/email-already-in-use': EMAIL_ALREADY_IN_USE_ERROR,
  'auth/unknown': UNKNOWN_ERROR,
};

export default errorMapping;
