var r,
    h = -1 !== (r = navigator.appVersion).indexOf("Win") ? "Windows" : -1 !== r.indexOf("Mac") ? "MacOS" : -1 !== r.indexOf("X11") || -1 !== r.indexOf("Linux") ? "Linux" : "Unknown OS",
    o = navigator.userAgent.toLowerCase(), i = "MacOS" === h, l = "Windows" === h, n = "Linux" === h,
    c = (o.indexOf("firefox"), /^((?!chrome|android).)*safari/i.test(o));
