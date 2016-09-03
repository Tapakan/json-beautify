/**
 * Json beautify library.
 * @version     1.0
 * @license     http://mit-license.org/
 * @author      Tapakan https://github.com/Tapakan
 * @coder       Alexander Oganov <t_tapak@yahoo.com>
 */

(function () {

    "use strict";

    var json = '{'
        + '"status": false,'
        + '"errors":"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454",'
        + '"result": null,'
        + '"number": 545'
        + '}';

    describe("notValid json", function () {

        it("Ohh!I forgot comma", function () {
            expect(JSONBeautify.beautify('{'
                + '"a": "a"'
                + '"b": "b"'
                + '}'
            )).toBe("Not valid json");
        });

    });

    describe('setParam', function () {

        it("Change spaces value", function () {

            JSONBeautify.setParam("spaces", 2);
            expect(typeof JSONBeautify.beautify(json)).toBe('string');
        });

        it("Change bool class", function () {

            JSONBeautify.setParam("bool_class", "nice_class_for_bool");
            expect(JSONBeautify.beautify(json)).toMatch('nice_class_for_bool');
        });

        it("Change null class", function () {

            JSONBeautify.setParam("null_class", "nice_class_for_null");
            expect(JSONBeautify.beautify(json)).toMatch('"nice_class_for_null"');
        });

        it("Change null class", function () {

            JSONBeautify.setParam("number_class", "nice_class_for_number");
            expect(JSONBeautify.beautify(json)).toMatch('"nice_class_for_number"');
        });
    });

}).call(this);