const { MongoClient } = require("mongodb");

const url = "mongodb+srv://sujeet:sujeet17das@webproject.hmugf81.mongodb.net/";

const client =  new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected Successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("user");

    const data = {
      firstname: "Ranbir ",
      lastname: "kapooer",
      city: "Delhi",
      "phn_no." : "9044679766",
    };

    const insertResult = await collection.insertMany([data]);
    console.log('inserted documents => ', insertResult);
    

    const findResult = await collection.find({}).toArray();
    console.log('Found documents => ', findResult);
    

    return "done.";

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());