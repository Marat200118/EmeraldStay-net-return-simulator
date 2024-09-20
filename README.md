# Yield Net Return Simulator

Welcome to the **Yield Net Return Simulator** project! This is a web-based application built using Angular that helps property owners calculate their monthly net income and return on investment over the first three years of a property rental. The application also includes a user-friendly interface with input formatting, dropdown selections, and a dynamic results display.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Application Logic](#application-logic)
  - [Calculation Logic](#calculation-logic)
  - [Result Display](#result-display)
- [Usage](#usage)
- [Contributing](#contributing)

## Project Overview

The **Yield Net Return Simulator** allows users to enter key financial details about a property, such as:

- The **purchase price of the property**.
- The **monthly rent amount**.
- The **annual rental fee** (such as maintenance or property management fees).

Using this data, the application calculates the net income per month and the return on investment (ROI) for the first three years, taking into account different agency fees:

- Year 1: 30% agency fee
- Year 2: 25% agency fee
- Year 3: 20% agency fee

## Features

- **Real-time input formatting**: As you type, numbers are formatted with commas (e.g., `1000` becomes `1,000`).
- **Dropdown selections**: Predefined values for quick input of common property prices.
- **Dynamic results display**: After hitting "Calculate", the results replace the image and are displayed in a clear, card-based format.
- **User-friendly interface**: Simple, intuitive design using modern UI/UX practices.
- **Responsive design**: Works well on desktop and mobile devices.

## Technologies

- **Angular** (Version 2 or higher)
- **TypeScript**
- **HTML5 & CSS3**
- **Angular Pipes** for number formatting
- **Bootstrap CSS** (optional, for styling)

## Setup and Installation

### Prerequisites

To run this project locally, you need to have:

- [Node.js](https://nodejs.org/) installed on your machine
- [Angular CLI](https://cli.angular.io/) installed globally on your machine

### Clone the Repository

To clone this repository, run the following command in your terminal:

```bash
git clone https://github.com/yourusername/yield-net-return-simulator.git
cd yield-net-return-simulator
```

### Install Dependencies

Once inside the project folder, install the required dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
ng serve
```

The application will be available at `http://localhost:4200/` in your browser.

### Build the Project

To build the project for production, use the Angular CLI’s build command:

```bash
ng build --prod
```

The compiled output will be stored in the `dist/` directory.

## Application Logic

### Calculation Logic

Once the user enters the property details and clicks "Calculate", the following calculations occur:

1. **Yearly Rent Calculation**:
   - `yearlyRent = monthlyRent * 12`

2. **Year 1 Calculations**:
   - **Agency Fees**: 30% of the annual rent
   - **Net Income**: `netIncome = yearlyRent - agencyFees - annualRentalFee`
   - **Return on Investment (ROI)**: `return = (netIncome / purchasePrice) * 100`

3. **Year 2 Calculations**:
   - **Agency Fees**: 25% of the annual rent
   - **Net Income and ROI**: Similar to Year 1, but using the new agency fee percentage.

4. **Year 3 Calculations**:
   - **Agency Fees**: 20% of the annual rent
   - **Net Income and ROI**: Similar to Year 1, but using the new agency fee percentage.

### Result Display

- Once the calculations are done, the app dynamically replaces the placeholder image with the results, which are displayed in a clean and organized card layout.
- The results show the **monthly net income** and **return on investment** for each year, making it easy for users to understand how their property investment is performing over time.

## Usage

1. **Enter property details**: Input the property purchase price, monthly rent amount, and annual rental fee.
2. **Use the dropdown**: Optionally, select a predefined purchase price to save time.
3. **Click "Calculate"**: The app will process the details and display the net income and ROI for each year.
4. **View results**: The image on the right is replaced with the results, which are displayed in an easy-to-read format.

## Contributing

We welcome contributions to improve this project! If you'd like to contribute, please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request
