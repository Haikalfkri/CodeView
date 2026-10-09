# CodeView

**A full-stack technical interview platform for collaborative coding and
real-time video interviews.**

CodeView is a web application designed to support technical interviews
by bringing collaborative coding and real-time video communication into
one place. It combines a React.js frontend with a Node.js/Express
backend to provide an integrated interview experience.

> **Project status:** Portfolio project. Some setup details may depend
> on the environment and third-party service configuration.

## Overview

Technical interviews often require candidates and interviewers to switch
between separate tools for video calls, coding exercises, and
communication. CodeView aims to bring key parts of that experience
together in a single application.

The project focuses on full-stack development, authentication, real-time
communication, and background processing.

## Key Features

-   **Real-time video interviews** --- video communication powered by
    GetStream/WebRTC.
-   **Collaborative coding experience** --- an interview-oriented coding
    interface inspired by LeetCode-style technical exercises.
-   **Authentication** --- user authentication integrated with Clerk.
-   **Role-based access control** --- access behavior based on user
    roles.
-   **Asynchronous background jobs** --- background processing
    integrated with Inngest.
-   **Full-stack architecture** --- separate frontend and backend
    applications.
-   **Deployment** --- the application was deployed on Sevalla.

*Feature availability may depend on the current deployment and
configured third-party services.*

## Tech Stack

  Layer             Technology
  ----------------- ---------------------
  Frontend          React.js
  Backend           Node.js, Express.js
  Database          MongoDB
  Authentication    Clerk
  Real-time video   GetStream / WebRTC
  Background jobs   Inngest
  Deployment        Sevalla

## Architecture

CodeView separates the client interface from backend services:

``` text
CodeView
├── frontend/    React.js application
├── backend/     Node.js / Express.js application
└── package.json Root-level build and start scripts
```

The frontend provides the user-facing interview experience. The backend
handles server-side application functionality and integrates with the
configured services. Clerk supports authentication and access control,
GetStream supports real-time video communication, and Inngest is used
for asynchronous background jobs.

## Getting Started

### Prerequisites

Before running the project locally, install:

-   [Node.js](https://nodejs.org/) and npm
-   Access credentials for the external services used by the
    application, as required by its configuration

### 1. Clone the repository

``` bash
git clone https://github.com/Haikalfkri/CodeView.git
cd CodeView
```

### 2. Configure environment variables

Review the configuration and environment-variable references in the
`backend` and `frontend` directories. Create the required local
environment files and add your own service credentials.

Typical integrations may require credentials for Clerk, GetStream,
Inngest, and MongoDB, depending on how the application is configured.

**Do not commit API keys, database credentials, private tokens, or other
secrets to Git.**

### 3. Install dependencies and build the frontend

From the repository root, run:

``` bash
npm run build
```

The root build script installs dependencies for the backend and
frontend, then runs the frontend build.

### 4. Start the backend

From the repository root, run:

``` bash
npm start
```

This invokes the backend's configured start script. Check the backend
configuration for the expected port and any additional services that
must be running.

### 5. Open the application

Follow the frontend and backend configuration to determine the local URL
and port. If the application is deployed, use the current deployment
URL.

> **Note:** Exact environment-variable names, database initialization
> steps, and local URLs should be confirmed against the current source
> code and service configuration.

## Project Structure

``` text
CodeView/
├── backend/
├── frontend/
├── .gitignore
└── package.json
```

## Engineering Highlights

This project demonstrates experience with:

-   Building and organizing a full-stack JavaScript application
-   Developing a backend with Node.js and Express.js
-   Integrating third-party authentication and real-time communication
    services
-   Supporting role-based access control
-   Using background jobs for asynchronous workflows
-   Working with MongoDB and external service configuration
-   Preparing a web application for deployment

## Future Improvements

Potential areas for further development include:

-   Adding automated tests for critical user flows and API endpoints
-   Documenting API endpoints and request/response examples
-   Providing screenshots or a short demo video
-   Adding detailed local-development and deployment instructions
-   Improving error handling and observability for third-party
    integrations

## Links

-   **GitHub repository:** https://github.com/Haikalfkri/CodeView
-   **Developer GitHub profile:** https://github.com/Haikalfkri

## Author

**Haikal Fikri**\
Software Engineer

------------------------------------------------------------------------

*Built as a full-stack project exploring collaborative technical
interviews, real-time communication, and application integrations.*
