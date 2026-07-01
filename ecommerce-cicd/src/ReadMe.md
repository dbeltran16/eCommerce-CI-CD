# Ecommerce CI/CD Project

## Overview

This project demonstrates a complete CI/CD pipeline using React, GitHub Actions, Jest, React Testing Library, and Vercel.

The application allows users to browse products and add them to a shopping cart. Automated testing ensures application reliability before deployment.

---

## Technologies

- React
- Vite
- GitHub Actions
- Jest
- React Testing Library
- Vercel

---

## Features

- Product List
- Shopping Cart
- Responsive Navbar
- Unit Testing
- Integration Testing
- Continuous Integration
- Continuous Deployment

---

## Project Structure

```
src
 components
 tests
 App.jsx

.github
 workflows
 main.yml
```

---

## Running Locally

Install dependencies

```
npm install
```

Run

```
npm run dev
```

Run tests

```
npm test
```

Build

```
npm run build
```

---

## CI Pipeline

Every push to the main branch:

- Installs dependencies
- Builds the application
- Runs all tests
- Stops if tests fail

---

## CD Pipeline

If the CI pipeline passes:

- GitHub Actions deploys the application to Vercel automatically.

---

## Testing

### Unit Tests

- Navbar Rendering
- Product Card Rendering

### Integration Test

- Adding a product updates the shopping cart.

---

## Author

Darlene Beltran