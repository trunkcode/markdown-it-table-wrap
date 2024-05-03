"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function markdownitTableWrap(md) {
    md.renderer.rules.table_open = function () {
        return '<div class="table-responsive"><table class="table table-striped">';
    };
    md.renderer.rules.table_close = function () {
        return '</table></div>';
    };
}
exports.default = markdownitTableWrap;
