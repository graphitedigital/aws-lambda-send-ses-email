"use strict";

var config = {
    "templateBucket" : "my-bucket",
    "templateKey" : "Templates/Template.html",
    "targetAddress" : "my-email@domain.com",
    "targetCCAddress" : "",
    "fromAddress": "Me <my-email@domain.com>",
    "defaultSubject" : "Email From {{name}}"
}

module.exports = config
