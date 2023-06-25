import express from 'express';
import { db, connectToDb } from './db.js';

//app components:
const port = process.env.PORT || 8080;
const app = express();