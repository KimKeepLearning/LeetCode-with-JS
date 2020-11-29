/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    if(!s) return s;
    s = s.split(" ");
    return s.join("%20");
};