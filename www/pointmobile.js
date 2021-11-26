var exec = cordova.require("cordova/exec");

module.exports = {
    scan: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'PointMobile', 'scan', []);
    },
    cancel: function () {
        exec(null, null, 'PointMobile', 'cancel', []);
    },
    cancelPm85: function () {
        exec(null, null, 'PointMobile', 'cancel-pm85', []);
    }
};
