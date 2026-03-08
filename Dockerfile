FROM node:lts-buster

# Install essential dependencies for stickers and media
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get clean

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install node dependencies
RUN npm install && npm install -g pm2

# Expose port (ensure it matches your bot's config)
EXPOSE 9090

# Start HAMZA-MD using PM2
CMD ["pm2-runtime", "start", "index.js"]
