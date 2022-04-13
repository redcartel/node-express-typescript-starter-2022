import config from 'src/config'
import app from 'src/app'

app.listen(config.port, ()=>{
    console.log(`🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`)
})