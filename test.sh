#!/bin/sh

echo 'node batch start';
node batch.js -img "$*";
echo 'node batch end';
exit 0;

