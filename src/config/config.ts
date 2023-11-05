import dotenv from 'dotenv'

type TConfig = {
    [key: string]: EnvironmentConfig
}
type EnvironmentConfig = {
    app: AppConfig
}
type AppConfig = {
    PORT: string | number
}

if (process.env.NODE_ENV === 'production') {
    dotenv.config({path: '.env.production'})
} else {
    dotenv.config({path: '.env.develpment'})
}

const ENV = process.env.NODE_ENV ?? 'development'

// configuramos los puertos a utilizar
const CONFIG: TConfig = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        }, 
    },
    production: {
        app: {
            PORT: process.env.PORT || 4002
        },
    }
}

// exportamos
export default CONFIG[ENV]