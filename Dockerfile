# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port (will be overridden by Coolify)
EXPOSE 8080

# Start the server (uses PORT from environment variable set by Coolify)
CMD sh -c "serve -s dist -l ${PORT:-8080}"

