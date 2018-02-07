const mail = require('../../helper/mail');
const { expect } = require('chai');

describe('register confirmation', function() {
    it('show user register confirmation mail', async function() {

        mail.fake();

        const resetURL = `http://forum/account/reset/abc`;
        const user = { email: 'john@example.com' };
        const res = await mail.send({
            user,
            filename: 'register-confirmation',
            subject: 'Register Confirmation',
            resetURL
        });


        expect(mail.hasSentTo(res, user.email)).to.be.true;
    });
});
