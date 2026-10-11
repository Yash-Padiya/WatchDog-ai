# Contributing to WatchDog-ai

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Be respectful, inclusive, and professional. We're all here to build something great together.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/WatchDog-ai.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Set up development environment: See README.md

## Development Workflow

### 1. Set Up Your Environment

```bash
# Install dependencies
cd api && npm install
cd ../ai-service && pip install -r requirements.txt

# Copy environment files
cp .env.example .env
cp api/.env.example api/.env
cp ai-service/.env.example ai-service/.env
```

### 2. Create Your Feature Branch

```bash
git checkout -b feature/your-descriptive-name
```

Branch naming convention:
- `feature/` - new features
- `fix/` - bug fixes
- `docs/` - documentation updates
- `test/` - test additions
- `refactor/` - code refactoring

### 3. Make Changes

- Write clear, readable code
- Follow existing code style
- Add tests for new functionality
- Update documentation as needed

### 4. Run Tests

```bash
# API tests
cd api && npm test

# AI service tests
cd ai-service && pytest
```

### 5. Commit Messages

Use clear, descriptive commit messages:

```
feat: add changelog caching mechanism
fix: resolve JWT token validation issue
docs: update API documentation
test: add tests for auth middleware
refactor: simplify changelog processing logic
```

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear description of changes
- Related issue numbers (if any)
- Screenshots/examples (if applicable)

## Pull Request Guidelines

- Link to relevant issues
- Provide clear description of changes
- Keep PRs focused on single features
- Ensure all tests pass
- Update documentation
- Request review from maintainers

## Code Style

### TypeScript/JavaScript (Node.js)

- Use ESLint configuration
- 2-space indentation
- Use async/await over promises
- Add JSDoc comments for public APIs
- Use meaningful variable names

### Python (AI Service)

- Follow PEP 8
- Use type hints
- Add docstrings to functions
- Use meaningful variable names
- Maximum line length: 100 characters

### C# (Azure Functions)

- Follow Microsoft C# conventions
- Use async/await
- Add XML documentation
- Use meaningful class and method names

## Testing

### API Tests

```bash
cd api
npm test                    # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

### AI Service Tests

```bash
cd ai-service
pytest                    # Run all tests
pytest -v               # Verbose output
pytest --cov           # Coverage report
```

### Integration Tests

```bash
# Start services
docker-compose up

# Run integration tests
cd api && npm run test:integration
```

## Documentation

If your changes affect:
- API endpoints: Update `docs/API.md`
- Deployment: Update `docs/DEPLOYMENT.md`
- Architecture: Update `docs/ARCHITECTURE.md`
- Setup: Update `README.md` or `docs/SETUP.md`

## Reporting Issues

1. Check if issue already exists
2. Provide clear title and description
3. Include:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details
   - Error logs/stack traces

## Feature Requests

1. Check if feature already requested
2. Provide clear description
3. Include:
   - Use case/problem it solves
   - Proposed solution
   - Alternative approaches
   - Impact assessment

## Review Process

1. Maintainers review code
2. Changes requested if needed
3. Author addresses feedback
4. Approved and merged
5. Deployed in next release

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Release notes
- Project README (major contributions)

## Questions?

Feel free to:
- Open a discussion
- Ask in issues
- Contact maintainers

Thank you for contributing! 🎉
