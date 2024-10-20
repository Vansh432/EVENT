! function($) {
    $.fn.ttgStickySidebar = function(i) {
        function t(i, t) {
            o(i, t) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), $(document).on("scroll." + i.namespace, function(i, t) {
                return function(e) {
                    o(i, t) && $(this).unbind(e)
                }
            }(i, t)), $(window).on("resize." + i.namespace, function(i, t) {
                return function(e) {
                    o(i, t) && $(this).unbind(e)
                }
            }(i, t)))
        }

        function o(i, t) {
            return !0 === i.initialized || !($("body").width() < i.minWidth) && (e(i, t), !0)
        }

        function e(i, t) {
            i.initialized = !0, 0 === $("#theia-sticky-sidebar-stylesheet-" + i.namespace).length && $("head").append($('<style id="theia-sticky-sidebar-stylesheet-' + i.namespace + '">.ttgStickySidebar:after {content: ""; display: table; clear: both;}</style>')), t.each(function() {
                function t() {
                    e.fixedScrollTop = 0, e.sidebar.css({
                        "min-height": "1px"
                    }), e.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(i) {
                    var t = i.height();
                    return i.children().each(function() {
                        t = Math.max(t, $(this).height())
                    }), t
                }
                var e = {};
                if (e.sidebar = $(this), e.options = i || {}, e.container = $(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.css({
                        position: e.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), e.stickySidebar = e.sidebar.find(".ttgStickySidebar"), 0 == e.stickySidebar.length) {
                    var n = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    e.sidebar.find("script").filter(function(i, t) {
                        return 0 === t.type.length || t.type.match(n)
                    }).remove(), e.stickySidebar = $("<div>").addClass("ttgStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                }
                e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                var s = e.stickySidebar.offset().top,
                    d = e.stickySidebar.outerHeight();
                e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), s -= e.stickySidebar.offset().top, d = e.stickySidebar.outerHeight() - d - s, 0 == s ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == d ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, t(), e.onScroll = function(e) {
                    if (e.stickySidebar.is(":visible")) {
                        if ($("body").width() < e.options.minWidth) return void t();
                        if (e.options.disableOnResponsiveLayouts && e.sidebar.outerWidth("none" == e.sidebar.css("float")) + 50 > e.container.width()) return void t();
                        var n = $(document).scrollTop(),
                            s = "static";
                        if (n >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
                            var d = e.paddingTop + i.additionalMarginTop,
                                r = e.paddingBottom + e.marginBottom + i.additionalMarginBottom,
                                c = e.sidebar.offset().top,
                                p = e.sidebar.offset().top + o(e.container),
                                b = 0 + i.additionalMarginTop,
                                l;
                            l = e.stickySidebar.outerHeight() + d + r < $(window).height() ? b + e.stickySidebar.outerHeight() : $(window).height() - e.marginBottom - e.paddingBottom - i.additionalMarginBottom;
                            var f = c - n + e.paddingTop,
                                g = p - n - e.paddingBottom - e.marginBottom,
                                h = e.stickySidebar.offset().top - n,
                                u = e.previousScrollTop - n;
                            "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (h += u), "stick-to-top" == e.options.sidebarBehavior && (h = i.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (h = l - e.stickySidebar.outerHeight()), h = u > 0 ? Math.min(h, b) : Math.max(h, l - e.stickySidebar.outerHeight()), h = Math.max(h, f), h = Math.min(h, g - e.stickySidebar.outerHeight());
                            var S = e.container.height() == e.stickySidebar.outerHeight();
                            s = !S && h == b || !S && h == l - e.stickySidebar.outerHeight() ? "fixed" : n + h - e.sidebar.offset().top - e.paddingTop <= i.additionalMarginTop ? "static" : "absolute"
                        }
                        if ("fixed" == s) {
                            var y = $(document).scrollLeft();
                            e.stickySidebar.css({
                                position: "fixed",
                                width: a(e.stickySidebar) + "px",
                                transform: "translateY(" + h + "px)",
                                left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - y + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == s) {
                            var m = {};
                            "absolute" != e.stickySidebar.css("position") && (m.position = "absolute", m.transform = "translateY(" + (n + h - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", m.top = "0px"), m.width = a(e.stickySidebar) + "px", m.left = "", e.stickySidebar.css(m)
                        } else "static" == s && t();
                        "static" != s && 1 == e.options.updateSidebarHeight && e.sidebar.css({
                            "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom
                        }), e.previousScrollTop = n
                    }
                }, e.onScroll(e), $(document).on("scroll." + e.options.namespace, function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(e)), $(window).on("resize." + e.options.namespace, function(i) {
                    return function() {
                        i.stickySidebar.css({
                            position: "static"
                        }), i.onScroll(i)
                    }
                }(e)), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(e))
            })
        }

        function a(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {}
            return void 0 === t && (t = i.width()), t
        }
        var n = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return i = $.extend(n, i), i.additionalMarginTop = parseInt(i.additionalMarginTop) || 0, i.additionalMarginBottom = parseInt(i.additionalMarginBottom) || 0, t(i, this), this
    }
}(jQuery);