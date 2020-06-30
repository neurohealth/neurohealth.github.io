var yandex = {
    "v1": 51664982,
    "v1c": 62180005,
    "v2": 51665021,
    "v3": 52665922,
    "v4": 52666201,
    "v5": 52666255,
    "v6": 52666324,
    "v7": 52666345,
    "v8": 52666357,
    "v9": 52666399,
    "v10": 52666438,
    "v11": 52666483,
    "v12": 52666510,
    "v13": 52666549,
    "v14": 52666576,
    "v14c": 56726839,
    "v15": 52666603,
    "v16": 52666627,
    "v17": 52666681,
    "v18": 52666705,
    "v19": 52666738,
    "v20": 52666756,
    "v21": 52666774,
    "v22": 52666792,
    "v23": 53632867,
    "v24": 53632960,
    "v25": 53632972,
    "v26": 53632999,
    "v27": 54792628,
    "v28": 54792637,
    "v29": 54792643,
    "v30": 54792649,
    "v31": 54792655,
    "v32": 54792661,
    "v33": 56726842,
    "v34": 56726845,
    "v35": 56726848,
    "v36": 62180017
};


function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('149', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('confirm.html', '')
        .replace('149', '');
}

(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});