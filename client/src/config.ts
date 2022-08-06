// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '5bown9ol5f'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-31cfj9fg.us.auth0.com',            // Auth0 domain
  clientId: 'ZYf2I28rSliVWIWvlz88F8VxM3HXk8rf',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
