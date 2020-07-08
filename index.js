var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_styles = function (hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_docs_plus_customize/templates/styles.html", {}, module);
    return cb();
}

exports.clientVars = function  (hook, context, callback){
    return callback({
        ep_docs_plus_customize : {}  
    });
}