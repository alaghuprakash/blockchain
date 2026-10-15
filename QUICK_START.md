/**
 * Quick Setup Guide
 * 
 * This file provides a quick reference for setting up and running the project.
 */

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Configure .env with your MongoDB URI and JWT secret

# Start development server
npm run dev
```

Backend will run on http://localhost:5000

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development server
npm run dev
```

Frontend will run on http://localhost:5173

### 3. Verify Setup

- Open http://localhost:5173 in your browser
- You should see the CertiChain Pro login page
- Use register to create an account or login with test credentials

## 📁 Project Organization

### Backend Structure
- **src/config/** - Database connection
- **src/controllers/** - Request handlers
- **src/middleware/** - Auth, audit, error handling
- **src/models/** - MongoDB schemas
- **src/routes/** - API endpoints
- **src/services/** - Business logic (blockchain, PDF, QR)
- **src/utils/** - Validators and helpers
- **config/** - Config exports
- **middleware/** - Middleware exports
- **routes/** - Route exports
- **utils/** - Utilities (validators, constants, error handler)

### Frontend Structure
- **src/components/** - Reusable UI components
- **src/pages/** - Page-level components
- **src/context/** - React Context (Auth, Theme)
- **src/hooks/** - Custom hooks (useAuth, useApi, useTheme)
- **src/services/** - API service and configuration
- **src/utils/** - Validators, helpers, constants
- **src/styles/** - Global CSS
- **public/** - Static assets

## 🔧 Key Features Implemented

✅ **Backend**
- Express.js API server with CORS and security headers
- MongoDB database with Mongoose
- JWT authentication with role-based access control
- Blockchain integration with SHA-256 hashing
- PDF certificate generation
- QR code generation for verification
- Comprehensive audit logging
- Rate limiting and input validation
- Error handling middleware

✅ **Frontend**
- React 19 with Vite
- Authentication context with token management
- Theme context for dark/light mode
- Custom hooks (useAuth, useApi, useTheme)
- API service with axios interceptors
- Form validators
- Helper utilities
- Global CSS with CSS variables
- Responsive design with Tailwind CSS

## 📝 Development Tips

1. **Add a new API endpoint:**
   - Create route in `src/routes/`
   - Create controller in `src/controllers/`
   - Add model if needed in `src/models/`
   - Add service logic in `src/services/`

2. **Create a new page:**
   - Create component in `frontend/src/pages/`
   - Add route in your routing configuration
   - Use hooks like useAuth and useApi for state management

3. **Use API Services:**
   ```javascript
   import { certificateAPI, adminAPI } from '@/services';
   
   // In your component
   const response = await certificateAPI.getAll({ page: 1, limit: 10 });
   ```

4. **Validate Forms:**
   ```javascript
   import { validateEmail, validatePassword } from '@/utils';
   
   const error = validateEmail(email);
   if (error) {
     // Show error
   }
   ```

## 🔐 Environment Variables

### Backend
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend
- `VITE_API_URL` - Backend API URL
- `VITE_APP_VERSION` - App version

## 📚 API Documentation

All API endpoints are documented in the main README.md

## 🐛 Troubleshooting

1. **MongoDB connection error:**
   - Check if MongoDB is running
   - Verify MONGO_URI in .env
   - Ensure MongoDB is accessible from your machine

2. **CORS error:**
   - Check FRONTEND_URL in backend .env
   - Should match your frontend URL

3. **Authentication issues:**
   - Verify JWT_SECRET is set
   - Check token is sent in Authorization header
   - Ensure token hasn't expired

4. **Module not found:**
   - Run `npm install` in both backend and frontend
   - Clear node_modules and reinstall if needed

## 🎯 Next Steps

1. Configure MongoDB connection
2. Set up JWT secret and other environment variables
3. Start both backend and frontend servers
4. Create an account and test the application
5. Check browser console and server logs for any errors
6. Start building your features!

For more detailed information, see COMPLETE_STRUCTURE.md
