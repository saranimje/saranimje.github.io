# Overview

This is a gamified personal portfolio website called "Pixel Knight Resume" built with a fantasy RPG theme. The application presents a developer's resume as an interactive story-driven experience, featuring pixel art aesthetics, themed navigation, and gamified content sections including education timeline, experience trials, project dragons, and certifications. The site includes light/dark mode theming and is designed to showcase a developer's journey through a medieval fantasy lens.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with pages for Home, Education, Experience, Projects, Certifications, and Contact
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring fantasy-themed color schemes (dark purple, emerald, royal gold, prussian blue)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query for server state and local React state for UI interactions
- **Theming**: Context-based theme provider supporting light/dark modes with persistent storage

## Backend Architecture
- **Server**: Express.js with TypeScript using ES modules
- **Development Setup**: Vite middleware integration for hot module replacement during development
- **Routing**: Centralized route registration system with API prefix structure
- **Error Handling**: Global error middleware with structured error responses
- **Static Serving**: Vite handles static assets in development, Express serves built assets in production

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL integration
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Validation**: Zod schemas integrated with Drizzle for runtime type checking

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Model**: Basic user schema with username/password authentication ready for implementation
- **Security**: Prepared infrastructure for session-based authentication with secure cookie handling

## External Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **Email/Contact**: Form submission handling infrastructure (implementation pending)
- **Fonts**: Google Fonts integration for fantasy-themed typography (Cinzel Decorative, Old Standard TT, Uncial Antiqua)
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit integration with runtime error overlay and cartographer plugins

The architecture follows a clean separation between client and server with shared type definitions, enabling full-stack type safety. The fantasy theme is consistently applied across all components with custom animations and pixel art styling elements.