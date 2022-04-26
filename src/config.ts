import dotenv from 'dotenv';
dotenv.config()
import packageJson from '../package.json';

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
    version: packageJson.version,
    name: packageJson.name,
    description: packageJson.description,

    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 3000,
    
    clientOrigins: {
        'development': process.env['DEV_ORIGIN'] ?? '*',
        'production': process.env['PROD_ORIGIN'] ?? 'none'
    }
}

export default config