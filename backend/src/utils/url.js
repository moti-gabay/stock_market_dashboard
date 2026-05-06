import * as dotenv from 'dotenv';
import { config } from '../config/secret.js';

dotenv.config();


export const API_URL = `https://api.marketstack.com/v2/eod?access_key=${config.ACCESS_KEY}&symbols=`;




