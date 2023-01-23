# WhatToEat

## Install Python Virtual Environment

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
