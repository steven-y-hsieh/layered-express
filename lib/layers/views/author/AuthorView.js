var BaseView = require('../BaseView');

AuthorView = function() {};

AuthorView.prototype = new BaseView();

/**
 * Simple example of how the format function can be used.
 *
 * This function capitalises the name of the author.
 *
 * @param {Object}   author     The Author whose name to capitalise.
 * @param {Function} callback   The function to call when formatting is complete.
 */
AuthorView.prototype.format = function(author, callback) {
    author.name = author.name.toUpperCase();
    callback(null, author);
};

AuthorView.prototype.getTitle = function(result) {
    return result.name;
}

AuthorView.prototype.getSection = function() {
    return "author";
};

AuthorView.prototype.getTemplate = function() {
    return "author.jade";
};

module.exports = new AuthorView;