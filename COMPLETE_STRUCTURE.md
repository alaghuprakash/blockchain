# CertiChain Pro - Blockchain Certificate System

A comprehensive blockchain-based certificate management system with role-based access control, audit logging, and secure verification.

## Project Structure

```
blockchain-certificate-system/
├── backend/                           # Node.js/Express API Server
│   ├── src/
│   │   ├── config/                   # Database and app configuration
│   │   ├── controllers/              # Request handlers
│   │   ├── middleware/               # Authentication and audit middleware
│   │   ├── models/                   # MongoDB schemas
│   │   ├── routes/                   # API endpoints
│   │   ├── services/                 # Business logic (blockchain, PDF, QR)
│   │   └── utils/                    # Validators and helpers
│   ├── config/                       # Root configuration exports
│   ├── middleware/                   # Middleware exports
│   ├── routes/                       # Route exports
│   ├── utils/                        # Utility functions
│   ├── server.js                     # Express app entry point
│   ├── package.json                  # Dependencies
│   └── .env.example                  # Environment variables template
│
├── frontend/                          # React + Vite Application
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   ├── pages/                    # Page components
│   │   ├── context/                  # React Context providers
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── services/                 # API and configuration
│   │   ├── utils/                    # Validators and helpers
│   │   ├── styles/                   # Global styles
│   │   ├── App.jsx                   # Root component
│   │   └── main.jsx                  # Entry point
│   ├── public/                       # Static assets
│   ├── package.json                  # Dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   └── .env.example                  # Environment variables template
│
├── docs/                             # Documentation
├── blockchain/                       # Blockchain utilities
├── README.md                         # Project overview
```

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, helmet, CORS, rate limiting
- **Blockchain**: Custom SHA-256 implementation
- **PDF Generation**: pdfkit
- **QR Code**: qrcode
- **Utilities**: uuid, multer, nodemailer

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **UI Components**: Lucide React, React Icons
- **State Management**: React Context API
- **Routing**: React Router v7
- **QR Scanning**: html5-qrcode, jsqr, @zxing/library
- **Animations**: Framer Motion
- **Notifications**: react-hot-toast
- **Date**: date-fns
- **Charts**: recharts

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# NODE_ENV=development

# Run migrations/seed (if applicable)
npm run seed

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
# VITE_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

## Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm run seed` - Populate database with seed data
- `npm test` - Run tests (when implemented)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /me` - Get current user (protected)
- `PUT /update-profile` - Update user profile (protected)
- `POST /logout` - Logout user (protected)

### Certificates (`/api/certificates`)
- `GET /` - List certificates (protected)
- `POST /` - Create certificate (protected, admin/staff)
- `GET /:id` - Get certificate details
- `GET /:id/download` - Download certificate PDF
- `DELETE /:id` - Delete certificate (protected, admin)
- `POST /verify` - Verify certificate
- `POST /generate-free` - Generate free certificate
- `GET /public-list` - List public certificates

### Departments (`/api/departments`)
- `GET /` - List departments (protected)
- `POST /` - Create department (protected, admin)
- `PUT /:id` - Update department (protected, admin)
- `DELETE /:id` - Delete department (protected, admin)

### Admin (`/api/admin`)
- `GET /users` - List users (protected, admin)
- `PUT /users/:id` - Update user (protected, admin)
- `DELETE /users/:id` - Delete user (protected, admin)
- `GET /audit-logs` - Get audit logs (protected, admin)
- `GET /approvals` - Get pending approvals (protected, admin)
- `PUT /approvals/:id` - Process approval (protected, admin)
- `GET /verification-history` - Get verification history (protected, admin)

### Blockchain (`/api/blockchain`)
- `GET /stats` - Get blockchain statistics (protected)
- `GET /validate` - Validate blockchain integrity (protected, admin)

## User Roles

1. **Super Admin** - Full system access
2. **Department Admin** - Department-level management
3. **Staff** - Can issue certificates
4. **Student** - Can request and view certificates
5. **Verifier** - Can verify certificates

## Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Secure password hashing with bcryptjs
- Token refresh mechanism

### Certificate Management
- Create and issue certificates
- Digital signature with blockchain
- PDF generation with QR codes
- Certificate verification
- Expiry tracking

### Blockchain Integration
- Immutable certificate records
- SHA-256 hashing
- Block chain validation
- Transaction history

### Audit & Compliance
- Comprehensive audit logging
- User action tracking
- IP and user agent recording
- Compliance reporting

### Admin Dashboard
- User management
- Approval workflows
- Audit logs
- Blockchain statistics

## Security Features

- CORS configuration
- Helmet for HTTP headers
- Rate limiting
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- JWT token validation
- Password hashing
- Secure file uploads

## Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb://localhost:27017/certichain
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_VERSION=1.0.0
VITE_LOG_LEVEL=debug
```

## Database Models

- **User** - User accounts with roles
- **Department** - Educational departments
- **Certificate** - Certificate records
- **BlockchainLedger** - Blockchain blocks
- **Approval** - Approval workflows
- **AuditLog** - Action audit trail
- **VerificationHistory** - Certificate verifications
- **Student** - Student profiles
- **Institution** - Institution details
- **Skill** - Skill tags for certificates

## Development Workflow

1. **Backend Development**
   - Create new route in `src/routes/`
   - Implement controller in `src/controllers/`
   - Add middleware as needed in `src/middleware/`
   - Create/update models in `src/models/`
   - Add business logic in `src/services/`

2. **Frontend Development**
   - Create components in `src/components/`
   - Create pages in `src/pages/`
   - Use custom hooks from `src/hooks/`
   - Use API services from `src/services/`
   - Use validators from `src/utils/validators.js`

3. **Testing**
   - Test API endpoints with Postman or similar
   - Test frontend components
   - Verify blockchain integrity

## Contributing

1. Follow the project structure
2. Use consistent naming conventions
3. Add comments for complex logic
4. Test changes before pushing
5. Update documentation as needed

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
