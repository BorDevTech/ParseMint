# ParseMint - Digital Rewards Platform

ParseMint is a Next.js 15 web application built with TypeScript and Tailwind CSS that provides a digital rewards platform accepting receipts and providing monetary value points to users.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Environment Setup and Dependencies
- Install dependencies: `npm install` -- takes 20-51 seconds depending on cache state. NEVER CANCEL. Set timeout to 120+ seconds.
- Node.js v20.19.5 and npm v10.8.2 are required.

### Development Workflow
- Start development server: `npm run dev` -- starts in ~1 second. Application runs on http://localhost:3000
- Lint code: `npm run lint` -- takes 2 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
- Build application: `npm run build` -- takes 14 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- Start production server: `npm run start` -- starts in ~1 second after build. Application runs on http://localhost:3000

### Build Configuration Notes
- **CRITICAL**: The application uses Google Fonts (Geist and Geist Mono) which fail in sandboxed environments without internet access.
- **WORKAROUND FOR SANDBOXED ENVIRONMENTS**: If build fails with Google Fonts errors, modify `app/layout.tsx` to use fallback font configurations instead of importing from `next/font/google`.
- Replace the Google Font imports with simple object configurations:
  ```typescript
  // Replace this:
  import { Geist, Geist_Mono } from "next/font/google";
  const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
  
  // With this:
  const geistSans = { variable: "--font-geist-sans" };
  ```
- **NOTE**: In normal development environments with internet access, the original Google Fonts setup works correctly.

## Validation and Testing

### Manual Validation Requirements
**ALWAYS perform these validation steps after making changes:**
1. Start the development server: `npm run dev`
2. Navigate to http://localhost:3000 in browser
3. Verify the homepage loads with Next.js logo and navigation elements
4. Test interactivity by clicking on links (Deploy now, Read our docs, Learn, Examples)
5. Verify styling and layout appear correct
6. Stop development server and run production build: `npm run build && npm run start`
7. Test production version at http://localhost:3000 to ensure no regression

### Pre-commit Validation
**ALWAYS run these commands before committing changes:**
- `npm run lint` -- must pass with no errors or warnings
- `npm run build` -- must complete successfully

### Testing Notes
- **NO EXISTING TESTS**: This repository does not include any test framework or test files
- **MANUAL TESTING ONLY**: All validation must be done through manual browser testing
- **NO TEST SCRIPTS**: Do not attempt to run `npm test` as no test script exists

## Application Structure

### Key Files and Directories
```
/home/runner/work/ParseMint/ParseMint/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component with font configurations
│   ├── page.tsx           # Homepage component 
│   └── globals.css        # Global styles with Tailwind imports
├── public/                # Static assets (SVG icons, images)
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
├── eslint.config.mjs      # ESLint configuration
├── tsconfig.json          # TypeScript configuration
└── postcss.config.mjs     # PostCSS configuration for Tailwind
```

### Configuration Files
- **ESLint**: Uses Next.js recommended rules with TypeScript support
- **TypeScript**: Configured for Next.js with path aliases (`@/*` maps to `./`)
- **Tailwind CSS**: Configured via PostCSS with custom theme variables
- **Next.js**: Basic configuration with Turbopack for faster builds

## Technology Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Components**: Chakra UI React 3.26.0
- **Build Tool**: Next.js with Turbopack (faster builds)
- **Runtime**: Node.js 20.19.5

## Common Issues and Solutions

### Build Failures
- **Google Fonts Error**: Modify `app/layout.tsx` to use fallback font configurations (see Build Configuration Notes above)
- **Network Timeouts**: Ensure adequate timeout values for build commands (60+ seconds)

### Development Issues
- **Port Already in Use**: Kill existing processes on port 3000 or use different port
- **Hot Reload Not Working**: Restart development server with `npm run dev`

## Performance Notes
- **Turbopack**: Enabled for both dev and build for faster compilation
- **Build Time**: ~14 seconds for clean build
- **Dev Server Startup**: ~1 second
- **Production Server Startup**: ~1 second after build

## Quick Reference Commands
```bash
# Essential workflow
npm install                 # Install dependencies (20s)
npm run dev                # Start development server (1s)
npm run build              # Build for production (14s)
npm run start              # Start production server (1s) 
npm run lint               # Lint code (2s)

# Validation commands (always run before committing)
npm run lint && npm run build

# Manual testing
# 1. Start dev server: npm run dev
# 2. Open http://localhost:3000
# 3. Test homepage functionality
# 4. Build and test production: npm run build && npm run start
```

Remember: This is a fresh Next.js application with minimal customization. Most changes will involve modifying components in the `app/` directory and updating styles in `globals.css`.