import { Injectable } from '@nestjs/common';
const { Client } = require('pg')

const client = new Client({
  user: 'geoserver',
  host: '40.121.64.107',
  database: 'geoserver',
  password: 'Persian-1345',
  port: 5432,
  currentSchema: "yeison"
})

@Injectable()
export class AppService {
  async getHello() {
    return await new Promise((resolve, reject) => {
      client.query('SELECT * FROM yeison."Postes"', (err, res) => {
        client.end()
        if (err) reject(err);
        else resolve(res.rows);
      })
    });
  }

  async putPostes() {
    client.connect()
    return await new Promise((resolve, reject) => {
      client.query('SELECT * FROM yeison."Postes"', (err, res) => {
        client.end()
        if (err) reject(err);
        else resolve(res.rows);
      })
    });
  }
}