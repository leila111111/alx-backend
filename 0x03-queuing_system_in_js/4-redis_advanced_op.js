import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});
client.on('connect', () => {
  console.log('Redis client connected to the server');
});
const setting = (data, name, value) => {
  client.HSET(data, name, value, print);
};

const gettingall = (data) => {
  client.HGETALL(data, (err, value) => console.log(value));
};

const object = {
  Portland: 50,
  Seattle: 80,
  'New York': 20,
  Bogota: 20,
  Cali: 40,
  Paris: 2,
};
for (const [key, value] of Object.entries(object)) {
  setting('HolbertonSchools', key, value);
}
gettingall('HolbertonSchools');
