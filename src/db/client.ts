import { PrismaClient as MongoClient } from "../../prisma/generated/mongodb_client"
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgresql_client"

import { Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"
import { getClient } from "../utils/getClient"

export const DATA_SOURCE = process.env.DATA_SOURCE

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>
type ClientPostgres = PostgresClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient()
export const postgresClient: ClientPostgres = new PostgresClient()

export let prismaClient: any = getClient()

// if (DATA_SOURCE === "postgres") {
//     prismaClient = PostgresClient
// } else {
//     prismaClient = MongoClient
// }
