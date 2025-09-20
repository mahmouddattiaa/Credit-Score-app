# Deployment Guide

## 📦 Deployment Options

### 1. Expo Development Build

For development and testing:

```bash
# Start development server
npm run dev

# For specific platform
npx expo start --ios
npx expo start --android
npx expo start --web
```

### 2. Production Builds

#### Web Deployment

```bash
# Build for web
npm run build:web

# Deploy to Netlify/Vercel
# Upload dist/ folder to your hosting provider
```

#### Mobile App Store Deployment

**iOS (Apple App Store):**
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for iOS
eas build --platform ios --profile production
```

**Android (Google Play Store):**
```bash
# Build for Android
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android
```

### 3. Email Server Deployment

#### Local Development
```bash
cd email-server
npm install
node server.js
```

#### Production (VPS/Cloud)

**Using PM2 (Recommended):**
```bash
# Install PM2 globally
npm install -g pm2

# Start email server with PM2
cd email-server
pm2 start server.js --name "iscore-email-server"

# Save PM2 configuration
pm2 save
pm2 startup
```

**Using Docker:**
```bash
# Build Docker image
cd email-server
docker build -t iscore-email-server .

# Run container
docker run -d \
  --name iscore-email \
  -p 3000:3000 \
  -e EMAIL_HOST=smtp.gmail.com \
  -e EMAIL_USER=your-email@gmail.com \
  -e EMAIL_PASS=your-app-password \
  iscore-email-server
```

#### Cloud Platforms

**Heroku:**
```bash
# Install Heroku CLI
# Create Heroku app
heroku create iscore-email-server

# Set environment variables
heroku config:set EMAIL_HOST=smtp.gmail.com
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password

# Deploy
git push heroku main
```

**DigitalOcean App Platform:**
1. Connect your GitHub repository
2. Set environment variables in the dashboard
3. Deploy automatically on push

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env` files for each environment:

**.env.production:**
```bash
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-password
API_BASE_URL=https://your-api.com
ENABLE_ANALYTICS=true
ENABLE_NOTIFICATIONS=true
```

**.env.staging:**
```bash
NODE_ENV=staging
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-staging-email@gmail.com
EMAIL_PASS=your-app-password
API_BASE_URL=https://staging-api.com
ENABLE_ANALYTICS=false
ENABLE_DEBUG_PANEL=true
```

## 🚀 CI/CD Pipeline

### GitHub Actions (Included)

The repository includes automated CI/CD:
- **Pull Requests**: Run tests and linting
- **Main Branch**: Build and deploy
- **Email Server**: Test email functionality

### Manual Deployment Steps

1. **Test locally:**
   ```bash
   npm test
   npm run lint
   npm run type-check
   ```

2. **Build production:**
   ```bash
   npm run build:web
   ```

3. **Deploy email server:**
   ```bash
   cd email-server
   pm2 restart iscore-email-server
   ```

## 🔒 Security Checklist

### Pre-deployment Security

- [ ] Environment variables configured (no hardcoded secrets)
- [ ] HTTPS enabled for all endpoints
- [ ] Email server using App Passwords (not account password)
- [ ] Input validation on all forms
- [ ] Rate limiting implemented
- [ ] Error messages don't expose sensitive info
- [ ] Dependencies updated (`npm audit`)

### Production Security

- [ ] Firewall configured
- [ ] SSL certificates installed
- [ ] Regular security updates scheduled
- [ ] Monitoring and alerting set up
- [ ] Backup strategy implemented
- [ ] Access logs configured

## 📊 Monitoring & Analytics

### Application Monitoring

**Expo Analytics:**
```javascript
// app.json
{
  "expo": {
    "analytics": {
      "enabled": true
    }
  }
}
```

**Error Tracking (Sentry):**
```bash
npm install @sentry/react-native

# Configure in app/_layout.tsx
import * as Sentry from '@sentry/react-native';
```

### Email Server Monitoring

**Health Check Endpoint:**
```javascript
// Add to server.js
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});
```

**Monitoring Tools:**
- **Uptime Robot**: Monitor server availability
- **Grafana**: Visualize metrics
- **PM2 Monitoring**: Built-in process monitoring

## 🔄 Backup & Recovery

### Database Backup (if applicable)
```bash
# MongoDB
mongodump --host localhost --db iscore --out backup/

# PostgreSQL
pg_dump iscore > backup/iscore_backup.sql
```

### File Backup
```bash
# Reports and assets
rsync -av assets/ backup/assets/
rsync -av reports/ backup/reports/
```

### Automated Backup Script
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/iscore_$DATE"

mkdir -p $BACKUP_DIR
cp -r assets/ $BACKUP_DIR/
cp -r email-server/ $BACKUP_DIR/
tar -czf "$BACKUP_DIR.tar.gz" $BACKUP_DIR
rm -rf $BACKUP_DIR

# Upload to cloud storage
aws s3 cp "$BACKUP_DIR.tar.gz" s3://your-backup-bucket/
```

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache
npx expo start --clear
rm -rf node_modules && npm install
```

**Email Server Issues:**
```bash
# Check logs
pm2 logs iscore-email-server

# Restart service
pm2 restart iscore-email-server
```

**Performance Issues:**
```bash
# Analyze bundle size
npx expo export --analyze

# Memory usage
pm2 monit
```

### Support Contacts

- **Technical Issues**: [tech@iscore.app]
- **Deployment Help**: [devops@iscore.app]
- **Security Concerns**: [security@iscore.app]

---

## 📱 Platform-Specific Notes

### iOS Deployment
- Requires Apple Developer Account ($99/year)
- App Store review process (1-7 days)
- TestFlight for beta testing

### Android Deployment
- Google Play Console ($25 one-time fee)
- Faster review process (few hours)
- Internal testing available

### Web Deployment
- Works on all modern browsers
- PWA capabilities included
- SEO optimization needed

---

*This deployment guide covers production-ready deployment scenarios. For development setup, see the main README.md.*
