# WhatToEat

## Meeting Schedule 
Next Meeting: 2023-01-25

Previous Meetings: [Doc](https://github.com/Ex-SCOT-Forecasting-Origin-Team/WhatToEat/blob/main/Meeting%20Schedule)

## Setting up Windows Subsystem For Linux
Instructions from https://learn.microsoft.com/en-us/windows/wsl/install

Start PowerShell and run it as administrator. (Right-click then "Run as administrator")

Check if you have WSL already installed by running the below command in the PowerShell
```
wsl -l -v
```

Install WSL by running the below command in the PowerShell
```
wsl --install
```

Restart your computer. Then open Ubuntu to start Windows Subsystem For Linux.

## Install Python Virtual Environment

Don't use /mnt/c/ as the project directory. Use /home/... instead.

### For Window, Linux
```
sudo apt-get update
sudo apt-get install python3 python3-pip python3-venv python3-wheel python3-setuptools
```
### Creating a virtual environment
```
python3 -m venv env
```
Don't commit env
### Activate virtual environment
```
source env/bin/activate
```
### Test the page
```
cd html/
python3 -m http.server 8000
```

Browse to http://localhost:8000/

## Setting up React
Instructions from https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

Run the following commands
```
npx create-react-app my-app
cd my-app
npm start
```

### Issue 1: node is not installed
Run 
```
sudo apt-get install nodejs npm
node --version
npm --version
```

### Issue 2: node version is not correct
You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine.

Instructions from https://www.esparkinfo.com/blog/how-to-update-node-js-to-latest-version.html

Update package and install NVM (Node Version Manager)
```
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```
Check if nvm is installed
```
nvm –version
```
Check new nvm releases
```
nvm ls-remote
```
Install the correct node version
```
nvm install v16.0.0
```

Clear NPM Cache and install nvm
```
npm cache clean –f
npm install -g n
```

### Remove unused files
```
cd src
rm -f *
```

## Test React
```
cd my-app
npm start
```

## Navigating to another page resources
https://stackoverflow.com/questions/44387318/linking-button-to-another-page

https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6



