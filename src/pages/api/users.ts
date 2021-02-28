import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb';

import axios from 'axios'

import User from '../../models/User'

let cachedDb: Db = null;

async function connectToDataBase(uri: string) {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = client.db('moveit');
    cachedDb = db;

    return db;
}

export default async function (request: NowRequest, response: NowResponse) {
    const gitHubUser = request.body.gitHubUser;
    let user = null;

    const db = await connectToDataBase(process.env.MONGODB_URI);

    const collection = db.collection('users');

    await collection.findOne({ gitHubUser })
        .then(result => {
            if(result) {
                user = result;
            }
        })
        .catch(err => console.error(`Failed to find user: ${err}`));


    if (!user) {
        await axios.get(`${process.env.GITHUB_URI}/users/${gitHubUser}`)
            .then(res => {
                const name = res.data.name;
                const avatar = res.data.avatar_url;

                user = new User(gitHubUser, name, avatar);
            })

        await collection.insertOne(user);
    }

    return response.status(201).json({user});
}