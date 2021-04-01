module.exports = {
    getMessageByCode(code) {
        let message = '';
        switch (code) {
            case 200:
                message = 'Ok';
                break;
            case 403:
                message = 'Forbidden';
                break;
            default:
                message = 'no message';
        }
        return {
            code: code,
            message: message
        }
    }
}