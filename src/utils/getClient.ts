import { DATA_SOURCE, mongoClient, postgresClient } from "../db/client"

export const getClient = () => {
    if (DATA_SOURCE === "postgres") {
        return postgresClient
    } else {
        return mongoClient
    }
}