const http = require('http');
const VERSION = '1.0';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Andina Market</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: #333;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .card {
                    background: #ffffff;
                    padding: 40px;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    text-align: center;
                    max-width: 450px;
                    width: 90%;
                }
                h1 {
                    color: #1e3c72;
                    margin-bottom: 10px;
                    font-size: 2.2rem;
                }
                .badge {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0369a1;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                }
                p {
                    color: #64748b;
                    font-size: 1rem;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 20px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Andina Market</h1>
                <div class="badge">Versión ${VERSION}</div>
                <p>🚀 Desplegado automáticamente desde GitHub con AWS CodeDeploy</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
