var r

var h =
    -1 !== (r = navigator.appVersion).indexOf("Win")
        ? "Windows"
        : -1 !== r.indexOf("Mac")
            ? "MacOS"
            : -1 !== r.indexOf("X11") || -1 !== r.indexOf("Linux")
                ? "Linux"
                : "Unknown OS"
