import { PrismaClient as PostgresClient } from "../../prisma/generated/postgresql_client"

import { Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"

export const DATA_SOURCE = process.env.DATA_SOURCE

type ClientPostgres = PostgresClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const postgresClient: ClientPostgres = new PostgresClient()

export let prismaClient: any = postgresClient

// if (DATA_SOURCE === "postgres") {
//     prismaClient = PostgresClient
// } else {
//     prismaClient = MongoClient
// }
