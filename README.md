
# Book My Show clone

This is a front-end project aiming to replicate the functionality of the popular ticket booking platform "BookMyShow." It includes pages for browsing movies and plays, developed using React.js and styled with Tailwind CSS. Additionally, it integrates Razorpay, a third-party API, for handling payments.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)


## Features

- Browse movies and plays
- View details of individual movies and plays(jawan)
- Integrated Razorpay for secure payments
- Responsive design using Tailwind CSS.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/akshatha-swamy/bookMyShowClone
```

2. Navigate to the project directory:

```bash
cd bookMyShowClone
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

Access the application at `http://localhost:3000` in your browser.

## API Integration

To use Razorpay integration, you'll need to obtain your Razorpay API keys and configure them in your project. Refer to the Razorpay documentation for details on obtaining API keys and integrating Razorpay with React.js applications.

```javascript

  const launchRazorPay=()=>{
    let options={
      key:"Api key",
      amount:500*100,
      currency:"INR",
      name:"Book My Show Clone",
      description:"Movie Purchase On Rental",
      image:"https://i.ibb.co/zPBYW3H/imgbin-bookmushow-office-android-ticket-png.png ",
      handler:()=>{
        alert("Payment Done")
      },
      theme:{color:"#c4242d"}
    };
  
    let rzp=new window.Razorpay(options);
    rzp.open();
  };