import { CMQ } from '../dist/cmq';
import { env } from 'process';

const client = CMQ.NEW({
  path: '/v2/index.php',
  signatureMethod: 'HmacSHA256',
  extranet: true,
  secretId: env.SECRETID,
  secretKey: env.SECRETKEY,
  region: env.REGION ? env.REGION : 'sh',
});

const clientUseSha1 = CMQ.NEW({
  path: '/v2/index.php',
  signatureMethod: 'HmacSHA1',
  extranet: true,
  secretId: env.SECRETID,
  secretKey: env.SECRETKEY,
  region: env.REGION ? env.REGION : 'sh',
});

export { client, clientUseSha1 };
