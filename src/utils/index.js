exports.addMovie = async (collection, dataObject) => {
  try {
    await collection.insertOne(dataObject);
    console.log("Successfully added movie.");
  } catch (error) {
    console.log(error);
  }
};


exports.deleteMovie = async (collection, dataObject) => {
    try {
        await collection.deleteOne(dataObject)
        console.log("Succesfully deleted movie.")
    }
    catch(error){
        console.log(error)
    }
}

exports.findMovie = async (collection, dataObject) => {
    try {
        const data = await collection.find(dataObject).toArray()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

exports.updateMovie = async (collection, {dataObject, updateTo}) => {
    try {
        const data = await collection.updateOne(dataObject).toArray()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
