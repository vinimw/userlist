# User Directory

A server-rendered user directory built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Jest.

The app fetches users from an external API, validates the response on the server, and renders a resilient UI with loading, empty, partial-error, and route-error states.

## Tech Stack

- Next.js 16.2.6 with the App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- Jest 30 and React Testing Library
- ESLint 9 with Next.js Core Web Vitals rules

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file with the API base URL:

```bash
API_URL=https://jsonplaceholder.typicode.com
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build and runs TypeScript validation.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint.

```bash
npm test
```

Runs the Jest test suite.

```bash
npm run test:coverage
```

Runs tests and generates coverage reports.

## Project Structure

```text
app/
  components/       Reusable UI components and component tests
  services/         Server-side data access and service tests
  types/            Shared TypeScript domain types
  error.tsx         Route error boundary
  loading.tsx       Route loading skeleton
  page.tsx          Home page
```

## Data Fetching

User data is loaded in `app/services/users.ts` using the server-side `fetch` API. The request is revalidated every 60 seconds and tagged as `users`.

The service returns an explicit result object:

```ts
{
  users: User[];
  error?: string;
}
```

This keeps API failures, invalid payloads, and empty lists distinct in the UI.

## Testing

The test suite covers:

- User card rendering and links
- User list success, empty, and error states
- User service validation, sanitization, API errors, and network failures

Run all tests with:

```bash
npm test
```
