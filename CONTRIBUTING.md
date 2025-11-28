# Contributing to mx-sdk-dapp

Thank you for your interest in contributing to mx-sdk-dapp! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker to report bugs
- Describe the issue in detail, including steps to reproduce
- Include relevant code snippets, error messages, and environment details

### Submitting Pull Requests

#### Before You Start

1. Check existing issues and PRs to avoid duplicates
2. For significant changes, open an issue first to discuss your approach
3. Make sure your changes align with the project's goals

#### Pull Request Guidelines

**For Code Changes:**
- Write clear, concise commit messages
- Add tests for new functionality
- Ensure all tests pass (`npm test`)
- Update documentation as needed
- Follow the existing code style

**For Documentation Changes:**
- **Please batch multiple small fixes together** rather than creating separate PRs for individual typos or grammar fixes
- When fixing one issue, consider reviewing the entire file or section for similar issues
- Significant documentation improvements (new sections, restructuring, etc.) can be submitted separately

**For Bug Fixes:**
- Include steps to reproduce the bug
- Add test cases that verify the fix

#### What We Look For

✅ **Good PRs:**
- Multiple related documentation fixes in one PR
- Bug fixes with test coverage
- New features with documentation and tests
- Performance improvements with benchmarks

❌ **Please Avoid:**
- Separate PRs for individual typo fixes
- Changes without context or explanation
- Breaking changes without discussion
- Commits that don't pass tests

### Development Setup

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Make your changes
4. Run tests: `pnpm test`
5. Build the library: `pnpm build`

### Testing

- Write unit tests for new functionality
- Ensure all tests pass before submitting
- Aim for good test coverage
- Test edge cases and error conditions

### Commit Messages

Write clear commit messages that describe what changed and why:

```
feat: add support for custom transaction tracking

- Adds customizable tracking options
- Updates documentation
- Includes unit tests
```

### Code Review Process

- Maintainers will review your PR as soon as possible
- Address any feedback or requested changes
- Once approved, a maintainer will merge your PR

### Questions?

Feel free to:
- Open an issue for questions about contributing
- Ask in PR comments if you need clarification
- Reach out to maintainers for guidance on complex changes

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping make mx-sdk-dapp better! 🚀

