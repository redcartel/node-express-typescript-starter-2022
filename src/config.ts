import dotenv from 'dotenv'
dotenv.config()

/**
 * Pattern for config is:
 * key: proces.env['KEY'] ?? default
 */
const config = {
    port: process.env['PORT'] ?? 3000,
    nodeEnv: process.env['NODE_ENV'] ?? 'production'
}

export default config