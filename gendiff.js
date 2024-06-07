#!/usr/bin/env node
import { program } from 'commander'
program
	.version('0.0.1')
	.arguments('<filepath1> <filepath1>')
	.description('Compares two configuration files and shows a difference.')
	.helpOption('-h, --help', 'output usage information')
	.option('-f, --format [type]',  'output format')
	.parse(process.argv);