import jCaptcha from 'C:\\xampp\\htdocs\\login-porcayo-js\\js-captcha';


export let myCaptcha = new jCaptcha({
    el: '.jCaptcha',
    canvasClass: 'jCaptchaCanvas',
    canvasStyle: {
        // required properties for captcha stylings:
        width: 100,
        height: 15,
        textBaseline: 'top',
        font: '15px Arial',
        textAlign: 'left',
        fillStyle: '#ddd'
    },

    captchaInput : dom.getElementById('captcha'),
    // set callback function for success and error messages:
    callback: ( response, captchaInput, numberOfTries ) => {//esta es la funcion validate()
        if ( response == 'success' ) {
            // success handle, e.g. continue with form submit

        }
        if ( response == 'error' ) {
            // error handle, e.g. add error class to captcha input

            if (numberOfTries === 3) {
                // maximum attempts handle, e.g. disable form
            }
        }
    }
});