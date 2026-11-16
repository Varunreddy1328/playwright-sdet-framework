# Playwright SDET Framework

A portfolio-ready UI and API automation framework built with Playwright and TypeScript. It demonstrates page objects, reliable assertions, API testing, failure artefacts, and GitHub Actions CI.

## What it covers

- UI login tests against SauceDemo
- Page Object Model (`src/pages`)
- API test with an API client (`src/api`)
- Trace, screenshot, and video on failure
- HTML report
- CI workflow for every push and pull request

## Run locally

```bash
npm install
npx playwright install chromium
npm test
npm run report
```

If your machine has a restricted global Playwright cache, install browsers into the project instead:

```bash
PLAYWRIGHT_BROWSERS_PATH=./.playwright-browsers npx playwright install chromium
PLAYWRIGHT_BROWSERS_PATH=./.playwright-browsers npm test
```

## Interview walkthrough

“I separated test intent from page interactions using page objects. The framework keeps tests readable, captures trace/video/screenshots only when needed, and runs automatically in GitHub Actions. In a production project, I would add environment-specific secrets, test-data factories, tags, and sharding as the suite grows.”

## Next improvements

1. Add cart and checkout workflows.
2. Add test-data factories and schema validation.
3. Run tagged smoke tests on pull requests and full regression nightly.
4. Use Playwright blob reports and merge reports when sharding CI jobs.
