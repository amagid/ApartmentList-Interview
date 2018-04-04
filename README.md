# Node Boilerplate
A basic Node boilerplate just how I like it with commented socket.io implementation.

### How To Set Up
By default, this application does not come fully ready to go. That's because it includes configuration files, logs, and potentially RSA keys which are obviously not committed to the repo. Here's what you need to do to get it up and running.

1) Install dependencies: Run 'npm install' from the root directory of the project.

2) Create Logs file hierarchy: In the root directory of the project, create a folder named 'logs' and then a subfolder within that called 'exceptions'.

3) Create configuration files: In the 'config' folder, you should find a 'development.json.sample' file. Copy that file twice. Name one of the copies 'development.json' and the other 'production.json'. If there is a 'production.json.sample' file, use that for 'production.json' instead.