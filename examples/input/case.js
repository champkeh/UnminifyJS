var os;
var isMacOS = "MacOS" === os;
var isWindows = "Windows" === os;
var isLinux = "Linux" === os;

var c = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase()));

var p = {
    isMacOS: isMacOS,
    isWin: isWindows,
    isLinux: isLinux,
    isSafari: c,
}
