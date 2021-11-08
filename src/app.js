const connection = require("./db/connection");
const { addMovie, deleteMovie, findMovie, updateMovie } = require("./utils");
const yargs = require("yargs");

const app = () => {
  try {
    switch (process.argv[2]) {
      case "add":
        connection(addMovie, {
          title: yargs.argv.title,
          description: yargs.argv.description,
        });
        break;
      case "delete":
        connection(deleteMovie, {
          title: yargs.argv.title,
          description: yargs.argv.description,
        });
        break;
      case "find":
        connection(findMovie, {
          title: yargs.argv.title,
        });
        break;
      case "update":
        connection(
          updateMovie,
          {
            title: yargs.argv.title,
          },
          {
            $set: {
              title: yargs.argv.title,
              description: yargs.argv.description,
            },
          }
        );
        break;
      default:
        console.log("incorrect commands");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

app();
