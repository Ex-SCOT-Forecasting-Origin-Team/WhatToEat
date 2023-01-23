# WhatToEat

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

Restart your computer

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


