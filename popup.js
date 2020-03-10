$(function() {
	
    $.ajax({
        type: "GET",
        dataType: "xml",
        url: "https://www.google.com/bookmarks/lookup?output=xml",
        xhrFields: {
            withCredentials: true
        },
        error: function(data) {
        	window.open("https://www.google.com/bookmarks/");
        },
        success:function(xml) {
        	
            var base = $("<div></div>");
            base.css("top", "0");
            base.css("right", "0");
            base.css("bottom", "0");
            base.css("left", "0");
            base.css("padding", "1em 0");
            
            var list = $("<div></div>");
            list.css("height", "calc(100% - 80px)");
            
            createLists();
            
            function createLists() {

            	$("head").html('<style type="text/css">::-webkit-scrollbar {width:0.5em;} ::-webkit-scrollbar-track{background:#f8f8f8; border-radius:0.2em;} ::-webkit-scrollbar-thumb{background:#4285f4; border-radius:0.2em;}</style>');
            	
                base.css("box-sizing", "border-box");
                base.css("position", "fixed");
                base.css("z-index", "2147483647");
                base.css("padding", "1.5em");
                base.css("border", "1px solid #ccc");
                base.css("background-color", "rgba(255,255,255,0.95)");
                base.css("line-height", "1em");
                base.css("font-size", "16px");
                base.css("color", "#333");
                $("body").append(base);
                
                var logo = $("<div></div>");
                logo.css("height", "60px");
                logo.css("margin-bottom", "20px");
                logo.css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYyLjE3NzEyMyAxMi43IgogICBoZWlnaHQ9IjQ4IgogICB3aWR0aD0iMjM1Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4NC4zKSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHI9IjUuODEzMTEyMyIKICAgICAgIGN5PSIyOTAuNjUyMzQiCiAgICAgICBjeD0iNi40ODEyODYiCiAgICAgICBpZD0icGF0aDgzOCIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojNTQ5MmVkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MzMyIiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDI3IgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSIxNy45Njg1MDQiCiAgICAgICBpZD0icGF0aDgzOC0zIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiNlYTU1NDg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMTgyNDcxMjYiIC8+CiAgICA8Y2lyY2xlCiAgICAgICByPSI0LjAwOTA0MjMiCiAgICAgICBjeT0iMjkyLjI1NTk4IgogICAgICAgY3g9IjI3LjU3NDA5MSIKICAgICAgIGlkPSJwYXRoODM4LTMtMSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojZjljMDMwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjE4MjQ3MTI2IiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDIzIgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSIzNy4xNzk2NzYiCiAgICAgICBpZD0icGF0aDgzOC0zLTEtOCIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojNTQ5MmVkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjE4MjQ3MTI2IiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iNC4wMDkwNDIzIgogICAgICAgY3k9IjI5Mi4yNTU5OCIKICAgICAgIGN4PSI0Ny4zMTQ0MyIKICAgICAgIGlkPSJwYXRoODM4LTMtMS04LTkiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzNlYWM1YztmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4xODI0NzEyNiIgLz4KICAgIDxjaXJjbGUKICAgICAgIHI9IjQuMDA5MDQyMyIKICAgICAgIGN5PSIyOTIuMjU1OTgiCiAgICAgICBjeD0iNTcuNDQ5MTg0IgogICAgICAgaWQ9InBhdGg4MzgtMy0xLTgtOS02IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiNlYTU1NDg7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMTgyNDcxMjYiIC8+CiAgPC9nPgo8L3N2Zz4K')");
                logo.css("background-position", "bottom left");
                logo.css("background-size", "auto 50px");
                logo.css("background-repeat", "no-repeat");
                logo.css("padding-left", "52px");
                logo.css("font-size", "20px");
                logo.css("font-weight", "bold");
                logo.text("Googleブックマーク");
                base.append(logo);
                
                var hr = $("<hr>");
                hr.css("border", "none");
                hr.css("width", "100%");
                hr.css("height", "1px");
                hr.css("background-color", "#ccc");
                
                list.css("width", "98%");
                list.css("padding-right", "2%");
                list.css("overflow-y", "scroll");
                list.css("overflow-x", "hidden");
                
                var labelDivs = {};
                $(xml).find("bookmark").each(function() {
                    var bookmark = $(this);
                    var parent;
                    if (bookmark.find("label").length == 0) {
                        if (list.children().length > 0) {
                            list.append(hr.clone());
                        }
                        parent = list;
                    } else {
                        bookmark.find("label").each(function() {
                            var labelText = $(this).text();
                            var labelDiv = labelDivs[labelText];
                            if (labelDiv == undefined) {
                                if (list.children().length > 0) {
                                    list.append(hr.clone());
                                }
                                var labelTitleDiv = $("<div></div>");
                                labelTitleDiv.text(labelText);
                                labelTitleDiv.attr("title", labelText);
                                labelTitleDiv.attr("class", "label_title");
                                labelTitleDiv.css("width", "100%");
                                labelTitleDiv.css("padding", "1em 0");
                                labelTitleDiv.css("cursor", "pointer");
                                list.append(labelTitleDiv);
                                setHoverEvent(labelTitleDiv);
                                var icon = $("<img>");
                                icon.attr("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzEwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiCiAgIHk9IjBweCIKICAgeD0iMHB4IgogICB2ZXJzaW9uPSIxLjEiPjxkZWZzCiAgIGlkPSJkZWZzMTQiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPHJkZjpSREY+PGNjOldvcmsKICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPgo8cGF0aAogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIgogICBpZD0icGF0aDQiCiAgIGQ9Ik0gMTAsMTk2Ljc0Nzg1IFYgOTkzLjA0NjY4IEggOTkwIFYgMzE5LjI0Nzg1IEggNTYxLjMwMDc4IGwgLTEyMi41LC0xMjIuNSB6IiAvPgo8L3N2Zz4=");
                                icon.css("width", "1em");
                                icon.css("padding-right", "0.7em");
                                labelTitleDiv.prepend(icon);
                                labelDiv = $("<div></div>");
                                labelDiv.css("display", "none");
                                labelDiv.css("margin-left", "1em");
                                list.append(labelDiv);
                                labelDivs[labelText] = labelDiv;
                            }
                            labelDiv.append(hr.clone());
                            parent = labelDiv;
                        });
                    }
                    var url = bookmark.find("url").text();
                    var item = $("<div></div>");
                    item.css("width", "100%");
                    item.css("padding", "1em 0");
                    item.css("cursor", "pointer");
                    item.bind("click", function() {
                        navigate(url);
                    });
                    var itemText = $("<span></span>");
                    switch (0) {
                    case url.indexOf("http://"):
                    case url.indexOf("https://"):
                        var urlParts = url.split("/");
                        var protocol = urlParts[0];
                        var domain = urlParts[2];
                        itemText.css("background-image", "url('" + "https://www.google.com/s2/favicons?domain=" + protocol + "//" + domain + "/')");
                        itemText.css("background-position", "center left");
                        itemText.css("background-repeat", "no-repeat");
                        itemText.css("padding-left", "calc(16px + 0.7em)");
                        break;
                    case url.indexOf("javascript:"):
                        itemText.css("background-image", "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQwIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiCiAgIHk9IjBweCIKICAgeD0iMHB4IgogICB2ZXJzaW9uPSIxLjEiPjxkZWZzCiAgIGlkPSJkZWZzNDQiIC8+CjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyIj4gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gPHJkZjpSREY+PGNjOldvcmsKICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPgo8cGF0aAogICBpZD0icGF0aDQiCiAgIGQ9Im0gNzIuNTk5NjA5LDE0OC44NDgzMiBjIC0zNC42LDAgLTYyLjU5OTYwOSwyNC4xMjUgLTYyLjU5OTYwOSw1My44NTE1NiB2IDczNi42MTUyMyBjIDAsMjkuNzI2NTcgMjcuOTk5NjA5LDUzLjkzNzUgNjIuNTk5NjA5LDUzLjkzNzUgSCA5MjcuNSBjIDM0LjUsMCA2Mi41OTk2MSwtMjQuMTI0NzYgNjIuNTk5NjEsLTUzLjkzNzUgViAyMDIuNjExOTkgYyAtMC4xLC0yOS42NDA0IC0yOC4wOTkyMywtNTMuNzYzNjcgLTYyLjY5OTIyLC01My43NjM2NyB6IE0gMzk1LjgwMDc4LDMzNi4yMDc2OSBoIDU5LjM5ODQ0IEwgNDU1LDYzOC45MDg4NiBjIDAsMjcuMiAtMi42MDA3OCw1MC40OTk2MSAtNy44MDA3OCw2OS41OTk2MSAtNS4yLDE5LjEgLTEyLjk5ODQ0LDM0LjQ5OTYxIC0yMy4zOTg0NCw0Ni41OTk2MSAtMTAuNSwxMS45IC0yMy42MDE1NiwyMC41OTk2MSAtMzkuMTAxNTYsMjYuMDk5NjEgLTE1LjYsNS41IC0zMy44LDguMzAwNzggLTU0LjUsOC4zMDA3OCAtMTguMiwwIC0zNC42OTg0NCwtMi44OTk2MSAtNDkuMzk4NDQsLTguNTk5NjEgLTE0LjcsLTUuNyAtMjcuMzAxNTYsLTEzLjg5OTYxIC0zNy42MDE1NiwtMjQuNTk5NjEgLTEwLjQsLTEwLjcgLTE4LjI5ODQ0LC0yMy42MDA3OCAtMjMuODk4NDQsLTM4LjgwMDc4IC01LjYsLTE1LjIgLTguNDAwMzksLTMyLjIwMDc4IC04LjQwMDM5LC01MC44MDA3OCB2IC0xMi4xOTkyMiBoIDU4LjY5OTIyIGMgMCw1NC42IDIwLjIwMTE3LDgyIDYwLjcwMTE3LDgyIDEwLjQsMCAxOS41OTkyMiwtMS4xOTkyMiAyNy42OTkyMiwtMy42OTkyMiA4LjEsLTIuNSAxNC45OTk2MSwtNy4yMDE1NiAyMC41OTk2MSwtMTQuMTAxNTYgNS42LC02LjkgOS45MDA3OCwtMTYuMzk5NjEgMTIuODAwNzgsLTI4LjU5OTYxIDIuOSwtMTIuMyA0LjQwMDM5LC0yOC4yOTk2MSA0LjQwMDM5LC00OC4wOTk2MSB6IG0gMjU1LjUsMTE1LjIwMTE3IGMgODQuOCwwIDEyNy44OTkyMiwzMC4xMDAzOSAxMjkuMTk5MjIsOTAuNDAwMzkgaCAtNTYuNjk5MjIgYyAtMiwtMzAuMSAtMjQuNzAxMTcsLTQ1LjIwMTE3IC02OC4yMDExNywtNDUuMjAxMTcgLTkuNywwIC0xOC41OTg4MywxLjAwMDM5IC0yNi43OTg4MywyLjkwMDM5IC04LjMsMS45IC0xNS4zMDAzOSw0LjcwMDc4IC0yMS40MDAzOSw4LjMwMDc4IC02LjEsMy42IC0xMC44MDExNyw3Ljk5ODgzIC0xNC4yMDExNywxMy4yOTg4MyAtMy4zLDUuMyAtNSwxMS40MDAzOSAtNSwxOC40MDAzOSAwLDYuMyAwLjgwMDM5LDExLjUgMi40MDAzOSwxNS41IDEuNiw0LjEgNS4zMDA3OCw3LjkwMDM5IDExLjMwMDc4LDExLjQwMDM5IDYsMy41IDE0LjgsNi44OTg4MyAyNi41LDEwLjI5ODgzIDExLjcsMy40IDI3LjcsNy41IDQ4LDEyLjUgMTkuNiw0LjcgMzYuNiw5LjYwMTE3IDUxLDE0LjcwMTE3IDE0LjQsNS4xIDI2LjMwMDM5LDExLjIwMDM5IDM1LjkwMDM5LDE4LjQwMDM5IDkuNiw3LjIgMTYuNTk4ODMsMTUuODk4ODMgMjEuMjk4ODMsMjYuMjk4ODMgNC42LDEwLjMgNi45MDAzOSwyMy4zMDA3OCA2LjkwMDM5LDM4LjgwMDc4IDAuMywxNC40IC0yLjgwMDM5LDI3Ljc5OTIyIC04LjkwMDM5LDQwLjE5OTIyIC02LjEsMTIuNCAtMTQuNjk4ODMsMjMuMjAwMzkgLTI1Ljc5ODgzLDMyLjQwMDM5IC0xMS4xLDkuMiAtMjQuNzAxMTcsMTYuMzk5NjEgLTQwLjcwMTE3LDIxLjU5OTYxIC0xNS45LDUuMSAtMzMuODk5MjIsNy43MDExNyAtNTMuNjk5MjIsNy43MDExNyAtODcuNywwIC0xMzQuMDAxMTcsLTM0LjYwMDM5IC0xMzguNzAxMTcsLTEwMy45MDAzOSBoIDU3LjcwMTE3IGMgMC4zLDM5LjEgMjcuMTAwMzksNTguNzk4ODMgODAuNDAwMzksNTguNzk4ODMgMTEuOCwwIDIyLjQsLTEuMjk4NDQgMzEuNSwtMy44OTg0NCA5LjEsLTIuNiAxNi42OTkyMiwtNi4yMDA3OCAyMi42OTkyMiwtMTAuODAwNzggNi4xLC00LjYgMTAuNzAwMzksLTEwLjAwMDc4IDEzLjkwMDM5LC0xNi4zMDA3OCAzLjEsLTYuMiA0LjY5OTIyLC0xMi44OTg4MyA0LjY5OTIyLC0yMC4yOTg4MyAwLC03LjggLTEuMTk5NjEsLTEzLjg5OTYxIC0zLjU5OTYxLC0xOC41OTk2MSAtMi40LC00LjcgLTcuMDAwMzksLTguOSAtMTMuOTAwMzksLTEyLjUgLTYuOCwtMy42IC0xNi40LC03LjIwMTU2IC0yOC41LC0xMC42MDE1NiAtMTIuMiwtMy42IC0yNy45OTk2MSwtNy45IC00Ny41OTk2MSwtMTMgLTE5LjEsLTQuNyAtMzUuNjAwMzksLTkuNDk5MjIgLTQ5LjQwMDM5LC0xNC4xOTkyMiAtMTMuOSwtNC43IC0yNS4xOTk2MSwtMTAuMzk5NjEgLTM0LjA5OTYxLC0xNy4wOTk2MSAtOC45LC02LjggLTE1LjUwMDc4LC0xNS4xMDAzOSAtMTkuODAwNzgsLTI0LjkwMDM5IC00LjMsLTkuOSAtNi4zOTg0NCwtMjIuNCAtNi4zOTg0NCwtMzcuNSAwLC0xMy4zIDIuNzk4NDQsLTI1LjYwMDM5IDguMzk4NDQsLTM2LjkwMDM5IDUuNiwtMTEuNCAxMy42MDE1NiwtMjEuMiAyNC4xMDE1NiwtMjkuNSAxMC40LC04LjMgMjMuMDk4NDQsLTE0Ljc5OTYxIDM3Ljg5ODQ0LC0xOS41OTk2MSAxNSwtNC43IDMxLjUwMTU2LC03LjA5OTYxIDQ5LjYwMTU2LC03LjA5OTYxIHoiCiAgIHN0eWxlPSJmaWxsOiNjY2NjY2M7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9Imc4IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMTAiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcxMiIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzE0IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMTYiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcxOCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzIwIgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImcyNCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzI2IgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMjgiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImczMCIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz48ZwogICBpZD0iZzMyIgogICBzdHlsZT0iZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxIiAvPjxnCiAgIGlkPSJnMzQiCiAgIHN0eWxlPSJmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjEiIC8+PGcKICAgaWQ9ImczNiIKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIgLz4KPHBhdGgKICAgc3R5bGU9ImZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MSIKICAgaWQ9InBhdGg0LTMiCiAgIGQ9Im0gMTA2OS4zMjIsMTk5LjMwODIxIHYgNzk2LjI5ODg0IGggOTgwLjAwMDEgViAzMjEuODA4MjEgaCAtNDI4LjY5OTMgbCAtMTIyLjUsLTEyMi41IHoiIC8+PC9zdmc+')");
	                    itemText.css("background-position", "center left");
	                    itemText.css("background-size", "auto 1.2em");
	                    itemText.css("background-repeat", "no-repeat");
	                    itemText.css("padding-left", "1.7em");
                    }
                    itemText.css("max-width", "100%");
                    itemText.css("white-space", "nowrap");
                    itemText.text(bookmark.find("title").text());
                    item.append(itemText);
                    setHoverEvent(item);
                    $(parent).append(item);
                });
                base.append(list);
                
                $("div.label_title").bind("click", function() {
                    var labelText = $(this).attr("title");
                    var labelDiv = labelDivs[labelText];
                    labelDiv.fadeToggle();
                });
                
            }
            
            function navigate(url) {
                chrome.tabs.getSelected(window.id, function (tab) {
                    chrome.tabs.executeScript(tab.id, {code: "location.href = '" + url + "'"});
                });
            }
            
            function setHoverEvent(element) {
                $(element).bind("mouseover", function() {
                    $(this).css("opacity", "0.6");
                });
                $(element).bind("mouseout", function() {
                    $(this).css("opacity", "1");
                });
            }
            
            function close() {
                window.close();
            }
            
        }
        
    });
    
});


