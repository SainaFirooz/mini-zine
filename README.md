# Mini Zine Template

## Overview

The Mini Zine Template is a web-based application designed to help people easily create and print their own Mini Zines. The tool provides a simple interface for uploading images, adding text, and generating a printable PDF, making the creative process accessible and engaging.

## Live Demo

[Mini Zine Template](https://mini-zine-template.vercel.app/)

## Features

- Simple sign-up and sign-in with Clerk authentication
- Drag-and-drop image uploading (JPG/PNG supported)
- Customizable text options
- Automatic image rotation for proper Mini Zine formatting
- Step-by-step layout to help users position content correctly
- PDF generation optimized for home and office printers

## Technologies Used

- **Next.js:** Chosen for its server-side rendering and fast performance.
- **Clerk:** Integrated for authentication and user management.
- **React-dropzone:** Enables drag-and-drop image uploads.
- **React-color:** Provides color selection for text customization.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/SainaFirooz/mini-zine.git
   cd mini-zine
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add necessary environment variables for Clerk.
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## Usage

1. Sign up or log in.
2. Upload images and arrange them in the zine template.
3. Add text and customize its color.
4. Generate and download a PDF of your Mini Zine.
5. Print the PDF and fold it into a Mini Zine.
