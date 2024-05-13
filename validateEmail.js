// Function to validate email address format
function validateEmail(email) {
    // Regular expression for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
}

// Example usage
const email1 = "sahil@example.com";
const email2 = "invalid-email"; // This is an invalid email format

console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
