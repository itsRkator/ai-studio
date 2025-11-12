# AI Studio

A mini AI Studio web application for fashion image generation with user authentication, image upload, and generation history.

## Tech Stack

### Frontend
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Vitest + React Testing Library
- Playwright (E2E)

### Backend
- Node.js + TypeScript
- Express
- TypeORM + PostgreSQL
- JWT Authentication
- Zod Validation

## Prerequisites

- Node.js 20+
- PostgreSQL 16+
- npm or yarn

## Setup Instructions

### Option 1: Using Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-studio
```

2. Copy the environment sample files and configure them:
```bash
# Root level (for Docker Compose)
cp .env.sample .env
# Edit .env with your Docker configuration values

# Backend (for local development)
cp backend/.env.sample backend/.env
# Edit backend/.env with your values

# Frontend (for local development)
cp frontend/.env.sample frontend/.env
# Edit frontend/.env with your values
```

3. Start all services:
```bash
docker-compose up
```

This will start:
- PostgreSQL on port 5432
- Backend API on port 3000
- Frontend on port 5173

### Option 2: Local Development

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Copy and configure environment files:
```bash
# Backend
cp backend/.env.sample backend/.env
# Edit backend/.env with your local database credentials

# Frontend
cp frontend/.env.sample frontend/.env
# Frontend .env is optional for local dev (defaults work)
```

4. Start PostgreSQL (if not running):
```bash
# Using Docker
docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ai_studio -p 5432:5432 postgres:16-alpine
```

5. Run database migrations (when implemented):
```bash
npm run typeorm migration:run
```

6. Start the development server:
```bash
npm run dev
```

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

### Backend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run linter
- `npm run format` - Format code with Prettier

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Run linter
- `npm run format` - Format code with Prettier

## Environment Variables

### Docker Compose (.env)

Copy `.env.sample` to `.env` in the root directory for Docker Compose configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_USER` | PostgreSQL username | `postgres` |
| `POSTGRES_PASSWORD` | PostgreSQL password | `postgres` |
| `POSTGRES_DB` | Database name | `ai_studio` |
| `POSTGRES_PORT` | PostgreSQL port | `5432` |
| `BACKEND_PORT` | Backend API port | `3000` |
| `FRONTEND_PORT` | Frontend dev server port | `5173` |
| `JWT_SECRET` | JWT secret key | **Required** |
| `NODE_ENV` | Environment | `development` |
| `VITE_API_URL` | Frontend API URL | `http://localhost:3000/api` |

### Backend (.env)

Copy `backend/.env.sample` to `backend/.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/ai_studio` |
| `JWT_SECRET` | Secret key for JWT tokens | **Required in production** |
| `JWT_EXPIRES_IN` | JWT token expiration | `7d` |
| `MAX_FILE_SIZE` | Max upload size in bytes | `10485760` (10MB) |
| `UPLOAD_DIR` | Directory for uploaded files | `./uploads` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:5173` |

### Frontend (.env)

Copy `frontend/.env.sample` to `frontend/.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000/api` |
| `VITE_NODE_ENV` | Environment | `development` |

**Note:** All frontend environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Testing

### Backend Tests
```bash
cd backend
npm test
npm run test:coverage
```

### Frontend Tests
```bash
cd frontend
npm test
npm run test:coverage
npm run test:e2e
```

## Project Structure

```
ai-studio/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API routes
│   │   ├── models/         # TypeORM entities
│   │   ├── services/       # Business logic
│   │   ├── middleware/     # Express middleware
│   │   ├── config/         # Configuration files
│   │   └── utils/          # Utility functions
│   ├── tests/              # Test files
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript types
│   ├── tests/              # Test files
│   │   └── e2e/            # E2E tests
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline
├── docker-compose.yml
├── OPENAPI.yaml            # API specification
├── EVAL.md                 # Evaluation checklist
└── AI_USAGE.md            # AI usage documentation
```

## API Documentation

See `OPENAPI.yaml` for complete API specification.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linters
4. Submit a pull request

## License

See LICENSE file for details.
