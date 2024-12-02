#!/bin/bash
echo "-- Running build"
npm run build
echo "-- Uploading files"
scp -r dist ipfsnode:~
echo "-- Updating web app"
ssh ipfsnode << 'EOF'
  rm -r xav-website
  mv dist xav-website
  ipfs add -r xav-website
  XAV_WEBSITE_CID=`ipfs add -qr --only-hash ~/xav-website | tail -n 1` pm2 restart ipfs-proxy --update-env
EOF
echo "-- Done"
