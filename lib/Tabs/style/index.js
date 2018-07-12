"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = __importDefault(require("../../../src/style/variables"));
exports.default = {
    Tabs: {
        container: {
            flex: 1
        },
        content: {
            flex: 1,
            backgroundColor: variables_1.default.fill_base
        },
    },
    TabBar: {
        container: {},
        tabs: {
            flex: 1,
            flexDirection: 'column',
            // width: 100,
            backgroundColor: '#fff',
            justifyContent: 'space-around',
        },
        tab: {
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 0,
            paddingBottom: 0,
            height: 53,
            flexDirection: 'row'
        },
        textStyle: {
            fontSize: 14,
        },
        activeTextColor: variables_1.default.color_base,
        inactiveTextColor: variables_1.default.color_label,
        activeFillColor: '#fff',
        fillColor: '#f9f9f9'
    }
};
//# sourceMappingURL=index.js.map