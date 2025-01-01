{
  "title": "Secure Your Data: AES Encryption and Decryption in JavaScript",
  "date": "2025-01-09T10:00:00+05:30",
  "image": "/img/data-encryption.png",
  "link": "https://github.com/VIJAYWHAT/encrypt",
  "description": "A practical JavaScript project to encrypt and decrypt text using AES encryption, focusing on user-friendly UI/UX and secure data handling. Dive into modern encryption techniques and explore a step-by-step guide to building this project.",
  "tags": ["JavaScript", "AES Encryption", "Data Security", "Cryptography", "Frontend Projects"],
  "fact": "",
  "featured": true
}

## Overview

This project showcases a JavaScript-based encryption and decryption application utilizing AES (Advanced Encryption Standard) encryption via the CryptoJS library. With an intuitive UI, users can easily encrypt text using a secret key and decrypt it when needed. It serves as an excellent learning resource for frontend enthusiasts interested in implementing secure data handling.


## Key Features
- **AES Encryption and Decryption**: Securely encrypt and decrypt data using a symmetric key.
- **User-Friendly UI**: Simplified interface for easy text input, encryption, and decryption.
- **Clipboard Integration**: Copy encrypted or decrypted text with a single click.
- **Real-time Feedback**: Snackbars display messages for successful copy actions or errors.
- **Password Visibility Toggle**: Easily switch between hidden and visible states for the secret key.

## Code Structure
The project includes the following key components:

### HTML Structure
The HTML file defines the layout, including a form for input, output sections, and buttons for user interaction.

```html
<div class="textBox">
    <input type="password" id="secretKey" placeholder="Enter secret key" autocomplete="off">
    <span id="toggleSecretKey">🙈</span>
</div>
```

- **Input Fields**: For plaintext and secret key entry.
- **Action Buttons**: Encrypt, decrypt, and copy buttons for seamless interactions.

### JavaScript Functionality
The JavaScript (`script.js`) file implements the core encryption and decryption logic using the CryptoJS library.

#### Encrypting Text
```javascript
function encryptText() {
    const plainText = document.getElementById('plainText').value;
    const secretKey = document.getElementById('secretKey').value;

    if (!plainText || !secretKey) {
        alert('Please provide both plain text and secret key.');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    document.getElementById('encryptedText').value = encrypted;
}
```

#### Decrypting Text
```javascript
function decryptText() {
    const encryptedText = document.getElementById('encryptedTextInput').value;
    const secretKey = document.getElementById('secretKey').value;

    if (!encryptedText || !secretKey) {
        alert('Please provide both encrypted text and secret key.');
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error();
        document.getElementById('decryptedText').value = decrypted;
    } catch {
        alert('Decryption failed. Please check the secret key and encrypted text.');
    }
}
```

#### Additional Features
- **Password Toggle**: Switches the secret key field between visible and hidden states.
- **Copy to Clipboard**: Copies text to the clipboard using the `navigator.clipboard` API.
- **Snackbar Notifications**: Provides real-time feedback on user actions.

### CSS Styling
The `styles.css` file ensures a clean, responsive design for optimal user experience. It includes styles for:
- Input fields and buttons.
- Snackbar notifications.
- Responsive layout for mobile and desktop.

## Learning Outcomes
By working through this project, you will:
- Understand how AES encryption works and its applications.
- Learn to integrate third-party libraries like CryptoJS into a project.
- Enhance your skills in frontend development, including UI/UX design.
- Explore clipboard interaction and real-time feedback mechanisms.

## Conclusion
This project highlights the practical use of AES encryption in securing data, coupled with an interactive and user-friendly interface. Whether you're a beginner or an experienced developer, building this project is a great way to delve into secure JavaScript programming.

🔗 **Repository Link**: [GitHub Repository](https://github.com/VIJAYWHAT/encrypt)
