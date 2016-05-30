Sandbox
---

This is a virtual environment for developer to testing the new code of telegram-treehole.

Installation
---
1.Downloads Docker from https://www.docker.com/

2.Install docker.

4.Pull required images:
```sh
$ docker pull ubuntu:14.04
```

5.Build the docker images of sandbox:
```sh
docker build .
```

Usage
---

To running treehole at sandbox, you can use these command:

```sh

$ docker run -i -t -d -v ~/telegram-treehole/telegram-treehole:/opt/treehole -p 3000:3000 [the images id or tag]

$ docker exec [the container id or name] bash

# node /opt/treehole/app.js
```

