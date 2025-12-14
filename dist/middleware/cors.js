export const corsMiddleware = (req, res, next) => {
    // Allow multiple origins for development
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://unerodent-tyrannically-dave.ngrok-free.dev' // ngrok URL if needed
    ];
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // Or use environment variable
    // const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    // res.setHeader('Access-Control-Allow-Origin', frontendUrl);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
};
//# sourceMappingURL=cors.js.map