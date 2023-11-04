export default function generatePassword(length = 14, uppercase = 1, lowercase = 1, numbers = 1, specials = 1) {
  let characters = '';
  let password = '';

  if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) characters += '0123456789';
  if (specials) characters += '!@#$%^&*()_+{}|:<>?';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters.charAt(index);
  }

  return password;
}

// Example usage
// const pass = generatePassword(24, true, true, true, false);
