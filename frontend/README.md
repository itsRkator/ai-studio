# AI Studio - Frontend

Frontend application for AI Studio, a fashion image generation platform built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

## Prerequisites

- Node.js 24+
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run unit tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run E2E tests with Playwright
- `npm run test:e2e:ui` - Run E2E tests with UI
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API service functions
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript type definitions
│   ├── __tests__/      # Unit test files
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles (Tailwind)
├── tests/
│   └── e2e/            # Playwright E2E tests
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── playwright.config.ts # Playwright configuration
└── tsconfig.json       # TypeScript configuration
```

## Development

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000/api
```

### Code Quality

- **ESLint**: Configured with TypeScript and React rules
- **Prettier**: Code formatting
- **TypeScript**: Strict mode enabled

### Testing

#### Unit Tests
```bash
npm test
```

#### E2E Tests
```bash
npm run test:e2e
```

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Features

- User authentication (signup/login)
- Image upload with preview
- AI generation simulation
- Generation history (last 5)
- Error handling with retry logic
- Responsive design
- Accessibility support

## API Integration

The frontend communicates with the backend API. See the root `README.md` for API documentation details.
