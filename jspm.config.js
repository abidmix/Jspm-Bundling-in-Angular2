SystemJS.config({
  
        'paths': {
            'npm:': 'jspm_packages/npm/',
            'github:': 'jspm_packages/github/'
        },
    
    transpiler: 'ts',
    devConfig: {
        'map': {
            'core-js': 'npm:core-js@1.1.4',
            'babel': 'npm:babel-core@5.8.24',
            'babel-runtime': 'npm:babel-runtime@5.8.24'
        }
    },
    typescriptOptions: {
        'module': 'system',
        'moduleResolution': 'node',
        'tsconfig': true
    },
   
    map: {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'ts': 'npm:plugin-typescript@4.0.16/plugin.js',
        'typescript': 'npm:typescript@1.8.10/lib/typescript.js'
    },
    packages: {
        'app': {
            'main': './main.ts',
            'defaultExtension': 'ts'
        },
        'rxjs': {
            'defaultExtension': 'js'
        },
        '@angular/core': {
            'main': 'bundles/core.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/upgrade': {
            'main': 'bundles/upgrade.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/compiler': {
            'main': 'bundles/compiler.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/http': {
            'main': 'bundles/http.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/forms': {
            'main': 'bundles/forms.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/common': {
            'main': 'bundles/common.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/platform-browser-dynamic': {
            'main': 'bundles/platform-browser-dynamic.umd.js',
            'defaultExtension': 'js'
        },
        '@angular/platform-browser': {
            'main': 'bundles/platform-browser.umd.js',
            'defaultExtension': 'js'
        },
        'angular2-in-memory-web-api': {
            'main': './index.js',
            'defaultExtension': 'js'
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        'npm:@*/*.json',
        'npm:*.json',
        'github:*/*.json'
    ],
    map: {
        '@angular/common': 'npm:@angular/common@2.0.0',
        '@angular/compiler': 'npm:@angular/compiler@2.0.0',
        '@angular/core': 'npm:@angular/core@2.0.0',
        '@angular/forms': 'npm:@angular/forms@2.0.0',
        '@angular/http': 'npm:@angular/http@2.0.0',
        '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0',
        '@angular/router': 'npm:@angular/router@3.0.0',
        '@angular/upgrade': 'npm:@angular/upgrade@2.0.0',
        'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
        'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
        'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
        'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
        'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
        'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
        'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
        'gulp-replace': 'npm:gulp-replace@0.5.4',
        'isarray': 'npm:isarray@1.0.0',
        'nodejs': 'npm:nodejs@0.0.0',
        'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
        'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
        'plugin-typescript': 'npm:plugin-typescript@4.0.16',
        'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
        'rimraf': 'npm:rimraf@2.5.4',
        'rxjs': 'npm:rxjs@5.0.0-beta.12',
        'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
        'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
        'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
        'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
        'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
        'zone.js': 'npm:zone.js@0.6.23'
    },
    packages: {
        'npm:rimraf@2.5.4': {
            'map': {
                'glob': 'npm:glob@7.0.6'
            }
        },
        'npm:plugin-typescript@4.0.16': {
            'map': {
                'typescript': 'npm:typescript@1.8.10'
            }
        },
        'npm:gulp-replace@0.5.4': {
            'map': {
                'istextorbinary': 'npm:istextorbinary@1.0.2',
                'readable-stream': 'npm:readable-stream@2.1.5',
                'replacestream': 'npm:replacestream@4.0.2'
            }
        },
        'github:jspm/nodelibs-timers@0.2.0-alpha': {
            'map': {
                'timers-browserify': 'npm:timers-browserify@1.4.2'
            }
        },
        'github:jspm/nodelibs-os@0.2.0-alpha': {
            'map': {
                'os-browserify': 'npm:os-browserify@0.2.1'
            }
        },
        'npm:readable-stream@2.1.5': {
            'map': {
                'isarray': 'npm:isarray@1.0.0',
                'buffer-shims': 'npm:buffer-shims@1.0.0',
                'process-nextick-args': 'npm:process-nextick-args@1.0.7',
                'core-util-is': 'npm:core-util-is@1.0.2',
                'util-deprecate': 'npm:util-deprecate@1.0.2',
                'string_decoder': 'npm:string_decoder@0.10.31',
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:glob@7.0.6': {
            'map': {
                'minimatch': 'npm:minimatch@3.0.3',
                'fs.realpath': 'npm:fs.realpath@1.0.0',
                'inflight': 'npm:inflight@1.0.5',
                'once': 'npm:once@1.4.0',
                'path-is-absolute': 'npm:path-is-absolute@1.0.0',
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:istextorbinary@1.0.2': {
            'map': {
                'binaryextensions': 'npm:binaryextensions@1.0.1',
                'textextensions': 'npm:textextensions@1.0.2'
            }
        },
        'npm:timers-browserify@1.4.2': {
            'map': {
                'process': 'npm:process@0.11.9'
            }
        },
        'npm:replacestream@4.0.2': {
            'map': {
                'readable-stream': 'npm:readable-stream@2.1.5',
                'object-assign': 'npm:object-assign@4.1.0',
                'escape-string-regexp': 'npm:escape-string-regexp@1.0.5'
            }
        },
        'github:jspm/nodelibs-stream@0.2.0-alpha': {
            'map': {
                'stream-browserify': 'npm:stream-browserify@2.0.1'
            }
        },
        'github:jspm/nodelibs-buffer@0.2.0-alpha': {
            'map': {
                'buffer-browserify': 'npm:buffer@4.9.1'
            }
        },
        'npm:inflight@1.0.5': {
            'map': {
                'once': 'npm:once@1.4.0',
                'wrappy': 'npm:wrappy@1.0.2'
            }
        },
        'npm:minimatch@3.0.3': {
            'map': {
                'brace-expansion': 'npm:brace-expansion@1.1.6'
            }
        },
        'npm:once@1.4.0': {
            'map': {
                'wrappy': 'npm:wrappy@1.0.2'
            }
        },
        'github:jspm/nodelibs-crypto@0.2.0-alpha': {
            'map': {
                'crypto-browserify': 'npm:crypto-browserify@3.11.0'
            }
        },
        'npm:buffer@4.9.1': {
            'map': {
                'isarray': 'npm:isarray@1.0.0',
                'ieee754': 'npm:ieee754@1.1.6',
                'base64-js': 'npm:base64-js@1.1.2'
            }
        },
        'npm:stream-browserify@2.0.1': {
            'map': {
                'readable-stream': 'npm:readable-stream@2.1.5',
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
            'map': {
                'string_decoder-browserify': 'npm:string_decoder@0.10.31'
            }
        },
        'npm:crypto-browserify@3.11.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'browserify-cipher': 'npm:browserify-cipher@1.0.0',
                'create-hmac': 'npm:create-hmac@1.1.4',
                'create-ecdh': 'npm:create-ecdh@4.0.0',
                'pbkdf2': 'npm:pbkdf2@3.0.7',
                'public-encrypt': 'npm:public-encrypt@4.0.0',
                'create-hash': 'npm:create-hash@1.1.2',
                'diffie-hellman': 'npm:diffie-hellman@5.0.2',
                'randombytes': 'npm:randombytes@2.0.3',
                'browserify-sign': 'npm:browserify-sign@4.0.0'
            }
        },
        'npm:brace-expansion@1.1.6': {
            'map': {
                'balanced-match': 'npm:balanced-match@0.4.2',
                'concat-map': 'npm:concat-map@0.0.1'
            }
        },
        'npm:pbkdf2@3.0.7': {
            'map': {
                'create-hmac': 'npm:create-hmac@1.1.4'
            }
        },
        'npm:create-hmac@1.1.4': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.2',
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:create-hash@1.1.2': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'ripemd160': 'npm:ripemd160@1.0.1',
                'sha.js': 'npm:sha.js@2.4.5',
                'cipher-base': 'npm:cipher-base@1.0.3'
            }
        },
        'npm:public-encrypt@4.0.0': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.2',
                'randombytes': 'npm:randombytes@2.0.3',
                'bn.js': 'npm:bn.js@4.11.6',
                'parse-asn1': 'npm:parse-asn1@5.0.0',
                'browserify-rsa': 'npm:browserify-rsa@4.0.1'
            }
        },
        'npm:browserify-sign@4.0.0': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.2',
                'create-hmac': 'npm:create-hmac@1.1.4',
                'inherits': 'npm:inherits@2.0.3',
                'bn.js': 'npm:bn.js@4.11.6',
                'elliptic': 'npm:elliptic@6.3.2',
                'parse-asn1': 'npm:parse-asn1@5.0.0',
                'browserify-rsa': 'npm:browserify-rsa@4.0.1'
            }
        },
        'npm:diffie-hellman@5.0.2': {
            'map': {
                'randombytes': 'npm:randombytes@2.0.3',
                'bn.js': 'npm:bn.js@4.11.6',
                'miller-rabin': 'npm:miller-rabin@4.0.0'
            }
        },
        'npm:browserify-cipher@1.0.0': {
            'map': {
                'browserify-aes': 'npm:browserify-aes@1.0.6',
                'browserify-des': 'npm:browserify-des@1.0.0',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
            }
        },
        'npm:create-ecdh@4.0.0': {
            'map': {
                'bn.js': 'npm:bn.js@4.11.6',
                'elliptic': 'npm:elliptic@6.3.2'
            }
        },
        'npm:elliptic@6.3.2': {
            'map': {
                'bn.js': 'npm:bn.js@4.11.6',
                'inherits': 'npm:inherits@2.0.3',
                'hash.js': 'npm:hash.js@1.0.3',
                'brorand': 'npm:brorand@1.0.6'
            }
        },
        'npm:browserify-aes@1.0.6': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.2',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
                'inherits': 'npm:inherits@2.0.3',
                'cipher-base': 'npm:cipher-base@1.0.3',
                'buffer-xor': 'npm:buffer-xor@1.0.3'
            }
        },
        'npm:parse-asn1@5.0.0': {
            'map': {
                'browserify-aes': 'npm:browserify-aes@1.0.6',
                'create-hash': 'npm:create-hash@1.1.2',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
                'pbkdf2': 'npm:pbkdf2@3.0.7',
                'asn1.js': 'npm:asn1.js@4.8.0'
            }
        },
        'npm:miller-rabin@4.0.0': {
            'map': {
                'bn.js': 'npm:bn.js@4.11.6',
                'brorand': 'npm:brorand@1.0.6'
            }
        },
        'npm:cipher-base@1.0.3': {
            'map': {
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:evp_bytestokey@1.0.0': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.2'
            }
        },
        'npm:sha.js@2.4.5': {
            'map': {
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:browserify-des@1.0.0': {
            'map': {
                'cipher-base': 'npm:cipher-base@1.0.3',
                'inherits': 'npm:inherits@2.0.3',
                'des.js': 'npm:des.js@1.0.0'
            }
        },
        'npm:browserify-rsa@4.0.1': {
            'map': {
                'randombytes': 'npm:randombytes@2.0.3',
                'bn.js': 'npm:bn.js@4.11.6'
            }
        },
        'npm:hash.js@1.0.3': {
            'map': {
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:asn1.js@4.8.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'bn.js': 'npm:bn.js@4.11.6',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
            }
        },
        'npm:des.js@1.0.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
            }
        },
        'npm:rxjs@5.0.0-beta.12': {
            'map': {
                'symbol-observable': 'npm:symbol-observable@1.0.2'
            }
        }
    }
});
