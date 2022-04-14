import dotenv from 'dotenv'
dotenv.config();
import packageJson from '../package.json';

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    version: packageJson.version,
    name: packageJson.name,
    description: packageJson.description,

    port: process.env['PORT'] ?? 3000,
    nodeEnv: process.env['NODE_ENV'] ?? 'production'
}

export default config