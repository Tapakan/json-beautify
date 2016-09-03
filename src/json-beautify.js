/**
 * Json beautify library.
 * @version     1.0
 * @license     http://mit-license.org/
 * @author      Tapakan https://github.com/Tapakan
 * @coder       Alexander Oganov <t_tapak@yahoo.com>
 */

(function (window) {
    "use strict";

    var JSONBeautify = function () {

        this.params = {
            'spaces'      : 4,
            'tag'         : 'span',
            'bool_class'  : 'bool',
            'null_class'  : 'null',
            'number_class': 'number',
            'string_class': 'string'
        };
    };

    /**
     *
     * @param json
     * @returns {*}
     */
    JSONBeautify.prototype.beautify = function (json) {

        json = this.parse(json);
        if (json === false) {
            return "Not valid json";
        }

        json = this.stringify(json);
        json = beautify(json, this.params);

        return json;
    };

    /**
     *
     * @param {string} key
     * @param {*}      value
     * @returns {JSONBeautify}
     */
    JSONBeautify.prototype.setParam = function (key, value) {

        if (!this.params.hasOwnProperty(key)) {
            throw new Error("Option " + key + " doesn't exists");
        }
        this.params[key] = value;

        return this;
    };

    /**
     *
     * @param string
     */
    JSONBeautify.prototype.parse = function (string) {
        var json = false;

        try {
            json = JSON.parse(string);

        } catch (e) {
        }

        return json;
    };

    /**
     *
     * @param string
     */
    JSONBeautify.prototype.stringify = function (string) {
        return JSON.stringify(string, null, this.params['spaces']);
    };

    /**
     *
     * @param {string} json
     * @param {object} params
     */
    function beautify(json, params) {

        json.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Replace for true, false.
        json = json.replace(/(("?)(true|false)("?))/g, function (match) {
            return "<" + params['tag'] + " class=\"" + params['bool_class'] + "\">" + match + "</" + params['tag'] + ">";
        });

        // Replace for null.
        json = json.replace(/(("?)(null)("?))/g, function (match) {
            return "<" + params['tag'] + " class=\"" + params['null_class'] + "\">" + match + "</" + params['tag'] + ">";
        });

        // Replace for number.
        json = json.replace(/(("?)(\d)("?))/g, function (match) {
            return "<" + params['tag'] + " class=\"" + params['number_class'] + "\">" + match + "</" + params['tag'] + ">";
        });

        return json;
    }

    window.JSONBeautify = new JSONBeautify();

})(window);