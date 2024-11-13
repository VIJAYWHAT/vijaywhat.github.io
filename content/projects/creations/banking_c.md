{
  "title": "Comprehensive Banking System in C: A Beginner's Guide to Advanced Concepts",
  "date": "2018-02-11T12:41:05-05:00",
  "image": "/img/circleci-workflow.webp",
  "link": "https://github.com/VIJAYWHAT/C-programs/tree/main/Banking_Program_C",
  "image": "/img/online-banking-concept.avif",
  "description": "Explore a comprehensive console-based banking system built in C, designed to enhance your understanding of advanced programming concepts. This project covers user authentication, account management, transaction handling, and more, making it an excellent resource for beginners and enthusiasts to dive deep into real-world C programming applications.",
  "tags": ["C Programming","Banking Application", "User Authentication", "File Handling", "Advanced C Concepts", "Real-world Application"],
  "fact": "",
  "featured":true
}

## Overview
This project is a console-based banking application written in C, designed to cover a wide range of concepts from basic to advanced levels. It demonstrates the use of structures, file handling, string manipulation, and control structures, making it an excellent resource for beginners looking to deepen their understanding of C programming and real-world applications.

## Code Structure
The program consists of two main files:

- `bank.h`: Header file containing function declarations, structure definitions, and macros.
- `banking_func.c`: Source file with function implementations.

### Header File: bank.h
This file defines the structure for user credentials and declares various functions used throughout the application.

```c
#ifndef BANK_H
#define BANK_H

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// Define constants or macros
#define Length 55 
#define MaxLength 255

struct Users {
    int account_no;
    char user_name[Length];
    char password[Length];
};

// Function Declarations
void welcome(); 
void login();
void UserOptions();
char* getCurrentDate();
void userDetails(bool UserLogged, int UserIndex);
void UserProfile(int UserIndex);
void printStatment(int ac_no);
float balanceCheck(int ac_no);
void deposit(int ac_no);
void withdraw(int ac_no, int UserIndex);
bool depositPrint(int ac_no, int amount);
bool withdrawPrint(int ac_no, int amount);
void logout();

#endif
```

### Source File: banking_func.c
This file implements the functions declared in the header file. Below is a summary of each function and its role in the application.

#### Main Function
The main function initiates the application by calling the welcome and login functions.

```c
#include <stdio.h>
#include "banking_func.c" 

void main(){
    welcome();
    login();
}
```

#### User Data
A static array of Users structures is used to store the credentials of four predefined users.

```c
struct Users users[] = {
    {127101234, "Vijay", "vijay@123"},
    {127102345, "Gopi", "gopi@123"},
    {127103456, "Ram", "ram@123"},
    {127104567, "Hari", "hari@123"}
};
```

#### welcome Function
Displays a welcome message.

```c
void welcome(){
    printf("===========================================\n");
    printf("\t Welcome to Banking App \n");
    printf("===========================================\n");
}
```

#### login Function
Handles user login by prompting for a username and password. Implements basic error handling and retry logic using goto.

```c
void login() {
    // Implementation of user login
}
```

#### userDetails Function
Displays user-specific options after successful login and handles user input to perform various banking operations.

```c
void userDetails(bool UserLogged, int UserIndex) {
    // Implementation of user details handling
}
```

#### UserOptions Function
Displays the menu options available to the user.

```c
void UserOptions() {
    printf("\n1. Check Bank Balance.\n");
    printf("2. View User Details.\n");
    printf("3. Check account statement\n");
    printf("4. Deposit Money.\n");
    printf("5. Withdraw Money.\n");
}
```

#### UserProfile Function
Displays the profile details of the logged-in user.

```c
void UserProfile(int UserIndex) {
    // Implementation of user profile display
}
```

#### logout Function
Handles user logout and prompts for re-login or exit.

```c
void logout() {
    // Implementation of user logout
}
```

#### balanceCheck Function
Retrieves the current balance from the user's account statement file.

```c
float balanceCheck(int ac_no) {
    // Implementation of balance check
}
```

#### printStatment Function
Prints the account statement from the respective file.

```c
void printStatment(int ac_no) {
    // Implementation of statement printing
}
```

#### deposit Function
Handles the deposit operation, including confirmation and updating the account statement.

```c
void deposit(int ac_no) {
    // Implementation of deposit operation
}
```

#### withdraw Function
Handles the withdrawal operation with password confirmation and updating the account statement.

```c
void withdraw(int ac_no, int userIndex) {
    // Implementation of withdrawal operation
}
```

#### depositPrint and withdrawPrint Functions
Update the account statement file with deposit and withdrawal transactions, respectively.

```c
bool depositPrint(int ac_no, int amount) {
    // Implementation of deposit statement update
}

bool withdrawPrint(int ac_no, int amount) {
    // Implementation of withdrawal statement update
}
```

#### getCurrentDate Function
Returns the current date as a string.

```c
char* getCurrentDate() {
    // Implementation of date retrieval
}
```

### Sample User Statement
User statements are saved in text files named after the user's account number (e.g., 127101234.txt). Below is an example format for a user statement file:

```
*************************
    Banking Statement
*************************

Name: Vijay R
Ac No: 127101234
Email: vijayr@gmail.ac.in
Phone: 73394800000

---------------------------------------------------------------------------------
Date    	Description	   Transaction Type   Amount (Rs)   Balance (Rs)
---------------------------------------------------------------------------------
06-07-2024	Initial Deposit	    Credit		10000  	    10000
06-07-2024	Withdrawal	    Debit		500  	    9500
06-07-2024	Deposit		    Credit		1000  	    10500
07-07-2024	Deposit		    Credit		1500  	    12000
08-07-2024	Deposit		    Credit		1300  	    13300
08-07-2024	Deposit		    Credit		1500  	    14800
08-07-2024	Withdrawal	    Debit		1000  	    13800
```

## Conclusion
This banking application project showcases a practical implementation of various C programming concepts, making it a valuable addition to any beginner's portfolio. The code is designed to be modular, easy to understand, and demonstrates real-time use cases that are commonly encountered in software development.

### Notes
> This overview provides a brief explanation of the project. Initially developed in C, I've now also implemented the same comprehensive banking application in Java, covering both beginner and advanced concepts. The Java version incorporates similar functionality but with an object-oriented approach, enhancing modularity and reusability.

> For the complete code and detailed explanations, please visit my GitHub repositories:
> - [C Version of Banking Application](https://github.com/VIJAYWHAT/C-programs/tree/main/Banking_Program_C)
> - [Java Version of Banking Application](https://github.com/VIJAYWHAT/java-programs/tree/main/banking)

> Both versions are well-commented to aid your understanding. If you have any questions or need further clarification, feel free to create an issue in either repository, and I will be happy to assist you.




