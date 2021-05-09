const arg = require('yargs')
                            .option('l',{
                                alias: 'listado',
                                type: 'boolean',
                                requiresArg: false
                            })
                            .option('b', {
                                alias: 'base',
                                type: 'number',
                                requiresArg: true
                            })
                            .option('h', {
                                alias: 'hasta',
                                type: 'number',
                                requiresArg: true
                            })
                            .check((argv, option) => {
                                if (isNaN(argv.b) && isNaN(arg.h)){
                                    throw 'B y H deben de ser number';
                                } else {
                                    return true;
                                }
                            })
                            .argv;
module.exports = arg;