
const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
  const key = await client.get('key').string();
  console.log("Key: ", key);

  await client.delete().all();
})();
