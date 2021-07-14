const { getPasswordSecurity } = require('..');

describe('getPasswordSecurity', () => {

    it('Should throw an error if no arguments are passed', () => {
        expect(() => getPasswordSecurity()).toThrow();
    });

    it('Should throw an error if the argument is not string', () => {
        const input = 5;

        expect(() => getPasswordSecurity(input)).toThrow();
    });

    it('Should throw an error if a 7-length string is passed', () => {
        const input = 'passwor';

        expect(() => getPasswordSecurity(input)).toThrow();
    });

    it('Should NOT throw an error if a 8-length string is passed', () => {
        const input = 'password';

        expect(() => getPasswordSecurity('password')).not.toThrow();
    });

    it('Should return WEAK for an 8-length full lower case string', () => {
        const input = 'password';
        const expected = 'WEAK';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return WEAK for an 8-length full upper case string', () => {
        const input = 'PASSWORD';
        const expected = 'WEAK';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 8-length lower case string with 1 cap', () => {
        const input = 'Password';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 8-length lower case string with 1 number', () => {
        const input = 'pa5sword';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 8-length lower case string with 1 symbol', () => {
        const input = 'pa$sword';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 10-length lower case string', () => {
        const input = 'mypassword';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 10-length upper case string', () => {
        const input = 'MYPASSWORD';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 10-length lower case string with 1 cap', () => {
        const input = 'Mypassword';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return AVERAGE for an 10-length lower case string with 1 number', () => {
        const input = 'mypa5sword';
        const expected = 'AVERAGE';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return STRONG for an 10-length lower case string with 1 symbol', () => {
        const input = 'mypa$sword';
        const expected = 'STRONG';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return STRONG for an 10-length lower case string with 1 cap and 1 number', () => {
        const input = 'Mypa5sword';
        const expected = 'STRONG';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return STRONG for an 10-length lower case string with 1 cap and 1 symbol', () => {
        const input = 'Mypa$sword';
        const expected = 'STRONG';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return STRONG for an 10-length lower case string with 1 number and 1 symbol', () => {
        const input = 'mypa$5word';
        const expected = 'STRONG';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

    it('Should return PERFECT for an 10-length lower case string with 1 number, 1 cap and 1 symbol', () => {
        const input = 'Mypa$5word';
        const expected = 'PERFECT';

        const result = getPasswordSecurity(input);
        expect(result).toBe(expected);
    });

});