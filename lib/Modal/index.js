"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modal_1 = __importDefault(require("./modal"));
const alert_1 = __importDefault(require("./alert"));
modal_1.default.alert = alert_1.default;
exports.default = modal_1.default;
//# sourceMappingURL=index.js.map