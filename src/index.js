/**
 * Test Changelog Project
 * A simple application to demonstrate git-changelog-manager functionality
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// Simple web server
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Basic routing
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head><title>Test Changelog Project</title></head>
                    <body>
                        <h1>Welcome to Test Changelog Project!</h1>
                        <p>This is a sample project to test git-changelog-manager.</p>
                        <ul>
                            <li><a href="/api/version">API Version</a></li>
                            <li><a href="/api/status">Status Check</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </body>
                </html>
            `);
            break;
            
        case '/api/version':
            const packageJson = require('../package.json');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                name: packageJson.name,
                version: packageJson.version,
                timestamp: new Date().toISOString()
            }));
            break;
            
        case '/api/status':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                status: 'OK', 
                uptime: process.uptime(),
                timestamp: new Date().toISOString()
            }));
            break;
            
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head><title>About - Test Changelog Project</title></head>
                    <body>
                        <h1>About This Project</h1>
                        <p>This is a demonstration project for testing git-changelog-manager.</p>
                        <p>Features:</p>
                        <ul>
                            <li>Simple HTTP server</li>
                            <li>API endpoints</li>
                            <li>Version information</li>
                            <li>Ready for changelog management</li>
                        </ul>
                        <a href="/">← Back to Home</a>
                    </body>
                </html>
            `);
            break;
            
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1><a href="/">Go Home</a>');
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Test Changelog Project running on http://localhost:${PORT}`);
    console.log(`📝 Ready for changelog management testing!`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});
