# WatchDog-ai 🐕

AI-powered changelog generator that automatically generates intelligent changelogs from git commits using AI summarization and categorization.

## Features

✨ **Core Features**
- 🤖 AI-powered commit summarization using LLM
- 📂 Automatic commit categorization (feat, fix, docs, chore, etc.)
- 📝 Multiple output formats (Markdown, JSON, HTML)
- 🔐 JWT-based authentication
- 🚀 Serverless processing with Azure Functions
- 🐳 Docker & Docker Compose setup
- 📊 Production-ready API
- 🔄 GitHub webhook integration (coming soon)
- 📈 Monitoring with Application Insights

## Tech Stack

- **API**: Node.js (Express/NestJS)
- **AI Service**: Python (OpenAI/Azure AI)
- **Serverless**: C# Azure Functions
- **Database**: Azure Cosmos DB / PostgreSQL
- **Auth**: JWT + Azure AD (optional)
- **Deployment**: Docker, Docker Compose, Azure Container Instances
- **CI/CD**: GitHub Actions

## Project Structure

```
WatchDog-ai/
├── api/                          # Node.js Express API
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── changelog.routes.ts
│   │   │   └── health.routes.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── changelog.controller.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── services/
│   │   │   ├── changelog.service.ts
│   │   │   ├── ai.service.ts
│   │   │   └── auth.service.ts
│   │   ├── config/
│   │   │   └── env.config.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── app.ts
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── functions/                    # C# Azure Functions
│   ├── ChangelogProcessorFunction.cs
│   ├── ChangelogTimerTrigger.cs
│   ├── local.settings.json.example
│   ├── host.json
│   ├── .csproj
│   └── Dockerfile
├── ai-service/                   # Python AI Service
│   ├── src/
│   │   ├── changelog_generator.py
│   │   ├── prompts.py
│   │   ├── utils.py
│   │   ├── config.py
│   │   └── __init__.py
│   ├── requirements.txt
│   ├── .env.example
│   ├── Dockerfile
│   └── main.py
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── ci-api.yml
│       ├── ci-ai.yml
│       └── deploy.yml
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── ARCHITECTURE.md
│   └── SETUP.md
├── .gitignore
├── .env.example
├── LICENSE
└── CONTRIBUTING.md
```

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+
- Python 3.9+
- .NET 8 SDK (for Azure Functions)
- Azure account (for OpenAI/AI services)

### Local Development with Docker

```bash
# Clone the repository
git clone https://github.com/Yash-Padiya/WatchDog-ai.git
cd WatchDog-ai

# Copy environment files
cp .env.example .env
cp api/.env.example api/.env
cp ai-service/.env.example ai-service/.env
cp functions/local.settings.json.example functions/local.settings.json

# Update .env files with your credentials
# - OpenAI API Key
# - Azure credentials
# - JWT Secret
# - Database connection strings

# Start all services with Docker Compose
docker-compose up -d

# Check logs
docker-compose logs -f
```

### Access the Application

- **API**: http://localhost:3000
- **Health Check**: http://localhost:3000/health
- **API Docs**: http://localhost:3000/api/docs

## API Endpoints

### Authentication

```bash
# Register
POST /auth/register
Body: { "email": "user@example.com", "password": "password123" }

# Login
POST /auth/login
Body: { "email": "user@example.com", "password": "password123" }
Response: { "token": "jwt_token", "refreshToken": "refresh_token" }

# Refresh Token
POST /auth/refresh
Body: { "refreshToken": "refresh_token" }
```

### Changelog Generation

```bash
# Generate changelog from git commits
POST /changelog/generate
Headers: Authorization: Bearer <jwt_token>
Body: {
  "commits": [
    { "hash": "abc123", "message": "feat: add new feature", "author": "user" },
    { "hash": "def456", "message": "fix: bug fix", "author": "user" }
  ],
  "version": "1.0.0",
  "format": "markdown" // or "json", "html"
}

# Get changelog history
GET /changelog/history
Headers: Authorization: Bearer <jwt_token>

# Get specific changelog
GET /changelog/:id
Headers: Authorization: Bearer <jwt_token>
```

## Authentication Flow

1. User registers with email and password
2. Password is hashed with bcrypt
3. On login, JWT token is generated
4. Token is required for all protected endpoints
5. Token refresh mechanism available
6. Token expiry: 1 hour (configurable)
7. Refresh token expiry: 7 days (configurable)

## Environment Variables

### `.env` (Root)

```
NODE_ENV=development
API_PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/watchdog
OPENAI_API_KEY=sk-...
JWT_SECRET=your-super-secret-key
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=7d
AI_SERVICE_URL=http://ai-service:5000
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=...
```

### `api/.env`

```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@postgres:5432/watchdog
JWT_SECRET=your-super-secret-key
JWT_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=7d
AI_SERVICE_URL=http://ai-service:5000
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:3000
```

### `ai-service/.env`

```
PYTHON_ENV=development
PORT=5000
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_TEMPERATURE=0.7
LOG_LEVEL=INFO
```

## Deployment

### Azure Container Instances

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for complete deployment guide.

```bash
# Build images
docker build -t watchdog-api:latest ./api
docker build -t watchdog-ai:latest ./ai-service

# Push to Azure Container Registry
az acr build --registry <registry-name> --image watchdog-api:latest ./api
az acr build --registry <registry-name> --image watchdog-ai:latest ./ai-service

# Deploy with Azure CLI
az container create --resource-group <rg> --name watchdog-api \
  --image <registry>.azurecr.io/watchdog-api:latest \
  --environment-variables @env-vars.txt
```

### GitHub Actions CI/CD

Automated workflows for:
- Testing on push
- Building Docker images
- Deploying to Azure
- Running security checks

See `.github/workflows/` for details.

## Development

### Running Tests

```bash
# API tests
cd api && npm test

# AI service tests
cd ai-service && pytest
```

### Building for Production

```bash
# Build all services
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

## Security

- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Input validation
- ✅ Error handling (no stack traces in production)
- ✅ Secrets management with environment variables
- ✅ HTTPS enforcement in production

## Monitoring

- Application Insights integration
- Health check endpoints
- Structured logging
- Request/response logging
- Performance metrics

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - See [LICENSE](./LICENSE) for details.

## Roadmap

- [ ] GitHub webhook integration
- [ ] GitLab integration
- [ ] Scheduled changelog generation
- [ ] Web dashboard
- [ ] Release notes generation
- [ ] Multi-language support
- [ ] Custom templates
- [ ] Slack/Teams notifications
- [ ] Analytics and insights

## Support

For issues, questions, or suggestions, please open a GitHub issue.

## Author

Yash Padiya - [@Yash-Padiya](https://github.com/Yash-Padiya)
