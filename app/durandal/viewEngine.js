﻿define(['lib/text', 'durandal/dom'], function() {
    var dom = require('durandal/dom');

    return {
        viewExtension:'.html',
        pluginPath:'lib/text',
        createView:function(name, text) {
            var element = dom.parseHTML(text);
            element.setAttribute('data-view', name);
            return element;
        }
    };
});