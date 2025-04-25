# Ulerna Ecommerce

A responsive, accessible, and high-performance e-commerce product page built using Next.js 15+ App Router, TypeScript, and modern web development best practices.

## Features

### 1. Product Image Gallery
- Zoom functionality on hover
- Swipeable on mobile devices

### 2. Variant Selector
- Color and size selection
- Real-time product updates based on selection

### 3. Add to Cart
- Quantity selector
- Button disabled if variant unavailable

### 4. Product Description
- Expandable/collapsible sections for details, specs, reviews, etc.

### 5. Responsive Design
- Fully responsive across devices (mobile, tablet, desktop)

`(Ideally, a demo video should be put here.)`

<img width="1409" alt="Screenshot 2023-11-09 at 7 17 12 PM" src="https://github.com/beinghaziq/awesome-readme/assets/72576839/c884958c-f0dd-4ae1-bdcc-39a888cddcb8">


# Build With

- Framework: NextJS 15, Typescript
- State Management: ContextAPI
- Styling: Tailwind CSS
- Framework: Next.js 15+ with App Router
- Testing: Jest + React Testing Library
- Image Optimization: Next.js Image component
- Error Handling: Graceful error and loading states

# Getting Started

## Prerequisites

- npm

  ```bash
  npm install npm@latest -g
  ```

## Installation

1. **Clone the Repository**:
   ```bash
   git clone [<repository-url>](https://github.com/Owner/repo.git)
   cd repo
   create a .env file and copy content from .env.example to it
   ```
2. **Build the Docker Images**:
   ```bash
   docker-compose build
   ```
3. **Initialize the Database**:
   - Before starting the application for the first time, ensure that the database is set up correctly.
   ```bash
   docker-compose up -d db
   docker-compose run web rails db:create db:migrate
   ```
   - Now run the application with
   ```bash
   docker-compose up
   ```

## API Documentation

add postman or Swagger link here

## Run Tests

```bash
    rpsec
```
