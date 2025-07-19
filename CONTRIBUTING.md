# Contributing to GDGOC USC

Thank you for your interest in contributing to the GDGOC USC website! 🎉 We welcome contributions
from everyone, whether you're a seasoned developer or just getting started.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Process](#contributing-process)
- [Code Standards](#code-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Deployment](#deployment)
- [Community Guidelines](#community-guidelines)
- [Getting Help](#getting-help)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** (v1.0.0 or higher) - [Installation Guide](https://bun.sh/docs/installation)
- **Git** - [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)
- **Node.js** (v18 or higher) - Only if you prefer npm/yarn over Bun

### Technologies Used

- **Astro** - Static site generator
- **React** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **GSAP** - Animations
- **Vitest** - Testing framework

## 💻 Development Setup

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/your-username/gdgoc-usc.git
   cd gdgoc-usc
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Install Recommended VS Code Extensions**
   - Open VS Code in the project directory
   - When prompted, install the recommended extensions
   - Or manually install:
     - Astro
     - Prettier - Code formatter
     - ESLint
     - TypeScript and JavaScript Language Features

4. **Start Development Server**

   ```bash
   bun run dev
   ```

5. **Verify Setup**
   - Open [http://localhost:4321](http://localhost:4321)
   - You should see the GDGOC USC website
   - Make a small change to verify hot reloading works

## 📁 Project Structure

```
gdgoc-usc/
├── .astro/                 # Astro build artifacts
├── .github/                # GitHub workflows and templates
├── .husky/                 # Git hooks
├── .vscode/                # VS Code settings
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # React components
│   │   ├── animated/      # Animation components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── react-bits/    # From reactbits.dev
│   │   └── __tests__/     # Component tests
│   ├── config/            # Configuration files and data
│   ├── layouts/           # Astro layouts
│   ├── pages/             # Astro pages (routes)
│   ├── styles/            # Global styles
│   └── test/              # Test utilities and setup
├── astro.config.mjs       # Astro configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vitest.config.ts       # Test configuration
```

## 🔄 Contributing Process

### 1. Choose an Issue

- Check the [Issues](https://github.com/gdgoc-usc/gdgoc-usc/issues) page
- Look for issues labeled `good first issue` for beginners
- Comment on the issue to let others know you're working on it

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix-name
```

### 3. Make Your Changes

- Write clean, readable code
- Follow the established patterns
- Add tests for new functionality
- Update documentation if needed

### 4. Test Your Changes

```bash
# Run all checks
bun run validate

# Individual commands
bun run format:check    # Check formatting
bun run lint:check      # Check linting
bun run type-check      # Check TypeScript
bun run test:run        # Run tests
```

### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Use conventional commits
git commit -m "feat: add team member card component"
# or use commitizen for guided commits
bun run commit
```

### 6. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📏 Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type - use `unknown` if necessary
- Use type assertions sparingly

### File Naming

- Use PascalCase for components: `TeamCard.tsx`
- Use camelCase for utilities: `formatDate.ts`
- Use (preferably) single-word, PascalCase for pages: `About.astro` (not `AboutUs.astro`)
- Use lowercase for directories: `components/`

### Code Organization

- Group related functionality
- Keep files under 300 lines when possible
- Extract reusable logic into custom hooks
- Use barrel exports (`index.ts`) for cleaner imports

### Performance

- Optimize images and assets
- Use lazy loading where appropriate
- Minimize bundle size
- Test performance impact of changes

## 📝 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes

### Examples

```bash
feat: add team member filtering functionality
fix: resolve mobile navigation menu overflow
docs: update contributing guidelines
style: format code with prettier
refactor: extract common utility functions
test: add unit tests for team data parsing
```

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests pass locally
- [ ] Documentation updated if needed
- [ ] No new warnings or errors introduced

### PR Requirements

- **Clear Title**: Use descriptive title following conventional commits
- **Description**: Fill out the PR template completely
- **Screenshots**: Include before/after screenshots for UI changes
- **Testing**: Describe how changes were tested
- **Breaking Changes**: Document any breaking changes

### Review Process

1. **Automated Checks**: All CI checks must pass
2. **Code Review**: At least one maintainer approval required
3. **Testing**: Manual testing of functionality
4. **Merge**: Squash and merge when approved

## 🧪 Testing

### Writing Tests

- Write tests for new functionality
- Test edge cases and error conditions
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Test Types

```bash
# Unit tests
bun run test

# Integration tests
bun run test:integration

# Visual regression tests (when available)
bun run test:visual

# Coverage report
bun run test:coverage
```

### Test Structure

```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Arrange
    const props = { title: 'Test' };

    // Act
    render(<ComponentName {...props} />);

    // Assert
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 🚀 Deployment

### Environments

- **Development**: Local development server
- **Preview**: Vercel preview deployments for PRs
- **Production**: Main branch auto-deploys to production

### Deployment Process

1. Changes merged to `main` branch
2. GitHub Actions runs CI/CD pipeline
3. Automated deployment to Vercel

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Celebrate diverse perspectives

### Communication

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Pull Requests**: Code review and collaboration
- **Discord**: Real-time chat (link in README)

## 🆘 Getting Help

### Resources

- **Documentation**: Check the README and wiki
- **Code Examples**: Look at existing components
- **Issues**: Search existing issues and discussions

### Contact

- **Project Maintainers**: Tag `@maintainers` in issues
- **Discord Community**: Join our Discord server
- **Email**: gdscsancarlos.externals@gmail.com

### Common Issues

- **Build Errors**: Ensure all dependencies are installed
- **Type Errors**: Check TypeScript configuration
- **Style Issues**: Run `bun run format` to fix formatting
- **Test Failures**: Check test setup and dependencies

## 📚 Learning Resources

### Beginner Friendly

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Advanced Topics

- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Web Performance Optimization](https://web.dev/performance/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Thank you for contributing to GDGOC USC! Your efforts help make our community website better for
everyone. 🙌

If you have questions about these guidelines or need help getting started, please don't hesitate to
reach out. We're here to help! 💪
