export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'escapeplan-server.heroku.com':
        // this is the full url of your deployed API
        APIURL = ' https://escapeplan-server.herokuapp.com/'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
}
export const environment = {
    production: true
};

