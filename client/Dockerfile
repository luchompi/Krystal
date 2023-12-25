FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . /app

# Start the application
CMD ["yarn", "dev"]