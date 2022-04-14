/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    port: process.env['PORT'] ?? 3000,
    nodeEnv: process.env['NODE_ENV'] ?? 'production'
}

export default config