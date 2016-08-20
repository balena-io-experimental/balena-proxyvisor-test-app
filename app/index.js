#!/bin/env node

(function() {
    'use strict';

    const Proxyvisor = require('proxyvisor');
    const chalk = require('chalk');

    Proxyvisor.init();

    Proxyvisor.on('error', function(err) {
        console.error(err)
    });

    Proxyvisor.on('start', function(port) {
        console.log(chalk.green("proxyvisor listening on port " + port));
    });

})();
