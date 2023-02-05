# WhatToEat

## Meeting Schedule 
Monday, Wednesday, Friday 9:30am on Discord

- Discuss what we did the previous day in terms of functionality
- Explain to each other the code we wrote (Knowledge sharing session)
- Plan next task
- Leetcode question

Previous Meetings: [Doc](https://docs.google.com/document/d/169mFkeDQcx4nGffc1K6rjbUyA9hWo1WWJWtnkwXFHL8/edit)

## Creating a Pull Request
From https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=cli#creating-the-pull-request

### Install github CLI
```
sudo apt install gh
```
You might need to authenticate the device by following the directions in the command line.
### Create another branch and checkout
Create the branch
```
git branch <user-id>
```
Check that the branch <user-id> is created
```
git branch
```
Checkout
```
git checkout <user-id>
```
### Create a Pull Request
```
gh pr create
```

## Figma 

https://www.figma.com/file/aP9ZmGtDTVD4Zw885sAEp2/WhatToEat?node-id=0%3A1&t=pdZPtQD6AjnBeXGZ-1



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

## Location API

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples

https://www.youtube.com/watch?v=NZI_POvnrZ4&list=PLVdOXfrKzalQzsYqNsluiaTwSftIzEFNs

Not needed right now but we will need it if we wanna use geolocation api to work with Google Maps API
```
npm i -D @types/google.maps
```

## Navigating to another page resources
https://stackoverflow.com/questions/44387318/linking-button-to-another-page

https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6



