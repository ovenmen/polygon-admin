import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URL) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URL"')
}

const url = process.env.MONGODB_URL
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(url, options)
        globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
} else {
    client = new MongoClient(url, options)
    clientPromise = client.connect()
}

export default clientPromise