const config = {
    nodeEnv: process.env['NODE_ENV'] ?? 'production',
    port: parseInt(`${process.env['PORT']}`) ?? 3000
}

export default config;