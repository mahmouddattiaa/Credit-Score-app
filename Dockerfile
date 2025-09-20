FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install serve globally for web hosting
RUN npm install -g serve

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build web version
RUN npm run build:web

# Expose port
EXPOSE 8080

# Start web server
CMD ["serve", "-s", "dist", "-l", "8080"]
