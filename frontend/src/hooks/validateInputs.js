export default function(values) {
    let errors = {};

    /**
     * -- USERNAME VALIDATION --
     * a.  Require a username entry
     * b.  Require the username matches the regex
     */
    if (values.hasOwnProperty('username') && !values.username.length) {
        errors.username = 'Username Required';
    } else if (values.username && values.username.length && !/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/i.test(values.username)) {
        errors.username = 'Invalid Username';
    }

    /**
     * -- EMAIL VALIDATION --
     * a.  Require an email entry
     * b.  Require the email matches the regex
     */
    if (values.hasOwnProperty('email') && !values.email.length) {
        errors.email = 'Email Required';
    } else if (values.email && values.email.length && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    /**
     * -- PASSWORD VALIDATION --
     * a.  Require the string to be 8 - 50 characters long
     * b.  Allow the string to contain A-Z, a-z, 0-9, and !@#$%^&*()_[\]{},.<>+=- characters
     * c.  Require at least one character from any of the FOUR following cases
     *     1 - English uppercase alphabet characters A–Z
     *     2 - English lowercase alphabet characters a–z
     *     3 - Base 10 digits 0–9
     *     4 - Non-alphanumeric characters !@#$%^&*()_[]{},.<>+=-
     */
    if (values.hasOwnProperty('password') && !values.password.length) {
        errors.password = 'Password Required';
    } else if (values.password && values.password.length && !/^(?:(?=.*?[A-Z])(?:(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=])|(?=.*?[a-z])(?:(?=.*?[0-9])|(?=.*?[-!@#$%^&*()_[\]{},.<>+=])))|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%^&*()_[\]{},.<>+=]))[A-Za-z0-9!@#$%^&*()_[\]{},.<>+=-]{8,50}$/i.test(values.password)) {
        errors.password = 'Invalid password';
    }
    
    return errors;
}
