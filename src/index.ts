import config from 'src/config'
import app from 'src/app'

app.listen(config.port, ()=>{
    console.log(`🚀 ${config.name} ${config.version} 🚀`)
    console.log(`🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`)
})