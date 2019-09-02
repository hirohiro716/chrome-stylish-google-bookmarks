$(function() {
    
    $.ajax({
        type: "GET",
        dataType: "xml",
        url: "https://www.google.com/bookmarks/lookup?output=xml",
        xhrFields: {
            withCredentials: true
        },
        success:function(xml) {
            
            var base = $("<div></div>");
            base.css("top", "0");
            base.css("right", "0");
            base.css("bottom", "0");
            base.css("left", "0");
            
            var list = $("<div></div>");
            list.css("height", "100%");
            
            createLists();
            
            function createLists() {
                
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
                
                var hr = $("<hr>");
                hr.css("border", "none");
                hr.css("width", "100%");
                hr.css("height", "1px");
                hr.css("background-color", "#ccc");
                
                list.css("width", "100%");
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
                                labelTitleDiv.css("margin", "20px 0");
                                labelTitleDiv.css("cursor", "pointer");
                                list.append(labelTitleDiv);
                                setHoverEvent(labelTitleDiv);
                                var icon = $("<span></span>");
                                icon.text("■");
                                icon.css("width", "0.8em");
                                icon.css("padding-right", "0.5em");
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
                    item.css("margin", "20px 0");
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
                        itemText.css("padding-left", "calc(16px + 0.5em)");
                        break;
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
                close();
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


