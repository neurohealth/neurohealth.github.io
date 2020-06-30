function who(language) {
    this.language = language;
    this.langs = {
        'RU': {
            desk: '<div><p>По последним данным ВОЗ, люди с ожирением на 65% сильнее подвергаются заболеваниям, в том числе и новому вирусу</p><div class="close-who"></div></div>',
            mob: '<div><p>По последним данным ВОЗ, люди с ожирением на 65% сильнее подвергаются заболеваниям, в том числе и новому вирусу</p><div class="close-who"></div></div>'
        }
    };
    this.createPanel = function() {
        var panel = document.createElement('div');
        document.body.insertAdjacentElement("afterbegin", panel);
        panel.classList.add('who-wrapper');
        var paragraph = document.createElement('div');
        panel.insertAdjacentElement("afterbegin", paragraph);
        paragraph.innerHTML = document.documentElement.clientWidth > 768 ? this.langs[this.language].desk : this.langs[this.language].mob;
        var style = document.createElement("style");
        document.body.insertAdjacentElement("beforeend", style);
        style.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');.hidden{display:none}.who-wrapper{position:fixed;width:100%;bottom:0;left:0;background:#008dc9;padding:5px;box-sizing:border-box;z-index:9999}.who-wrapper p{color: #fff;text-align:center;font-family:'Roboto',Arial,sans-serif;margin:0 auto;font-size:15px;line-height:20px;}.who-wrapper p:first-of-type{font-size:18px;line-height:21px;font-weight:700;margin-bottom:3px;}.who-wrapper > div { background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCNkZBOUMwODg4RjExRUE5RTE5ODQ2MjgwQzkyNDM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCNkZBOUMxODg4RjExRUE5RTE5ODQ2MjgwQzkyNDM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkI2RkE5QkU4ODhGMTFFQTlFMTk4NDYyODBDOTI0MzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkI2RkE5QkY4ODhGMTFFQTlFMTk4NDYyODBDOTI0MzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6uisFgAAAGPUlEQVR42syY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') no-repeat;background-position:center left 0px;max-width: 1020px;margin: 0 auto;padding-left:60px;box-sizing:border-box;}.close-who { background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFEGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA0LTI3VDE5OjM1KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yN1QxOTozNjoxOSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yN1QxOTozNjoxOSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTAxYjZiZC0zN2U4LWJiNDMtODlkMi1iNTI1NjYzYzk1ZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTUwMWI2YmQtMzdlOC1iYjQzLTg5ZDItYjUyNTY2M2M5NWY4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTUwMWI2YmQtMzdlOC1iYjQzLTg5ZDItYjUyNTY2M2M5NWY4Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTAxYjZiZC0zN2U4LWJiNDMtODlkMi1iNTI1NjYzYzk1ZjgiIHN0RXZ0OndoZW49IjIwMjAtMDQtMjdUMTk6MzUrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vzFMEAAABR0lEQVRIia3VoVYCURDG8V/YQCASCEaDwQfwHQg8htFgJBB8AIKBQNhgMBgIBh/AQDAQDQQDweADEAgY2PVw9txlZ5E5Z8Keuff7z507dwd6uMMCK0xx5TS7Rl5oLTEoA0/YVXyD25aAEbYJrQH8JAKlTwLiGZ6PaCwdCZY+K4RS1sVrw/4FvAdALwlQhnkwScPAwiooK76b9mzQL7PKW4A6QcAO99XaRsq2w3dw3VTCuvadEBFo8rn6ZtHH5xkA3TrAOUCpLjwrqBWgtAv7Fow2Q6ctIPoOTj7JKYBWoO4/ACFQpvlnF/W8DjILCkSbYVIFjFqU4kK8vf8G36X0RDtW6+g72ihGeeSiU5cZBU1h3bDoTf2/qI+Phv0rjl9kpO+bxsQSxonAFg8N4lVQXgN5VGQ6Lk60tn8rNy0AhzY8ONVXkWjvF7+PiWkiGpC+AAAAAElFTkSuQmCC') no-repeat;background-position:center center; box-sizing:border-box; position: absolute; top: -15px; right: 5px; width: 30px; height: 30px}"; 
        document.querySelector('.who-wrapper div').style.backgroundPosition = document.documentElement.clientWidth > 1024 ? 'center left 0px' : 'center left 150%';
        document.querySelector('.who-wrapper div').style.paddingLeft = document.documentElement.clientWidth > 1024 ? '60px' : '0';
        window.addEventListener('resize', this.onresize.bind(this));
        window.addEventListener('load', function(){
            var panelHeight = document.querySelector('.who-wrapper').offsetHeight;
            document.body.style.paddingBottom = panelHeight + 'px';
            $('.close-who').click(function () {
                $('.who-wrapper').addClass('hidden');
            });
        });        
    };
    this.onresize = function() {
        document.querySelector('.who-wrapper').innerHTML = document.documentElement.clientWidth > 1024 ? this.langs[this.language].desk : this.langs[this.language].mob;
        document.querySelector('.who-wrapper div').style.backgroundPosition = document.documentElement.clientWidth > 1024 ? 'center left 0px' : 'center left 150%';
        document.querySelector('.who-wrapper div').style.paddingLeft = document.documentElement.clientWidth > 1024 ? '60px' : '0';
        var panelHeight = document.querySelector('.who-wrapper').offsetHeight;
        document.body.style.paddingBottom = panelHeight + 'px';
        window.addEventListener('load', function(){
            var panelHeight = document.querySelector('.who-wrapper').offsetHeight;
            $('.close-who').click(function () {
                $('.who-wrapper').addClass('hidden');
            });
        });        
    };

}



