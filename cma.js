/** @type {import('@scandipwa/magento-scripts').CMAConfiguration} */
module.exports = {
    magento: {
        first_name: 'Scandiweb',
        last_name: 'Developer',
        email: 'developer@scandipwa.com',
        user: 'admin',
        password: 'scandipwa123',
        adminuri: 'admin',
        mode: 'developer',
        edition: 'community',
    },
   ssl: {
        enabled: false,
        ssl_certificate: './localhost+1.pem',
        ssl_certificate_key: './localhost+1-key.pem'
    },


    configuration: {

	nginx: {
            // lets change nginx image version to 1.19
            version: '1.19.0',
            // and use custom nginx template
            configTemplate: './nginx.conf.template'
        },
},

};