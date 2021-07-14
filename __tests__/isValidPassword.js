const { isValidPassword } = require('..');

describe('isValidPassword', () => {

    it('Should throw an error if no arguments are passed', () => {
        expect(() => isValidPassword()).toThrow();
    });

    it('Should throw an error if the argument is not string', () => {
        const input = 5;

        expect(() => isValidPassword()).toThrow();
    });

    it('Should NOT throw an error if the argument is string', () => {
        const input = '5';

        expect(() => isValidPassword()).toThrow();
    });

    it('Should return false if a 7-length string is passed', () => {
        const input = 'passwor';
        const expected = false;

        const result = isValidPassword(input);
        expect(result).toBe(expected);
    });

    it('Should return false if a 17-lenght string is passed', () => {
        const input = 'passwordpasswordd';
        const expected = false;

        const result = isValidPassword(input);
        expect(result).toBe(expected);
    });

    it('Should return true if a 8-length string is passed', () => {
        const input = 'password';
        const expected = true;

        const result = isValidPassword(input);
        expect(result).toBe(expected);
    });

    it('Should return true if a 16-length string is passed', () => {
        const input = 'passwordpassword';
        const expected = true;

        const result = isValidPassword(input);
        expect(result).toBe(expected);
    });

});
