# Jspm-Bundling-in-Angular2
Bundling with jspm and Angular 2.0.0
Run

1. npm install
2. jspm install


The command jspm install will automatically change the paths section and adds a node config wrapper around paths. Change it back to

     'paths': {
            'npm:': 'jspm_packages/npm/',
            'github:': 'jspm_packages/github/'
        },

if you are having issues with the typescript plugin not being found

to test bundling run 

jspm bundle app/main  test.js
