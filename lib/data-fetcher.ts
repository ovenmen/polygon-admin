import { ObjectId } from 'mongodb'
import clientPromise from './connection-db'

class DataFetcher {
    async getUsers() {
        try {
            const client = await clientPromise
            const db = client.db(process.env.MONGODB_DBNAME)
            const users = await db.collection('users').find().toArray()

            return users.map(user => ({
                ...user,
                _id: user._id.toString()
            }))
        } catch (error) {
            console.error(error)
        }
    }

    async getUser(id: string) {
        try {
            const client = await clientPromise
            const db = client.db(process.env.MONGODB_DBNAME)
            const users = await db.collection('users').find({ _id: new ObjectId(id) }).toArray()

            return users.map(user => ({
                ...user,
                _id: user._id.toString()
            }))
        } catch (error) {
            console.error(error)
        }
    }
}

export const dataFetcher = new DataFetcher()
