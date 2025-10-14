import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

defineBackend({
  auth,
  data,
});

const backend = defineBackend({
  auth,
  data
})

const { cfnUserPool } = backend.auth.resources.cfnResources
cfnUserPool.usernameAttributes = []