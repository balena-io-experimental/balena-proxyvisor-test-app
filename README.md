# resin-proxyvisor-test-app
A test app for the testing against proxyvisor API

## Getting started

- Sign up on [resinstaging.io](https://dashboard.resinstaging.io/signup)
- go through the [getting started guide](http://docs.resin.io/raspberrypi/nodejs/getting-started/) and create a new Artik5/Artik10 application called `proxyvisor`
- clone this repository to your local workspace
- set these environment variables in the `Environment Variables` application side tab

  * `PROXYVISOR_CONFIG_PORT` = `3000` _set the port you want the proxyvisor to use_
  * `PROXYVISOR_CONFIG_SCOPE` = `127.0.0.1`  _set the network you want the proxyvisor to be available_
  * `DEBUG` = `none`  _if set to `proxyvisor` enables debugging mode_

- add the _resin remote_ to your local workspace using the useful shortcut in the dashboard UI ![remoteadd](https://raw.githubusercontent.com/resin-io-playground/boombeastic/master/docs/gitresinremote.png)
- `git push resin master`
- see the magic happening, your device is getting updated Over-The-Air!

## API
Please refer to [this link](https://github.com/resin-io-modules/proxyvisor-test#api-documentation) for API documentation

## License

Copyright 2016 Resinio Ltd.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
