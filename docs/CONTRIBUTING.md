# Contributing to iScore

Thank you for your interest in contributing to iScore! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/project.git
   cd project
   ```
3. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Development Setup

### Prerequisites
- Node.js 18+
- Expo CLI
- Android Studio or Xcode
- Git

### Installation
```bash
# Install dependencies
npm install

# Install email server dependencies
cd email-server && npm install && cd ..

# Start development
npm run dev
```

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing naming conventions
- Use meaningful variable and function names
- Add comments for complex logic

### Component Structure
```tsx
// components/MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface MyComponentProps {
  title: string;
  onPress?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
```

### Commit Message Format
```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting
- refactor: code restructuring
- test: adding tests
- chore: maintenance

Example: feat(auth): add email verification flow
```

## 🧪 Testing

### Running Tests
```bash
# Run linting
npm run lint

# Test email server
cd email-server && npm test
```

### Writing Tests
- Add unit tests for new components
- Test user interactions and edge cases
- Ensure email server endpoints work correctly

## 📱 Platform Testing

Test your changes on:
- iOS Simulator/Device
- Android Emulator/Device
- Web browser (Expo web)

## 🔒 Security Considerations

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Validate all user inputs
- Follow React Native security best practices

## 📋 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** with your changes
5. **Create a detailed PR description**:
   ```markdown
   ## Changes
   - Brief description of changes
   
   ## Testing
   - How you tested the changes
   
   ## Screenshots
   - Before/after screenshots if UI changes
   ```

## 🐛 Bug Reports

Create an issue with:
- **Environment details** (OS, device, Expo version)
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots or logs**

## 💡 Feature Requests

Create an issue with:
- **Problem description**
- **Proposed solution**
- **Alternative solutions considered**
- **Additional context**

## 📚 Documentation

- Update README.md for new features
- Add inline code comments
- Update API documentation
- Include examples for complex features

## 🤝 Code Review

All contributions require code review:
- Be respectful and constructive
- Explain the reasoning behind suggestions
- Test the proposed changes
- Approve when satisfied with quality

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## ❓ Questions

If you have questions:
- Create a GitHub issue
- Contact the maintainer
- Check existing documentation first

Thank you for contributing to iScore! 🙏
