! function(e) {
    "use strict";
    e.fn.waterwave = function(t) {
        e.extend({
            parent: "",
            color: "#fff",
            direction: "down",
            background: "",
            speed: 1
        }, t);
        var a = this;
        return a.init = function() {
            var n = 2.5 * Math.PI,
                i = t.speed,
                o = 0,
                r = a[0],
                s = r.getContext("2d"),
                c = (s.createLinearGradient(0, 0, 0, 4 * r.height), t.parent.outerHeight()),
                l = t.parent.outerWidth() - 20;

            function d() {
                "down" == t.direction ? a.attr({
                    width: l + "px"
                }) : a.attr({
                    width: l + "px",
                    height: c + "px"
                })
            }

            function u() {
                o -= i,
                    function(e) {
                        var a = r.offsetWidth,
                            i = r.offsetHeight,
                            c = .5 * i;
                        s.clearRect(0, 0, a, i);
                        var l = .005 * a;
                        if ("" != t.background) {
                            var d = new Image;
                            d.src = t.background, d.onload = function() {
                                var e = document.createElement("canvas");
                                e.width = a, e.height = i, e.getContext("2d").drawImage(this, 0, i / 4 * -1, e.width, e.height),
                                    function(e, t, a) {
                                        var n = s.createPattern(e, "repeat");
                                        s.fillStyle = n, s.fillRect(0, 0, t, a)
                                    }(e, a, i)
                            }
                        } else s.fillStyle = e;
                        s.beginPath(), s.moveTo(0, c);
                        for (var u = 0; u <= 200; u++) {
                            var m = c + Math.sin((u + o) * n * .005 * 1) * c * Math.sin(u * n * .005 * 1 * .05),
                                f = u * l;
                            s.lineTo(f, m)
                        }
                        "down" == t.direction ? (s.lineTo(a, 0), s.lineTo(0, 0)) : (s.lineTo(a, i), s.lineTo(0, i));
                        s.closePath(), s.fill()
                    }(t.color), requestAnimationFrame(u)
            }
            d(), setTimeout((function() {
                u()
            }), 500), e(window).resize(d)
        }, a.init(), a
    }, e.qantumthemesMainObj = {
        body: e("body"),
        window: e(window),
        document: e(document),
        htmlAndbody: e("html,body"),
        scrolledTop: 0,
        oldScroll: 0,
        scroDirect: !1,
        clock: !1,
        headerbar: e("#evenz-headerbar"),
        stickyheader: e("[data-evenz-stickyheader]"),
        clockTimer: 130,
        clockTimerMobile: 180,
        fn: {
            isExplorer: function() {
                return /Trident/i.test(navigator.userAgent)
            },
            isSafari: function() {
                return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || e.qantumthemesMainObj.window.width() < 1170
            },
            isLowPerformance: function() {
                return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || /Trident/i.test(navigator.userAgent)
            },
            areClipPathShapesSupported: function() {
                for (var t = "clipPath", a = ["webkit", "moz", "ms", "o"], n = [t], i = document.createElement("testelement"), o = 0, r = a.length; o < r; o++) {
                    var s = a[o] + t.charAt(0).toUpperCase() + t.slice(1);
                    n.push(s)
                }
                for (o = 0, r = n.length; o < r; o++) {
                    var c = n[o];
                    if ("" === i.style[c] && (i.style[c] = "polygon(50% 0%, 0% 100%, 100% 100%)", "" !== i.style[c])) return e("body").addClass("evenz-clip-enabled"), !0
                }
                return e("body").addClass("evenz-clip-disabled"), !1
            },
            uniqId: function() {
                return Math.round((new Date).getTime() + 100 * Math.random())
            },
            imagesLoaded: function(t) {
                e.evenzXtendObj.fn;
                var a = e(t).find('img[src!=""]');
                if (!a.length) return e.Deferred().resolve().promise();
                var n = [];
                return a.each((function() {
                    var t = e.Deferred();
                    n.push(t);
                    var a = new Image;
                    a.onload = function() {
                        t.resolve()
                    }, a.onerror = function() {
                        t.resolve()
                    }, a.src = this.src
                })), e.when.apply(e, n)
            },
            treeMenu: function() {
                return e(".evenz-menu-tree li li.menu-item-has-children ul").each((function(t, a) {
                    var n = e(a);
                    n.attr("data-max", n.outerHeight())
                })), e(".evenz-menu-tree > li.menu-item-has-children ul").each((function(t, a) {
                    var n = e(a);
                    n.attr("data-max", n.outerHeight())
                })), e(".evenz-menu-tree li.menu-item-has-children").each((function(t, a) {
                    var n = e(a);
                    n.find("> a").after("<a class='evenz-openthis' href='#'><i class='material-icons'>keyboard_arrow_down</i></a>");
                    var i = n.children("ul");
                    i.css({
                        opacity: 0,
                        "max-height": "0px"
                    }), n.on("click", "> .evenz-openthis", (function(e) {
                        return e.preventDefault(), n.toggleClass("evenz-open").promise().done((function() {
                            i = n.children("ul"), n.hasClass("evenz-open") ? (n.closest("li").animate({
                                "padding-bottom": "15px"
                            }, 200), i.css({
                                "max-height": i.data("max") + "px"
                            }).delay("400").promise().done((function() {
                                i.css({
                                    opacity: 1
                                })
                            }))) : (n.closest("li").animate({
                                "padding-bottom": "0px"
                            }, 200), i.css({
                                opacity: 0
                            }).delay("200").promise().done((function() {
                                i.css({
                                    "max-height": "0px"
                                })
                            })))
                        })), !1
                    }))
                })), !0
            },
            activates: function() {
                var t;
                e.qantumthemesMainObj;
                e("[data-evenz-activates]").each((function(a, n) {
                    var i, o = e(n);
                    o.off("click"), o.on("click", (function(a) {
                        a.preventDefault(), e(this).toggleClass("evenz-active"), i = e(this).attr("data-evenz-activates"), t = e(i), i && "" !== i || (t = e(this)), "parent" == i && (t = e(this).parent()), "gparent" == i && (t = e(this).parent().parent()), t.toggleClass("evenz-active")
                    }))
                }))
            },
            tabs: function() {
                e.qantumthemesMainObj;
                e("[data-evenz-tabs]").each((function(t, a) {
                    var n, i = e(a).find(".evenz-tabs__menu a"),
                        o = e(a).find(".evenz-tabs__content");
                    o.fadeOut("fast").first().fadeIn("fast"), e(a).find(".evenz-tabs__menu li:first-child a").addClass("evenz-active"), i.off("click"), i.on("click", (function(t) {
                        t.preventDefault();
                        var i = e(this);
                        e(a).find(".evenz-tabs__menu a.evenz-active").removeClass("evenz-active"), i.addClass("evenz-active"), n = i.attr("href"), o.fadeOut("fast").promise().done((function() {
                            e(n).fadeIn("fast")
                        }))
                    }))
                }))
            },
            switchClass: function() {
                var t, a, n = e.qantumthemesMainObj;
                n.body.off("click", "[data-evenz-switch]"), n.body.on("click", "[data-evenz-switch]", (function(n) {
                    n.preventDefault(), t = e(e(this).attr("data-evenz-target")), a = e(this).attr("data-evenz-switch"), t.toggleClass(a)
                }))
            },
            extractYoutubeId: function(e) {
                if (void 0 === e) return !1;
                var t = e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                return null !== t && t[1]
            },
            qtVcVideobg: function() {
                var t, a = e.qantumthemesMainObj.fn;
                a.isMobile() || "function" != typeof insertYoutubeVideoAsBackground || "function" != typeof vcResizeVideoBackground || jQuery("[data-evenz-video-bg]").each((function() {
                    t = e(this);
                    var n = a.extractYoutubeId(t.data("evenz-video-bg"));
                    insertYoutubeVideoAsBackground(t, n), vcResizeVideoBackground(t)
                }))
            },
            YTreszr: function() {
                jQuery("iframe").each((function(e, t) {
                    var a = jQuery(this);
                    if (a.attr("src")) {
                        var n = a.attr("src");
                        if (n.match("youtube.com") || n.match("vimeo.com") || n.match("vevo.com")) {
                            var i = a.parent().width();
                            a.height();
                            a.css({
                                width: i
                            }), a.height(i / 16 * 9)
                        }
                    }
                }))
            },
            ipadBgFix: function() {
                var t = e.qantumthemesMainObj,
                    a = t.fn;
                a.isMobile() && a.isSafari() && t.body.addClass("evenz-safari-mobile")
            },
            qtParallax: function() {
                if (void 0 !== e.stellar) {
                    var t = e.qantumthemesMainObj,
                        a = t.body;
                    t.fn.isMobile() || (a.stellar("destroy"), e("[data-evenz-parallax]").css({
                        transform: "translate3d"
                    }), e("[data-evenz-parallax]").imagesLoaded().then((function() {
                        a.stellar({
                            hideDistantElements: !1
                        })
                    })))
                }
            },
            scrolledTop: function() {
                var t, a = e.qantumthemesMainObj,
                    n = window.pageYOffset || document.documentElement.scrollTop;
                return 0 != (t = a.scrolledTop - n) && (a.scroDirect = t), a.scrolledTop = n, n
            },
            stickyBarLinkPrep: function() {
                var t = e.qantumthemesMainObj,
                    a = e("#wpadminbar"),
                    n = a.outerHeight(),
                    i = e("#evenz-menu").outerHeight();
                if (!1 !== t.fn.areClipPathShapesSupported() && (t.OTS = e("#evenz-sticky"), 0 !== t.OTS.length)) {
                    t.OTSc = e("#evenz-stickycon");
                    var o = t.OTS,
                        r = o.outerHeight();
                    o.css({
                        height: Math.round(r) + "px"
                    }), o.closest(".evenz-vc-row-container").addClass("evenz-stickybar-parent"), t.StickMeTo = 0, t.whenToStick = e(".evenz-stickybar-parent").position().top - r, t.stickyheader.length > 0 && (t.whenToStick -= i, t.StickMeTo += i), a.length >= 1 && (t.whenToStick -= n, t.StickMeTo += n), t.whenToStick = Math.floor(t.whenToStick), t.StickMeTo = Math.floor(t.StickMeTo)
                }
            },
            stickyBarLink: function(t) {
                var a = e.qantumthemesMainObj,
                    n = a.StickMeTo,
                    i = a.whenToStick,
                    o = a.fn.areClipPathShapesSupported();
                0 !== a.OTS.length && !1 !== o && (t >= i ? (a.OTS.addClass("evenz-stickme"), a.OTSc.addClass("evenz-paper").css({
                    top: n + "px"
                })) : (a.OTSc.removeClass("evenz-paper"), a.OTS.removeClass("evenz-stickme")))
            },
            stickyMenu: {
                init: function() {
                    e.qantumthemesMainObj.body.addClass("evenz-unscrolled")
                },
                pageScrolled: function(t, a) {
                    var n = e.qantumthemesMainObj,
                        i = "evenz-headerbar__sticky__s";
                    "up" === a ? n.headerbar.removeClass(i) : t > 100 && n.headerbar.addClass(i), t > 100 ? (n.body.removeClass("evenz-unscrolled"), n.body.addClass("evenz-scrolled")) : (n.body.addClass("evenz-unscrolled"), n.body.removeClass("evenz-scrolled"))
                }
            },
            menuItemAlign: function() {
                var t = e.qantumthemesMainObj.body,
                    a = t.find("#evenz-menubar > li.menu-item"),
                    n = t.width() / 2;
                0 != a.length && a.each((function(t, a) {
                    var i = e(a);
                    i.offset().left > n && i.addClass("evenz-iright")
                }))
            },
            countDown: {
                cd: e(".evenz-countdown"),
                cdf: this,
                pad: function(e, t) {
                    return e < t ? "0" + e : e
                },
                doClock: function(e, t) {
                    var a = t;
                    if (a.data("evenz-date") && a.data("evenz-time")) {
                        e.cdf;
                        var n, i, o, r = a.data("evenz-now"),
                            s = (new Date(r), new Date),
                            c = a.data("evenz-date").split("-"),
                            l = a.data("evenz-time").split(":"),
                            d = (a.data("evenz-days"), a.data("evenz-hours"), a.data("evenz-minutes"), a.data("evenz-seconds"), a.data("evenz-msec"), new Date(c[0], c[1] - 1, c[2], l[0], l[1])),
                            u = d.getTime() / 1e3 - s.getTime() / 1e3,
                            m = d.getTime() - s.getTime();
                        if (u <= 0 || isNaN(u)) return e.remove(a), a;
                        n = Math.floor(u / 86400), u %= 86400, i = Math.floor(u / 3600), u %= 3600, o = Math.floor(u / 60), u = Math.floor(u % 60), m = Math.floor(m % 1e3), a.find(".d .n").text(e.pad(n, 10)), a.find(".h .n").text(e.pad(i, 10)), a.find(".m .n").text(e.pad(o, 10)), a.find(".s .n").text(e.pad(u, 10)), a.find(".ms .n").text(e.pad(m, 100))
                    } else e.remove(a)
                },
                showclock: function() {},
                remove: function(t) {
                    var a = e.qantumthemesMainObj.fn.countDown;
                    t.closest(".evenz-countdown__container").remove(), a.qtClockInterval && clearInterval(a.qtClockInterval)
                },
                init: function() {
                    var t = e.qantumthemesMainObj.fn.countDown,
                        a = t.cd;
                    a.length < 1 || (a.each((function(a, n) {
                        t.doClock(t, e(n))
                    })), t.qtClockInterval && clearInterval(t.qtClockInterval), t.qtClockInterval = setInterval((function() {
                        a.each((function(a, n) {
                            t.doClock(t, e(n))
                        }))
                    }), 107))
                }
            },
            qtWaypoints: {
                items: [],
                isloaded: !1,
                reinitialize: function() {
                    this.prepare()
                },
                init: function() {
                    var t = this;
                    e.qantumthemesMainObj.window.on("load", (function() {
                        setTimeout((function() {
                            t.prepare()
                        }), 200)
                    }))
                },
                prepare: function() {
                    var t = this;
                    t.wh = e(window).height();
                    var a = 0;
                    e("[data-qtwaypoints]").each((function(n, i) {
                        var o = [];
                        o.id = a, o.el = e(i), o.offset = e(i).attr("data-qtwaypoints-offset") || 50, o.addclass = e(i).attr("data-qtwaypoints-addclass") || "evenz-active", o.rewind = e(i).attr("data-qtwaypoints-rewind") || !1, o.itemtop = Math.floor(parseInt(e(i).offset().top) + parseInt(o.offset)), o.itemtop < t.wh && o.el.addClass(o.addclass), t.items.push(o), a++
                    })), this.isloaded = !0, this.update()
                },
                update: function(t) {
                    if (!1 !== this.isloaded) {
                        var a, n, i, o, r = !1,
                            s = this;
                        r && clearTimeout(r), r = setTimeout((function(r) {
                            a = t + s.wh, e.each(s.items, (function(e, t) {
                                n = t.el, t.animating = 1, t.offset, o = t.rewind, i = t.addclass, t.itemtop < a ? n.hasClass(i) || n.addClass(i) : o && n.removeClass(i), s.items[e].animating = 1
                            }))
                        }), 30)
                    }
                }
            },
            qtScrollSpy: {
                init: function() {
                    setTimeout((function() {
                        var t = e.qantumthemesMainObj,
                            a = t.fn.areClipPathShapesSupported(),
                            n = t.body,
                            i = e("#evenz-sticky"),
                            o = 0,
                            r = t.stickyheader,
                            s = e("#wpadminbar"),
                            c = Math.floor(e(window).height() / 2);
                        t.scrollspycontainer = n.find("[data-evenz-scrollspy]"), i.length > 0 && (o += 70), r.length > 0 && (o += r.find("#evenz-menu").outerHeight()), s.length > 0 && (o += s.outerHeight()), c = Math.floor(c + o / 2), n.attr("data-scrollspy-half", c), t.scrollspycontainer.find("a[href^='#']").each((function(t, n) {
                            var i = e(n),
                                r = i.attr("href"),
                                s = e(r);
                            if (s.length > 0) {
                                var c = Math.floor(s.offset().top),
                                    l = c + (c + Math.floor(s.outerHeight()) - c) / 2,
                                    d = c - o;
                                s.attr("data-scrollspy-mid", l), a && i.unbind("click").off("click").on("click", (function(e) {
                                    return e.preventDefault(), window.scrollTo({
                                        top: d,
                                        left: 0,
                                        behavior: "smooth"
                                    }), !1
                                }))
                            }
                        }))
                    }), 600)
                },
                update: function(t) {
                    var a, n = e.qantumthemesMainObj.body,
                        i = Number(n.attr("data-scrollspy-half")),
                        o = e("[data-scrollspy-mid]"),
                        r = [],
                        s = !1,
                        c = e("#evenz-stickycon");
                    o.each((function(a, n) {
                        var o = e(n),
                            s = Math.abs(Number(o.attr("data-scrollspy-mid")) - t - i);
                        r.push([s, o.attr("id")])
                    })), r.sort((function(e, t) {
                        return e[0] - t[0]
                    })), void 0 !== r[0] && (a = r[0][1], s && clearTimeout(s), s = setTimeout((function(e) {
                        c.find(".evenz-active").removeClass("evenz-active"), c.find('a[href="#' + a + '"]').addClass("evenz-active")
                    }), 30))
                }
            },
            owlCallback: function(e) {
                e.target, e.type, e.namespace, e.item.count, e.item.index, e.page.count, e.page.index, e.page.size
            },
            owlCarousel: function() {
                jQuery.fn.owlCarousel && e(".evenz-owl-carousel").each((function(t, a) {
                    var n, i = e(a);
                    e(a).attr("id");
                    i.imagesLoaded().then((function() {
                        i.owlCarousel({
                            loop: i.data("loop"),
                            margin: i.data("gap"),
                            nav: i.data("nav"),
                            dots: i.data("dots"),
                            navText: ['<i class="evenz-arrow evenz-arrow__l"></i>', '<i class="evenz-arrow evenz-arrow__r"></i>'],
                            center: i.data("center"),
                            stagePadding: i.data("stage_padding"),
                            autoplay: i.data("autoplay_timeout") > 0,
                            autoplayTimeout: i.data("autoplay_timeout"),
                            autoplayHoverPause: i.data("pause_on_hover"),
                            responsive: {
                                0: {
                                    items: i.data("items_mobile")
                                },
                                420: {
                                    items: i.data("items_mobile_hori")
                                },
                                600: {
                                    items: i.data("items_tablet")
                                },
                                1025: {
                                    items: i.data("items")
                                }
                            },
                            onInitialize: function() {
                                i.css({
                                    display: "block",
                                    opacity: "1"
                                })
                            }
                        }), i.hasClass("evenz-multinav-main") && (i.data("target"), i.parent().find(".evenz-multinav__controller").find("a:first-child").addClass("current"), i.on("changed.owl.carousel", (function(e) {
                            if (e.item) {
                                n = i.find(".active [data-index]").data("index") + 1;
                                var t = e.item.index,
                                    a = e.item.count;
                                t > a && (t -= a), t <= 0 && (t += a), i.parent().find(".evenz-multinav__controller .current").removeClass("current"), i.parent().find(".evenz-multinav__controller").find('[data-multinav-controller="' + n + '"]').addClass("current")
                            }
                        }))), i.on("click", "[data-multinav-controller]", (function(t) {
                            t.preventDefault();
                            var a = e(this),
                                n = a.data("multinav-controller"),
                                o = a.data("multinav-target");
                            e("#" + o).trigger("stop.owl.autoplay", n), e("#" + o).trigger("to.owl.carousel", n), i.parent().find(".evenz-multinav__controller .owl-item a").removeClass("current"), a.addClass("current")
                        }))
                    }))
                }))
            },
            displayMap: function() {
                "object" == typeof google && "object" == typeof google.maps && "function" == typeof google.maps.Map && e("[data-evenz-mapcoord]").each((function(t, a) {
                    var n = e(a),
                        i = n.attr("data-evenz-mapcoord").split(","),
                        o = n.attr("id");
                    e.qantumthemesMainObj.fn.isMobile() ? n.height(400) : n.height(600);
                    var r = {
                            zoom: 12,
                            center: new google.maps.LatLng(i[0], i[1])
                        },
                        s = new google.maps.Map(document.getElementById(o), r);
                    new google.maps.Marker({
                        position: {
                            lat: parseFloat(i[0]),
                            lng: parseFloat(i[1])
                        },
                        map: s
                    })
                }))
            },
            stickySidebar: function() {
                "function" == typeof e.fn.ttgStickySidebar && !1 === e.qantumthemesMainObj.fn.isMobile() && e(".evenz-stickycol").each((function(t, a) {
                    var n = e(a),
                        i = ".evenz-stickycont",
                        o = n.closest(i),
                        r = e.qantumthemesMainObj.fn.uniqId();
                    o.attr("id") || o.attr("id", r), i = o.attr("id"), n.ttgStickySidebar({
                        containerSelector: i,
                        additionalMarginTop: 130,
                        additionalMarginBottom: 20,
                        updateSidebarHeight: !0,
                        minWidth: 678
                    })
                }))
            },
            qtWaterwaveInit: function() {
                setTimeout((function() {
                    e(".evenz-waterwave__canvas").each((function(t, a) {
                        var n = e(a);
                        n.css({
                            bottom: "-100%"
                        });
                        n.waterwave({
                            parent: n.parent(),
                            speed: n.data("waterwave-speed") || 1,
                            color: n.data("waterwave-color") || "#ffffff",
                            background: n.data("waterwave-background") || ""
                        }).delay(5).promise().done((function() {
                            n.animate({
                                bottom: "0%"
                            }, 600)
                        }))
                    }))
                }), 100)
            },
            qt3dHeader: {
                clock: !1,
                items: [],
                mouseX: 0,
                mouseY: 0,
                mouseXold: 0,
                mouseYold: 0,
                interval: 30,
                applyTransformation: function(e, t, a) {
                    var n, i;
                    e.enabled && (e.low ? (n = 4, e.bg1.css({
                        transform: "translate(" + t * n + "px, " + a * n + "px)"
                    })) : (n = 4, e.bg1.css({
                        transform: "translate(" + t * n + "px, " + a * n + "px)"
                    }), n = -4, 13e-6, 1.05, i = [
                        [1, 0, 0, 13e-6 * -t],
                        [0, 1, 0, 13e-6 * -a],
                        [0, 0, 1, 1],
                        [0, 0, 0, 1.05]
                    ], e.content.css({
                        transform: "perspective(100000px) matrix3d(" + i.toString() + ") translate(" + t * n + "px, " + a * n + "px)"
                    })))
                },
                animateItems: function(t, a) {
                    var n, i, o, r, s = this;
                    s.items;
                    e.each(s.items, (function(e, c) {
                        n = t - c.w2, i = a - c.h2, o = -1 * (n - c.ox / 2) / 100, r = -1 * (i - c.oy / 2) / 100, s.applyTransformation(c, o, r)
                    }))
                },
                setStartingPoint: function() {
                    if (0 != e(".evenz-3dheader").length) {
                        var t = e.qantumthemesMainObj.fn.isLowPerformance(),
                            a = this;
                        a.items = [];
                        e(".evenz-3dheader").each((function(n, i) {
                            var o = [],
                                r = e(i);
                            o.el = r, o.content = r.find(".evenz-3dheader__contents"), o.bg1 = r.find(".evenz-3dheader__bg--1"), o.bg2 = r.find(".evenz-3dheader__bg--2"), o.ox = r.offset().left, o.oy = r.offset().top, o.w2 = r.width() / 2, o.h2 = r.height() / 2, o.enabled = !1, o.low = t, !0 === t ? r.animate({
                                opacity: 1
                            }, 1600).delay(1100).promise().done((function() {
                                o.content.animate({
                                    opacity: 1
                                }, 800).delay(1700).promise().done((function() {
                                    o.enabled = !0
                                }))
                            })) : r.animate({
                                opacity: 1
                            }, 300).delay(50).promise().done((function() {
                                o.content.animate({
                                    opacity: 1
                                }, 300).promise().done((function() {
                                    o.enabled = !0
                                }))
                            })), a.items.push(o)
                        }))
                    }
                },
                init: function() {
                    if (0 != e(".evenz-3dheader").length) {
                        var t = e.qantumthemesMainObj.fn,
                            a = this;
                        a.setStartingPoint(), 0 != a.items.length && (e(window).on("mousemove", (function(e) {
                            a.mouseX = e.pageX, a.mouseY = e.pageY
                        })), a.animateItems(0, 0), t.isMobile() || !1 === a.clock && !1 === t.isLowPerformance() && setTimeout((function() {
                            a.clock = setInterval((function() {
                                a.mouseXold === a.mouseX && a.mouseXold === a.mouseX || (a.animateItems(a.mouseX, a.mouseY), a.mouseXold = a.mouseX, a.mouseYold = a.mouseY)
                            }), a.interval)
                        }), 3400))
                    }
                }
            },
            customStylesHead: function() {
                var t = "";
                e("[data-evenz-customstyles]").each((function(a, n) {
                    t += e(n).data("evenz-customstyles")
                })), e("head").append("<style>" + t + "<style>"), e('[name="viewport"]').attr("content", "width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0")
            },
            resetOverlay: function() {
                e(".evenz-overlayopen").removeClass("evenz-overlayopen")
            },
            internalLinkClose: function() {
                e("#evenz-overlay .evenz-menu-tree a").on("click", (function(t) {
                    var a = e(this).attr("href");
                    console.log(a);
                    var n = e(location).attr("href").split("#")[0];
                    if (a.split("#")[0] === n) return e.qantumthemesMainObj.fn.resetOverlay(), t
                }))
            },
            themeScroll: function() {
                var t, a, n = e.qantumthemesMainObj,
                    i = n.fn,
                    o = n.clockTimer;
                i.isMobile() && (o = n.clockTimerMobile), !1 !== n.clock && clearInterval(n.clock), n.body.attr("data-evenz-scrolled", 0), n.clock = setInterval((function() {
                    i.scrolledTop(), t = n.scrolledTop, (a = n.oldScroll) !== t && (n.oldScroll = t, i.stickyBarLink(t), n.body.attr("data-evenz-scrolled", t), i.qtScrollSpy.update(t), i.qtWaypoints.update(t), t > a + 50 && i.stickyMenu.pageScrolled(t, "down"), t < a - 50 && t < 400 && i.stickyMenu.pageScrolled(t, "up"))
                }), o)
            },
            initializeAfterAjax: function() {
                var t = e.qantumthemesMainObj.fn;
                return t.customStylesHead(), t.resetOverlay(), t.qtWaterwaveInit(), t.countDown.init(), t.YTreszr(), t.switchClass(), t.activates(), t.ipadBgFix(), t.qtParallax(), t.qtVcVideobg(), t.qtScrollSpy.init(), t.owlCarousel(), t.tabs(), t.stickySidebar(), t.displayMap(), t.qt3dHeader.init(), t.qtWaypoints.init(), !0
            },
            windoeResized: function() {
                var t, a = e.qantumthemesMainObj,
                    n = a.fn,
                    i = a.window,
                    o = i.width(),
                    r = i.height();
                e(window).on("resize", (function(e) {
                    clearTimeout(t), t = setTimeout((function() {
                        n.owlCarousel(), n.qtScrollSpy.init(), n.qtWaypoints.reinitialize(), n.menuItemAlign(), n.qt3dHeader.setStartingPoint(), n.qtWaterwaveInit(), i.height() != r && (n.stickyBarLinkPrep(), n.themeScroll()), i.width() != o && (n.stickyBarLinkPrep(), n.YTreszr())
                    }), 500)
                }))
            },
            init: function() {
                var t = e.qantumthemesMainObj.fn;
                e("html").removeClass("no-js"), t.treeMenu(), t.stickyBarLinkPrep(), t.stickyMenu.init(), t.themeScroll(), t.initializeAfterAjax(), t.areClipPathShapesSupported(), t.menuItemAlign(), t.internalLinkClose(), t.windoeResized(), t.qtWaypoints.reinitialize(), t.isSafari() && e("body").addClass("isSafari")
            }
        }
    }, jQuery(document).ready((function() {
        e.qantumthemesMainObj.fn.init()
    }))
}(jQuery);
//# sourceMappingURL=qtt-main-min.js.map