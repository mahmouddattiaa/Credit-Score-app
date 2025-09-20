# API Documentation

## 📡 Email Server API

Base URL: `http://localhost:3000` (development)

### Authentication

All endpoints require proper authentication headers where specified.

### Endpoints

#### 📧 Send Email

**POST** `/send-email`

Send email with optional PDF attachment.

**Request Body:**
```json
{
  "to": "user@example.com",
  "subject": "Your Credit Report",
  "message": "Please find your weekly credit report attached.",
  "attachment": {
    "filename": "credit-report.pdf",
    "path": "/path/to/report.pdf"
  }
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "abc123",
  "message": "Email sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

#### 📊 Send Report

**POST** `/send-report`

Send automated credit report.

**Request Body:**
```json
{
  "userId": "user123",
  "email": "user@example.com",
  "reportType": "weekly",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "reportId": "report_abc123",
  "sentAt": "2025-09-20T10:30:00Z"
}
```

#### 🔔 Send Notification

**POST** `/send-notification`

Send app notification via email.

**Request Body:**
```json
{
  "to": "user@example.com",
  "type": "score_update",
  "data": {
    "oldScore": 650,
    "newScore": 675,
    "improvement": 25
  }
}
```

#### ❤️ Health Check

**GET** `/health`

Check server status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-09-20T10:30:00Z",
  "uptime": 3600,
  "version": "1.0.0"
}
```

#### 📋 Get Templates

**GET** `/templates`

Get available email templates.

**Response:**
```json
{
  "templates": [
    {
      "id": "welcome",
      "name": "Welcome Email",
      "description": "New user welcome message"
    },
    {
      "id": "report",
      "name": "Credit Report",
      "description": "Weekly credit report template"
    }
  ]
}
```

### Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

### Rate Limiting

- **Email endpoints**: 60 requests per hour per IP
- **Health check**: 100 requests per minute
- **Report generation**: 10 requests per hour per user

### Security

#### Request Headers
```
Content-Type: application/json
Authorization: Bearer <token>
X-API-Key: <api-key>
```

#### Input Validation
- Email addresses validated with RFC 5322 regex
- File uploads limited to 10MB
- JSON payloads limited to 1MB
- XSS protection on all string inputs

## 📱 Mobile App Integration

### Email Service Usage

```typescript
// services/emailService.ts
export class EmailService {
  private baseUrl = 'http://localhost:3000';

  async sendReport(userId: string, email: string) {
    const response = await fetch(`${this.baseUrl}/send-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        userId,
        email,
        reportType: 'weekly',
        language: 'en'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send report');
    }

    return response.json();
  }

  async sendNotification(email: string, type: string, data: any) {
    const response = await fetch(`${this.baseUrl}/send-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        to: email,
        type,
        data
      })
    });

    return response.json();
  }
}
```

### Error Handling

```typescript
// utils/errorHandler.ts
export const handleApiError = (error: any) => {
  if (error.response?.status === 429) {
    return 'Too many requests. Please try again later.';
  }
  
  if (error.response?.status === 401) {
    return 'Authentication failed. Please sign in again.';
  }
  
  if (error.response?.status >= 500) {
    return 'Server error. Please try again later.';
  }
  
  return error.message || 'An unexpected error occurred.';
};
```

## 🔧 Environment Configuration

### Development
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=dev@example.com
EMAIL_PASS=dev-app-password
API_TIMEOUT=5000
RATE_LIMIT_WINDOW=3600000
RATE_LIMIT_MAX=60
```

### Production
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=production@iscore.app
EMAIL_PASS=production-app-password
API_TIMEOUT=10000
RATE_LIMIT_WINDOW=3600000
RATE_LIMIT_MAX=100
ENABLE_CORS=false
ALLOWED_ORIGINS=https://iscore.app
```

## 🧪 Testing

### API Testing with curl

```bash
# Send email
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "message": "This is a test email."
  }'

# Health check
curl http://localhost:3000/health

# Send report
curl -X POST http://localhost:3000/send-report \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "userId": "user123",
    "email": "user@example.com",
    "reportType": "weekly",
    "language": "en"
  }'
```

### Automated Testing

```javascript
// tests/api.test.js
const request = require('supertest');
const app = require('../server');

describe('Email API', () => {
  test('Health check should return OK', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body.status).toBe('ok');
  });

  test('Send email with valid data', async () => {
    const response = await request(app)
      .post('/send-email')
      .send({
        to: 'test@example.com',
        subject: 'Test',
        message: 'Test message'
      })
      .expect(200);
    
    expect(response.body.success).toBe(true);
  });

  test('Send email with invalid data should fail', async () => {
    const response = await request(app)
      .post('/send-email')
      .send({
        to: 'invalid-email',
        subject: 'Test'
      })
      .expect(400);
    
    expect(response.body.success).toBe(false);
  });
});
```

## 📊 Monitoring & Logging

### Request Logging
```javascript
// middleware/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  next();
});
```

### Performance Metrics
- Response time monitoring
- Email delivery success rate
- Error rate tracking
- Resource usage monitoring

---

*For more detailed information about specific endpoints or integration examples, please refer to the source code or contact the development team.*
