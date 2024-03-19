import { Client, Account, Databases,AuthenticationFactor,Query,Storage } from "appwrite";

const client = new Client();

client.setEndpoint(process.env.REACT_APP_ENDPOINT).setProject(process.env.REACT_APP_PROJECT_ID);
// Your API Endpoint
// Your project ID
export const account = new Account(client);
// eexport const query=new Query();
export const database = new Databases(client);
export const storage =new Storage(client);