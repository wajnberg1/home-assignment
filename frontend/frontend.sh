#!/bin/bash
chmod -R 750 .
npm install --only=production
echo "npm installation finished"
npm start
echo "frontend was started"
