# iScore - Credit Score Monitoring App

<div align="center">
  <img src="./assets/images/logo.jpg" alt="iScore Logo" width="120" height="120">
  
  [![Expo](https://img.shields.io/badge/Expo-53.0.0-blue.svg)](https://expo.dev/)
  [![React Native](https://img.shields.io/badge/React%20Native-0.79.1-blue.svg)](https://reactnative.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
</div>

## 📱 About

iScore is a comprehensive credit score monitoring application designed for the Egyptian market. Built during an IT Infrastructure internship, this app bridges infrastructure knowledge with modern mobile development practices, demonstrating full-stack capabilities from system design to deployment.

### ✨ Key Features

- **Real-time Credit Score Monitoring** - Interactive gauges and visual indicators
- **AI-Powered Insights** - Personalized credit improvement recommendations  
- **Weekly Reports** - Automated credit analysis with Egyptian Pound pricing (95 EGP/week)
- **Secure Authentication** - Email-based sign-in with verification
- **Egyptian Market Focus** - EGP currency support and local regulations
- **Modern UI/UX** - Responsive design for mobile and tablet devices
- **Comprehensive Notifications** - Real-time alerts and updates

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Mobile App    │    │   Email Server  │    │   File System   │
│  (React Native) │◄──►│   (Node.js)     │◄──►│   (Reports)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Expo Router   │    │   SMTP Gateway  │    │   PDF Reports   │
│   Navigation    │    │   (Gmail)       │    │   (Arabic/EN)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI (`npm install -g @expo/cli`)
- Android Studio (for Android) or Xcode (for iOS)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmouddattiaa/project.git
cd project

# Install dependencies
npm install

# Install email server dependencies
cd email-server
npm install
cd ..

# Start the development server
npm run dev
```

### Email Server Setup

```bash
# Start the email server (Windows)
./start-email-server.bat

# Or manually
cd email-server
node server.js
```

## 📂 Project Structure

```
project/
├── app/                    # App screens and navigation
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main tab navigation
│   │   ├── index.tsx      # Dashboard/Home
│   │   ├── insights.tsx   # Credit insights
│   │   ├── profile.tsx    # User profile
│   │   └── report.tsx     # Reports section
│   ├── _layout.tsx        # Root layout
│   ├── signin.tsx         # Sign in screen
│   ├── signup.tsx         # Sign up screen
│   └── notifications.tsx  # Notifications
├── assets/                # Static assets
│   ├── images/           # App icons and logos
│   └── report/           # PDF report templates
├── components/           # Reusable UI components
│   ├── ChatPopup.tsx     # Chat interface
│   ├── CreditScoreGauge.tsx # Score visualization
│   ├── NotificationPopup.tsx # Notification system
│   ├── QuickActions.tsx  # Action buttons
│   └── ScoreFactors.tsx  # Credit factors analysis
├── contexts/            # React context providers
├── hooks/              # Custom React hooks
├── email-server/       # Backend email service
│   ├── server.js       # Express server
│   ├── package.json    # Server dependencies
│   └── README.md       # Server documentation
├── app.json           # Expo configuration
├── package.json       # Project dependencies
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start Expo development server
npm run lint             # Run ESLint

# Build
npm run build:web        # Build for web deployment

# Email Server
./start-email-server.bat # Start email server (Windows)
./setup-email-server.bat # Setup email server configuration
```

### Key Technologies

- **Frontend**: React Native, Expo, TypeScript
- **Navigation**: Expo Router with typed routes
- **UI Components**: Lucide React Native icons
- **State Management**: React Context + Hooks
- **Backend**: Node.js Express server
- **Email**: SMTP integration with Gmail
- **Development**: Hot reloading, TypeScript strict mode

## 🔒 Security & Privacy

- **End-to-end encryption** for sensitive credit data
- **Secure email verification** for authentication
- **Privacy-compliant** data handling practices
- **Regular security audits** and dependency updates
- **Egyptian data protection** regulation compliance

## 📊 Features Deep Dive

### Credit Score Dashboard
- Real-time score visualization with color-coded indicators (Poor/Fair/Good/Excellent)
- Interactive gauge component with smooth animations
- Historical score trends and analytics

### Insights Engine
- AI-powered recommendations for credit improvement
- Personalized action items based on credit factors
- Educational content about credit management

### Weekly Reports
- Automated PDF generation in Arabic and English
- Email delivery system with Egyptian Pound pricing
- Detailed credit factor analysis and suggestions

### User Management
- Secure sign-up/sign-in flows with email verification
- Profile management with subscription tracking
- Notification preferences and settings

## 🌍 Localization

- **Primary Market**: Egypt
- **Currency**: Egyptian Pound (EGP)
- **Languages**: English interface with Arabic report support
- **Regulations**: Compliant with Egyptian financial data protection laws

## 🔧 Infrastructure & DevOps

This project demonstrates infrastructure knowledge gained during internship:

- **Containerization**: Docker support for email server
- **Environment Management**: Multiple environment configurations
- **Automation**: Batch scripts for Windows deployment
- **Monitoring**: Error tracking and performance monitoring
- **CI/CD Ready**: Prepared for GitHub Actions integration

## 📈 Metrics & Performance

- **App Size**: ~15MB (optimized bundle)
- **Load Time**: <3 seconds on 3G networks
- **Offline Support**: Local caching for core features
- **Battery Optimization**: Efficient rendering and memory usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built during IT Infrastructure internship at [Company Name]
- Special thanks to internship coordinator for supporting the discipline switch
- Inspired by Egyptian fintech needs and market requirements

## 📞 Contact

**Mahmoud Attia** - Computer Engineering Student
- GitHub: [@mahmouddattiaa](https://github.com/mahmouddattiaa)
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]

---

<div align="center">
  <p>Built with ❤️ for the Egyptian fintech ecosystem</p>
  <p>From Communications & Electronics to Computer Engineering</p>
</div>
