# 🛠️ Project Maintainability Setup

This document outlines the comprehensive maintainability toolchain set up for the GDGOC USC project,
designed to ensure code quality, consistency, and smooth collaboration for multiple contributors.

## 🎯 Overview

This project is configured with a professional-grade development toolchain that includes:

- **Code Quality**: ESLint, TypeScript, Prettier
- **Testing**: Vitest, Testing Library
- **Git Workflow**: Husky, lint-staged, Commitlint
- **CI/CD**: GitHub Actions
- **Documentation**: Comprehensive templates and guidelines

## 📦 Installed Packages

### Core Development Tools

```json
{
  "prettier": "^3.6.2",
  "prettier-plugin-astro": "^0.14.1",
  "eslint": "^9.31.0",
  "typescript-eslint": "^8.37.0",
  "@typescript-eslint/eslint-plugin": "^8.37.0",
  "@typescript-eslint/parser": "^8.37.0"
}
```

### Testing Framework

```json
{
  "vitest": "^3.2.4",
  "@vitest/ui": "^3.2.4",
  "jsdom": "^26.1.0",
  "@testing-library/react": "^16.3.0",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/user-event": "^14.6.1"
}
```

### Git Workflow & Commit Standards

```json
{
  "husky": "^9.1.7",
  "lint-staged": "^16.1.2",
  "@commitlint/cli": "^19.8.1",
  "@commitlint/config-conventional": "^19.8.1",
  "commitizen": "^4.3.1",
  "cz-conventional-changelog": "^3.3.0"
}
```

## 🔧 Configuration Files

### Code Quality

- **`.prettierrc`** - Prettier configuration with Astro support
- **`.prettierignore`** - Files to exclude from formatting
- **`eslint.config.js`** - ESLint configuration for TypeScript/React
- **`tsconfig.json`** - Enhanced TypeScript configuration with path mapping

### Testing

- **`vitest.config.ts`** - Vitest configuration for React components
- **`src/test/setup.ts`** - Test environment setup and mocks

### Git Hooks & Commits

- **`.husky/pre-commit`** - Runs lint-staged before commits
- **`.husky/commit-msg`** - Validates commit messages
- **`.lintstagedrc.js`** - Pre-commit file processing
- **`.commitlintrc.js`** - Commit message validation rules

### CI/CD

- **`.github/workflows/ci.yml`** - Complete CI/CD pipeline
- **`.github/pull_request_template.md`** - PR template
- **`.github/ISSUE_TEMPLATE/`** - Issue templates (bug reports, feature requests)

### Documentation

- **`CONTRIBUTING.md`** - Comprehensive contributing guidelines
- **`MAINTAINABILITY.md`** - This file

## 🚀 Available Scripts

### Development Workflow

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Code Quality

```bash
# Format all files
bun run format

# Check formatting without changes
bun run format:check

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Check linting with zero warnings allowed
bun run lint:check

# Type check
bun run type-check
```

### Testing

```bash
# Run tests in watch mode
bun run test

# Run tests once
bun run test:run

# Run tests with UI
bun run test:ui

# Generate coverage report
bun run test:coverage
```

### Validation & CI

```bash
# Run all quality checks (format, lint, type-check, tests)
bun run validate

# CI command (same as validate)
bun run ci

# Guided commit creation
bun run commit
```

## 🔄 Workflow for Contributors

### 1. Setup

```bash
# Clone and install
git clone <repo-url>
cd gdgoc-usc
bun install

# Verify setup
bun run validate
```

### 2. Development Process

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
bun run dev
bun run validate

# Commit with conventional format
git add .
bun run commit  # Guided commit creation
# or
git commit -m "feat: add new component"

# Push and create PR
git push origin feature/your-feature-name
```

### 3. Pre-commit Hooks

Automatically runs on every commit:

- **Formatting**: Prettier formats staged files
- **Linting**: ESLint fixes code issues
- **Type checking**: TypeScript validates types
- **Testing**: Runs tests for changed files
- **Commit validation**: Ensures conventional commit format

## 🎨 Code Standards

### File Naming Conventions

- **Components**: `PascalCase.tsx` (e.g., `TeamCard.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `formatDate.ts`)
- **Pages**: `kebab-case.astro` (e.g., `about-us.astro`)
- **Directories**: `lowercase` (e.g., `components/`)

