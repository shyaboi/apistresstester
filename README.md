# API Stresster

This is a node script to spawn child process curls to stress test apis/sites

Ideally, you run this on many different machines, on different connections for best results.

# Running the script

After cloneing the repo;

You can apply your variables at the top of the app.js file, and after running

$`npm install`

then run

$`npm start`

and it will start stressing your system and the API you are hitting.

# Future Plans

I plan on making first a CLI for input, then maybe a GUI with input and output.

Dockerizing the application to spawn many docker containers to spawn the script.
