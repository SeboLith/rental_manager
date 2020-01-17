const spawn = require("child_process").spawn;
const fs = require("fs");

if (process.argv.length !== 3) {
  console.error(`>>>>> Expected script name!`);
  process.exit(1);
}

const arg = process.argv[2];

// alias spawn
const exec = commands => {
  spawn(commands, { stdio: "inherit", shell: true });
};

if (arg === "start") {
  // change the working directory to the frontend react project
  process.chdir("frontend");
  // run the specified package.json script
  exec(`npm run ${arg}`);
  // change the working directory to the root django project
  process.chdir("../");

  // spawn a python process to run the dev server
  const pythonProcess = spawn("python", ["manage.py", "runserver"]);

  // run the python script
  pythonProcess.stdout.on("data", data => {
    console.log(`>>>>> Python process: ${data.toString()}`);
  });
} else if (arg === "build") {
  fs.rename(oldPath, newPath, callback);
}