### TypeScript Standards

- Use proper type definitions
- Avoid `any` type (use `unknown` if needed)
- Define interfaces for props and data structures
- Use path aliases (`@/` for `src/`)

### React Standards

- Functional components with hooks
- Properly typed props with interfaces
- Meaningful component names
- Single responsibility components

### CSS/Styling Standards

- Use Tailwind CSS classes
- Mobile-first responsive design
- Semantic HTML elements
- WCAG AA accessibility compliance

## 🚦 CI/CD Pipeline

### Automated Checks (GitHub Actions)

- **Code Quality**: Formatting, linting, type checking
- **Testing**: Unit tests with coverage reporting
- **Build**: Ensure project builds successfully
- **Security**: Dependency vulnerability scanning
- **Performance**: Lighthouse audit on PRs

### Deployment

- **Preview**: Automatic Vercel preview for PRs
- **Production**: Auto-deploy `main` branch to production
- **Notifications**: Slack alerts for deployment status

## 🧪 Testing Strategy

### Test Types

- **Unit Tests**: Component behavior and utilities
- **Integration Tests**: Component interactions
- **Visual Regression**: UI consistency (future)
- **E2E Tests**: Full user workflows (future)

### Test Organization

```
src/
├── components/
│   ├── __tests__/          # Component tests
│   └── ComponentName.tsx
├── test/
│   ├── setup.ts           # Test configuration
│   └── utils.ts           # Test utilities
```

### Coverage Requirements

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 📈 Quality Metrics

### Code Quality Gates

- ✅ All tests pass
- ✅ Zero linting errors
- ✅ TypeScript type checking passes
- ✅ Code coverage meets thresholds
- ✅ No security vulnerabilities
- ✅ Performance benchmarks met

### PR Requirements

- ✅ Automated checks pass
- ✅ At least one reviewer approval
- ✅ Conventional commit messages
- ✅ Updated documentation if needed
- ✅ Screenshots for UI changes

## 🔧 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clean install
rm -rf node_modules bun.lock
bun install

# Clear build cache
rm -rf .astro dist
bun run build
```

#### Lint/Format Issues

```bash
# Fix formatting
bun run format

# Fix linting
bun run lint:fix

# Reset to defaults
git checkout -- .
```

#### Test Failures

```bash
# Clear test cache
bunx vitest --run --reporter=verbose

# Check test setup
bun run test:ui
```

#### Type Errors

```bash
# Check TypeScript config
bun run type-check

# Verify path mappings
cat tsconfig.json
```

### Getting Help

- **Documentation**: Check `CONTRIBUTING.md`
- **Issues**: Search existing GitHub issues
- **Discord**: Join the community chat
- **Maintainers**: Tag `@maintainers` in issues

## 📚 Learning Resources

### Project-Specific

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Best Practices

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Web Accessibility](https://web.dev/accessibility/)
- [Performance Optimization](https://web.dev/performance/)

## 🔮 Future Enhancements

### Planned Additions

- **Visual Regression Testing**: Chromatic integration
- **E2E Testing**: Playwright setup
- **Performance Monitoring**: Web Vitals tracking
- **Bundle Analysis**: Size optimization tools
- **Dependency Management**: Automated updates
- **Security Scanning**: CodeQL integration

### Monitoring

- **Error Tracking**: Sentry integration
- **Analytics**: Performance metrics
- **User Feedback**: Issue tracking
- **Code Quality**: SonarQube analysis

## 📊 Metrics Dashboard

Track project health with:

- **Code Coverage**: Displayed in PRs
- **Build Success Rate**: GitHub Actions dashboard
- **Performance Scores**: Lighthouse CI reports
- **Dependency Health**: Dependabot alerts
- **Community Metrics**: Contributor statistics

---

## 🎉 Conclusion

This maintainability setup provides a solid foundation for collaborative development. It ensures:

- **Consistent Code Quality**: Automated formatting and linting
- **Reliable Testing**: Comprehensive test coverage
- **Smooth Collaboration**: Clear processes and documentation
- **Continuous Integration**: Automated quality gates
- **Professional Workflow**: Industry-standard practices

The toolchain is designed to scale with your project and team, making it easier to onboard new
contributors and maintain high code quality as the project grows.

For questions or improvements to this setup, please open an issue or reach out to the maintainers.
Happy coding! 🚀
