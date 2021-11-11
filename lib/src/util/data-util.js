"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFileData = exports.byteSize = exports.size = exports.openFile = void 0;
var openFile = function (contentType, data) { return function () {
    var fileURL = "data:" + contentType + ";base64," + data;
    var win = window.open();
    win.document.write('<iframe src="' +
        fileURL +
        '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}; };
exports.openFile = openFile;
var toBase64 = function (file, cb) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e) {
        var base64Data = e.target['result'].toString().substr(e.target['result'].toString().indexOf('base64,') + 'base64,'.length);
        cb(base64Data);
    };
};
var paddingSize = function (value) {
    if (value.endsWith('==')) {
        return 2;
    }
    if (value.endsWith('=')) {
        return 1;
    }
    return 0;
};
var formatAsBytes = function (sizeValue) { return sizeValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes'; };
var size = function (value) { return (value.length / 4) * 3 - paddingSize(value); };
exports.size = size;
var byteSize = function (base64String) { return formatAsBytes((0, exports.size)(base64String)); };
exports.byteSize = byteSize;
var setFileData = function (event, callback, isImage) {
    var target = event === null || event === void 0 ? void 0 : event.target;
    if (target && target.files && target.files[0]) {
        var file_1 = target.files[0];
        if (isImage && !file_1.type.startsWith('image/')) {
            return;
        }
        toBase64(file_1, function (base64Data) {
            callback(file_1.type, base64Data);
        });
    }
    else {
        callback('', '');
    }
};
exports.setFileData = setFileData;
//# sourceMappingURL=data-util.js.map