# Car Management Application

## Deployment

- **Platform**: Deployed on Vercel.
- **Deployment Link**: Frontend : https://car-management-sysytem-alvu.vercel.app/  |  Backend : https://car-management-sysytem.vercel.app/

## Overview

This application allows users to manage their cars by creating, viewing, editing, and deleting car records. Each car record includes an image, title, description, and tags (e.g., car type, company, dealer). Users can only manage their own cars after authenticating, and the app includes search functionality across car records.

## Features

- **User Authentication**: Users can sign up and log in to access their car records.
- **Car Management**: Users can create new car records with an image, title, description, and tags. They can update or delete existing records.
- **Responsive UI**: Frontend built with [Frontend Framework] to provide a user-friendly experience on different devices.

## Functional Requirements

### User Functionalities
1. **Sign Up / Login**: Users can register and log in.
2. **Add a Car**: Users can upload a car image, enter a title, description, and tags.
3. **View Car List**: Display a list of all cars created by the user, with a search bar.
5. **View Car Details**: View detailed information about a specific car.
6. **Update Car**: Edit a car’s details including title, description, tags, and image.
7. **Delete Car**: Remove a car record from the list.

### Frontend Pages
1. **Sign Up / Login Page**: For user registration and login.
2. **Product List Page**: Shows all cars created by the user, with a search bar.
3. **Product Creation Page**: Form for uploading a car image, setting a title, and writing a description.
4. **Product Detail Page**: Displays a car’s details with options to edit or delete.

## API Endpoints

1. **Create User** - Endpoint for user registration.
2. **Create Product** - Endpoint to add a new car.
3. **List Products** - Fetch all cars created by the logged-in user.
4. **Get Product by ID** - Fetch details of a specific car by ID.
5. **Update Product** - Edit a specific car’s information.
6. **Delete Product** - Remove a specific car.


## Getting Started

### Prerequisites
- Node.js
- MongoDB
- React.js
- Express.js
- JavaScript
- Tailwind

### Installation

1. **Backend Setup**:
   ```bash
   cd backend
   npx nodemon

1. **Frontend Setup**:
   ```bash
   cd frontend
   npm run dev

## Usage

1. **Sign Up / Login**: Register a new account or log in with your existing credentials.
2. **Create Car Record**: After logging in, navigate to the product creation page to add a car, including an image, title, description, and tags.
3. **View Car List**: On the dashboard, view the list of all cars created by the logged-in user.
4. **Search Cars**: Use the search bar to find cars by keywords that match the title, description, or tags.
5. **View Car Details**: Click on a car from the list to view its details and access options to edit or delete it.
6. **Edit Car Record**: Update car details, including title, description, tags, and image.
7. **Delete Car**: Remove any car from the system by clicking the delete option on the car detail page.

## License

This project is licensed under the MIT License.


