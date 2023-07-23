# Mr. Bin - Commodity Recycle and Exchange Platform

![Mr. Bin Logo](logo.png)

Mr. Bin is a commodity recycle and exchange platform designed to promote eco-friendly practices and encourage recycling within communities. This repository contains the source code for Mr. Bin, which is a web application developed as part of the SPL 2 Project by Abu Jafar Saifullah and Jitesh Sureka.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Mr. Bin aims to provide an accessible and user-friendly platform where users can:

- Register and log in to their accounts.
- Browse available commodities for exchange or recycling.
- Post commodities they wish to exchange or recycle.
- View commodity listings and their details, including images.
- Utilize object detection to categorize commodities accurately.
- Utilize Google Maps API for location-based services.
- Verify their phone numbers through Firebase API.
- And much more!

## Features

- User Authentication: Secure user registration and login functionality.
- Commodity Listings: Users can browse through a wide range of commodities available for exchange or recycling.
- Post Commodity: Users can create listings for commodities they want to offer for exchange or recycling.
- Object Detection: Integration of TensorFlow and COCO-SSD Data Object to detect and categorize objects in images.
- Google Maps Integration: Leveraging Google Maps API for location-based services.
- Phone Verification: Firebase API is used for phone number verification during user registration.
- Responsive Design: The web application is designed to be responsive and accessible across various devices.

## Installation

To run Mr. Bin locally on your machine, follow these steps:

1. Clone the project repository:

   ```bash
   git clone https://github.com/jaf107/mr-bin.git
   ```

2. Install the required dependencies for both the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd mr-bin/frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Start the frontend and backend servers:

   ```bash
   # Start frontend server
   cd ../frontend
   npm start

   # Start backend server
   cd ../backend
   npm start
   ```

The frontend and backend should now be running locally. Access the application through `http://localhost:3000` in your web browser.

## Technologies Used

Mr. Bin utilizes the following technologies:

- Frontend: ReactJS with Redux
- Backend: NodeJS
- Database: MongoDB
- Object Detection API: TensorFlow, COCO-SSD Data Object
- Maps API: Google Maps API (Maps JS API, Places API, Geolocation API)
- Phone Verification: Firebase API

## Contributing

Contributions to Mr. Bin are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request. Please follow the contribution guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact

For any questions, suggestions, or inquiries, please contact the developers of Mr. Bin:

- Abu Jafar Saifullah - [Email](mailto:bsse1109@iit.du.ac.bd)
- Jitesh Sureka - [Email](mailto:bsse1115@iit.du.ac.bd)

We hope you find Mr. Bin useful and contribute to making our environment cleaner and greener! Happy recycling! 🌱
