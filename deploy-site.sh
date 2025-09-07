#!/bin/bash

# Deployment script for jeremybassi.com
# Based on the Git deployment method from DEPLOY.md

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

echo "📥 Pulling latest changes from Git..."
git pull origin main

echo "📦 Installing/updating dependencies..."
# Check if bun is installed, install if not
if ! command -v bun &> /dev/null; then
    echo "Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    # Source the profile to make bun available in current session
    source ~/.bashrc
fi

bun install

echo "🏗️  Building site..."
bun run build

echo "🚀 Deploying to web directory..."
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/

echo "✅ Site deployed successfully!"

# Get the server's IP address
SERVER_IP=$(hostname -I | awk '{print $1}')
echo "🌐 Your site is now live at: http://$SERVER_IP"
echo "📍 Server IP: $SERVER_IP"
