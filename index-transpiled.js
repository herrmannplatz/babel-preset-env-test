'use strict';

(async function () {

    function delayedReturn() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('done');
            });
        });
    }

    function logMessage(message) {
        console.log(message);
    }

    const value = await delayedReturn();
    logMessage(value);
})();
