# Deployment Guide - Debian VM

This guide covers deploying your static website to a Debian Linux VM.

## 🏗️ Build Process (Local Development)

### Development Workflow:
```bash
# Development (with auto-rebuild)
bun run dev        # Watches for changes and rebuilds CSS

# Build for production
bun run build      # Creates optimized static files in dist/

# Preview built site
bun run preview    # Serves dist/ folder on port 3000
```

### What the build creates:
```
dist/
├── index.html     # Your website
├── styles.css     # Minified TailwindCSS
└── favicon.svg    # Icon
```

## 🚀 Debian VM Deployment

### Option 1: Nginx (Recommended)

**1. Install Nginx:**
```bash
sudo apt update
sudo apt install nginx
```

**2. Deploy your site:**
```bash
# Copy built files to web directory
sudo cp -r dist/* /var/www/html/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

**3. Configure Nginx (optional custom config):**
```bash
sudo nano /etc/nginx/sites-available/jeremybassi.com
```

```nginx
server {
    listen 80;
    server_name jeremybassi.com www.jeremybassi.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript;
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**4. Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/jeremybassi.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: Apache

**1. Install Apache:**
```bash
sudo apt update
sudo apt install apache2
```

**2. Deploy your site:**
```bash
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

**3. Enable modules (optional):**
```bash
sudo a2enmod rewrite
sudo a2enmod deflate
sudo systemctl restart apache2
```

### Option 3: Simple HTTP Server (Development/Testing)

**For quick testing:**
```bash
# In your dist/ directory
python3 -m http.server 8000
# or
php -S 0.0.0.0:8000
```

## 🔄 Deployment Automation

### Simple Deployment Script:
```bash
#!/bin/bash
# deploy.sh

echo "Building site..."
bun run build

echo "Copying to web directory..."
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/

echo "Deployment complete!"
```

### With Git (Recommended):
```bash
#!/bin/bash
# On your Debian VM

# Clone/update repository
git pull origin main

# Install dependencies (only needed once)
curl -fsSL https://bun.sh/install | bash
bun install

# Build site
bun run build

# Deploy
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/

echo "Site deployed successfully!"
```

## 🔒 Security & Performance

### SSL Certificate (Let's Encrypt):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d jeremybassi.com -d www.jeremybassi.com
```

### Firewall:
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

### Performance optimizations:
- ✅ Gzip compression (built into config)
- ✅ Static asset caching
- ✅ Minified CSS (from build process)
- ✅ Optimized images (SVG favicon)

## 📁 File Structure on Server

```
/var/www/html/
├── index.html      # Your website
├── styles.css      # Minified TailwindCSS (~5KB)
└── favicon.svg     # Icon
```

## 🎯 Why This Approach is Perfect for Debian:

1. **No Runtime Dependencies**: Pure HTML/CSS - no Node.js needed on server
2. **Tiny Footprint**: ~5KB CSS file, single HTML file
3. **Fast**: Static files served directly by Nginx/Apache
4. **Secure**: No server-side code execution
5. **Easy Backup**: Just copy HTML/CSS files
6. **CDN Ready**: Can easily add CloudFlare/etc later

## 📊 Performance Benefits:

- **Load Time**: < 1 second (tiny files + static serving)
- **Bandwidth**: Minimal (no JavaScript framework overhead)
- **Server Resources**: Nearly zero CPU/RAM usage
- **Caching**: Perfect for CDN/browser caching

This setup gives you production-grade performance with minimal complexity!
