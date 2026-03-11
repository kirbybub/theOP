"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointAction = getPointAction;
exports.getHighlightBoxAction = getHighlightBoxAction;
function getPointAction(actions) {
    for (const action of actions) {
        if (action.type === "POINT") {
            return action;
        }
    }
    return null;
}
function getHighlightBoxAction(actions) {
    for (const action of actions) {
        if (action.type === "HIGHLIGHT_BOX") {
            return action;
        }
    }
    return null;
}
