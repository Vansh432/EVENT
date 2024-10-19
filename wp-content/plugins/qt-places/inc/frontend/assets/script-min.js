function stripslashes(e) {
    return (e + "").replace(/\\(.?)/g, function(e, t) {
        switch (t) {
            case "\\":
                return "\\";
            case "0":
                return "\0";
            case "":
                return "";
            default:
                return t
        }
    })
}! function(w) {
    "use strict";
    "function" != typeof w.fn.createRichMarker && null != google.maps && (w.fn.createRichMarker = function() {
        ! function() {
            var o = !0,
                s = !1;

            function e(e) {
                var t = e || {};
                this.d = this.c = s, null == e.visible && (e.visible = o), null == e.shadow && (e.shadow = "7px -3px 5px rgba(88,88,88,0.7)"), null == e.anchor && (e.anchor = h.BOTTOM), this.setValues(t)
            }

            function r(e, t) {
                var a = document.createElement("DIV");
                if (a.innerHTML = t, 1 == a.childNodes.length) return a.removeChild(a.firstChild);
                for (var o = document.createDocumentFragment(); a.firstChild;) o.appendChild(a.firstChild);
                return o
            }

            function i(e, t) {
                if (t)
                    for (var a; a = t.firstChild;) t.removeChild(a)
            }

            function n(e, t) {
                if (e.c) {
                    var a = ""; - 1 !== navigator.userAgent.indexOf("Gecko/") ? ("dragging" == t && (a = "-moz-grabbing"), "dragready" == t && (a = "-moz-grab")) : "dragging" != t && "dragready" != t || (a = "move"), "draggable" == t && (a = "pointer"), e.a.style.cursor != a && (e.a.style.cursor = a)
                }
            }

            function a(e, t) {
                if (e.getDraggable() && !e.d) {
                    e.d = o;
                    var a = e.getMap();
                    e.m = a.get("draggable"), a.set("draggable", s), e.h = t.clientX, e.i = t.clientY, n(e, "dragready"), e.a.style.MozUserSelect = "none", e.a.style.KhtmlUserSelect = "none", e.a.style.WebkitUserSelect = "none", e.a.unselectable = "on", e.a.onselectstart = function() {
                        return s
                    }, g(e), google.maps.event.trigger(e, "dragstart")
                }
            }

            function l(e) {
                e.getDraggable() && e.d && (e.d = s, e.getMap().set("draggable", e.m), e.h = e.i = e.m = null, e.a.style.MozUserSelect = "", e.a.style.KhtmlUserSelect = "", e.a.style.WebkitUserSelect = "", e.a.unselectable = "off", e.a.onselectstart = function() {}, y(e), n(e, "draggable"), google.maps.event.trigger(e, "dragend"), e.draw())
            }

            function p(e, t) {
                if (e.getDraggable() && e.d) {
                    var a = e.h - t.clientX,
                        o = e.i - t.clientY;
                    e.h = t.clientX, e.i = t.clientY, a = parseInt(e.a.style.left, 10) - a, o = parseInt(e.a.style.top, 10) - o, e.a.style.left = a + "px", e.a.style.top = o + "px";
                    var s = d(e);
                    e.setPosition(e.getProjection().fromDivPixelToLatLng(new google.maps.Point(a - s.width, o - s.height))), n(e, "dragging"), google.maps.event.trigger(e, "drag")
                } else l(e)
            }

            function t(e) {
                e.f && (google.maps.event.removeListener(e.f), delete e.f), n(e, "")
            }

            function c(t, e) {
                e && (t.f = google.maps.event.addDomListener(e, "mousedown", function(e) {
                    a(t, e)
                }), n(t, "draggable"))
            }

            function g(t) {
                t.a.setCapture ? (t.a.setCapture(o), t.e = [google.maps.event.addDomListener(t.a, "mousemove", function(e) {
                    p(t, e)
                }, o), google.maps.event.addDomListener(t.a, "mouseup", function() {
                    l(t), t.a.releaseCapture()
                }, o)]) : t.e = [google.maps.event.addDomListener(window, "mousemove", function(e) {
                    p(t, e)
                }, o), google.maps.event.addDomListener(window, "mouseup", function() {
                    l(t)
                }, o)]
            }

            function y(e) {
                if (e.e) {
                    for (var t = 0, a; a = e.e[t]; t++) google.maps.event.removeListener(a);
                    e.e.length = 0
                }
            }

            function d(e) {
                var t = e.l();
                if ("object" == typeof t) return t;
                var a = new google.maps.Size(0, 0);
                if (!e.b) return a;
                var o = e.b.offsetWidth;
                switch (e = e.b.offsetHeight, t) {
                    case h.TOP:
                        a.width = -o / 2;
                        break;
                    case h.TOP_RIGHT:
                        a.width = -o;
                        break;
                    case h.LEFT:
                        a.height = -e / 2;
                        break;
                    case h.MIDDLE:
                        a.width = -o / 2, a.height = -e / 2;
                        break;
                    case h.RIGHT:
                        a.width = -o, a.height = -e / 2;
                        break;
                    case h.BOTTOM_LEFT:
                        a.height = -e;
                        break;
                    case h.BOTTOM:
                        a.width = -o / 2, a.height = -e;
                        break;
                    case h.BOTTOM_RIGHT:
                        a.width = -o, a.height = -e
                }
                return a
            }
            e.prototype = new google.maps.OverlayView, (window.RichMarker = e).prototype.getVisible = function() {
                return this.get("visible")
            }, e.prototype.getVisible = e.prototype.getVisible, e.prototype.setVisible = function(e) {
                this.set("visible", e)
            }, e.prototype.setVisible = e.prototype.setVisible, e.prototype.s = function() {
                this.c && (this.a.style.display = this.getVisible() ? "" : "none", this.draw())
            }, e.prototype.visible_changed = e.prototype.s, e.prototype.setFlat = function(e) {
                this.set("flat", !!e)
            }, e.prototype.setFlat = e.prototype.setFlat, e.prototype.getFlat = function() {
                return this.get("flat")
            }, e.prototype.getFlat = e.prototype.getFlat, e.prototype.p = function() {
                return this.get("width")
            }, e.prototype.getWidth = e.prototype.p, e.prototype.o = function() {
                return this.get("height")
            }, e.prototype.getHeight = e.prototype.o, e.prototype.setShadow = function(e) {
                this.set("shadow", e), this.g()
            }, e.prototype.setShadow = e.prototype.setShadow, e.prototype.getShadow = function() {
                return this.get("shadow")
            }, e.prototype.getShadow = e.prototype.getShadow, e.prototype.g = function() {
                this.c && (this.a.style.boxShadow = this.a.style.webkitBoxShadow = this.a.style.MozBoxShadow = this.getFlat() ? "" : this.getShadow())
            }, e.prototype.flat_changed = e.prototype.g, e.prototype.setZIndex = function(e) {
                this.set("zIndex", e)
            }, e.prototype.setZIndex = e.prototype.setZIndex, e.prototype.getZIndex = function() {
                return this.get("zIndex")
            }, e.prototype.getZIndex = e.prototype.getZIndex, e.prototype.t = function() {
                this.getZIndex() && this.c && (this.a.style.zIndex = this.getZIndex())
            }, e.prototype.zIndex_changed = e.prototype.t, e.prototype.getDraggable = function() {
                return this.get("draggable")
            }, e.prototype.getDraggable = e.prototype.getDraggable, e.prototype.setDraggable = function(e) {
                this.set("draggable", !!e)
            }, e.prototype.setDraggable = e.prototype.setDraggable, e.prototype.k = function() {
                this.c && (this.getDraggable() ? c(this, this.a) : t(this))
            }, e.prototype.draggable_changed = e.prototype.k, e.prototype.getPosition = function() {
                return this.get("position")
            }, e.prototype.getPosition = e.prototype.getPosition, e.prototype.setPosition = function(e) {
                this.set("position", e)
            }, e.prototype.setPosition = e.prototype.setPosition, e.prototype.q = function() {
                this.draw()
            }, e.prototype.position_changed = e.prototype.q, e.prototype.l = function() {
                return this.get("anchor")
            }, e.prototype.getAnchor = e.prototype.l, e.prototype.r = function(e) {
                this.set("anchor", e)
            }, e.prototype.setAnchor = e.prototype.r, e.prototype.n = function() {
                this.draw()
            }, e.prototype.anchor_changed = e.prototype.n, e.prototype.setContent = function(e) {
                this.set("content", e)
            }, e.prototype.setContent = e.prototype.setContent, e.prototype.getContent = function() {
                return this.get("content")
            }, e.prototype.getContent = e.prototype.getContent, e.prototype.j = function() {
                if (this.b) {
                    i(this, this.b);
                    var e = this.getContent();
                    if (e) {
                        "string" == typeof e && (e = r(this, e = e.replace(/^\s*([\S\s]*)\b\s*$/, "$1"))), this.b.appendChild(e);
                        var t = this;
                        e = this.b.getElementsByTagName("IMG");
                        for (var a = 0, o; o = e[a]; a++) google.maps.event.addDomListener(o, "mousedown", function(e) {
                            t.getDraggable() && (e.preventDefault && e.preventDefault(), e.returnValue = s)
                        }), google.maps.event.addDomListener(o, "load", function() {
                            t.draw()
                        });
                        google.maps.event.trigger(this, "domready")
                    }
                    this.c && this.draw()
                }
            }, e.prototype.content_changed = e.prototype.j, e.prototype.onAdd = function() {
                if (this.a || (this.a = document.createElement("DIV"), this.a.style.position = "absolute"), this.getZIndex() && (this.a.style.zIndex = this.getZIndex()), this.a.style.display = this.getVisible() ? "" : "none", !this.b) {
                    this.b = document.createElement("DIV"), this.a.appendChild(this.b);
                    var e = this;
                    google.maps.event.addDomListener(this.b, "click", function() {
                        google.maps.event.trigger(e, "click")
                    }), google.maps.event.addDomListener(this.b, "mouseover", function() {
                        google.maps.event.trigger(e, "mouseover")
                    }), google.maps.event.addDomListener(this.b, "mouseout", function() {
                        google.maps.event.trigger(e, "mouseout")
                    })
                }
                this.c = o, this.j(), this.g(), this.k();
                var t = this.getPanes();
                t && t.overlayImage.appendChild(this.a), google.maps.event.trigger(this, "ready")
            }, e.prototype.onAdd = e.prototype.onAdd, e.prototype.draw = function() {
                if (this.c && !this.d) {
                    var e = this.getProjection();
                    if (e) {
                        var t = this.get("position");
                        e = e.fromLatLngToDivPixel(t), t = d(this), this.a.style.top = e.y + t.height + "px", this.a.style.left = e.x + t.width + "px", e = this.b.offsetHeight, (t = this.b.offsetWidth) != this.get("width") && this.set("width", t), e != this.get("height") && this.set("height", e)
                    }
                }
            }, e.prototype.draw = e.prototype.draw, e.prototype.onRemove = function() {
                this.a && this.a.parentNode && this.a.parentNode.removeChild(this.a), t(this)
            }, e.prototype.onRemove = e.prototype.onRemove;
            var h = {
                TOP_LEFT: 1,
                TOP: 2,
                TOP_RIGHT: 3,
                LEFT: 4,
                MIDDLE: 5,
                RIGHT: 6,
                BOTTOM_LEFT: 7,
                BOTTOM: 8,
                BOTTOM_RIGHT: 9
            };
            window.RichMarkerPosition = h
        }()
    }), w.fn.qtPlaceDynamicMaps = function(e) {
        var t, n, T, l;
        if (void 0 === e && (e = ".qtPlaces-container"), "undefined" != typeof google) {
            w.fn.createRichMarker();
            var p = [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ff0000"
                    }, {
                        lightness: 2
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    stylers: [{
                        hue: "#00aaff"
                    }, {
                        saturation: -100
                    }, {
                        gamma: 2.15
                    }, {
                        lightness: 12
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 24
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        lightness: 57
                    }]
                }],
                c = [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 21
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#000000"
                    }, {
                        lightness: 16
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#000000"
                    }, {
                        lightness: 40
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }];
            w(e).each(function(e, t) {
                var v = w(this),
                    a = v.attr("data-dynamicmap"),
                    o = v.attr("data-mapcolor"),
                    s = v.attr("id"),
                    r = v.attr("data-mousewheel"),
                    b = v.attr("data-getdirections"),
                    i = c;
                "light" === o && (i = p), "normal" !== o && "natural" !== o || (i = ""), l = {
                    zoom: 4,
                    styles: i,
                    panControl: !0,
                    scrollwheel: r,
                    zoomControl: !0,
                    draggable: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.LEFT_CENTER
                    },
                    mapTypeControl: !1,
                    scaleControl: !0,
                    streetViewControl: v.attr("data-streetview"),
                    overviewMapControl: !0
                }, n = document.getElementById(a), v.map = new google.maps.Map(n, l), v.bounds = new google.maps.LatLngBounds, v.find(".qtPlaces-marker").each(function(e, t) {
                    var a = w(this);
                    if (a.lat = a.attr("data-lat"), a.lon = a.attr("data-lon"), "" !== a.lat && "" !== a.lon) {
                        T = new google.maps.LatLng(a.lat, a.lon), v.bounds.extend(T);
                        var o = a.attr("data-markerid"),
                            s = a.attr("data-mapid"),
                            r = a.attr("data-clicktarget"),
                            i = a.attr("data-markertitle"),
                            n = a.attr("data-markerimg"),
                            l = a.attr("data-hidethumbnail"),
                            p = a.attr("data-filters"),
                            c = a.attr("data-markerdate"),
                            g = a.attr("data-markerlink"),
                            y = a.attr("data-markerphone"),
                            g = a.attr("data-markerlink"),
                            d = a.attr("data-markerlocation"),
                            h = a.find("i").attr("class"),
                            f = a.attr("data-markeremail"),
                            m = a.attr("data-markeraddress") + " " + a.attr("data-markercity") + " " + a.attr("data-markercountry").split("++").join("");
                        "" != n && (n = '<img src="' + n + '" class="' + l + '">');
                        var u = '<div id="mapmarker' + o + '" class="qtPlaces-mapmarker all ' + p + '"><a class="qtPlaces-marker-img qtIndicator" data-mapct="' + o + '">' + n + '<i class="' + h + '"></i></a><div class="markercontents">';
                        "" != i && (u += '<h5 class="locationname"><a href="' + a.attr("href") + '">' + stripslashes(i) + "</a></h5>"), i === d && (d = ""), u += '<p class="location"><span>' + stripslashes(d) + "</span>" + stripslashes(a.attr("data-markeraddress")) + " " + stripslashes(a.attr("data-markercity")) + " " + stripslashes(a.attr("data-markercountry")) + " </p>", "" != g && (u += '<p class="det"><i class="fa fa-external-link"></i><a href="' + g + '" class="qtPlaces-button" target="_blank">' + g + "</a></p>"), "" != y && (u += '<p class="det"><i class="fa fa-phone"></i><a href="tel:' + y + '" class="qtPlaces-button" target="_blank">' + y + "</a></p>"), "" != f && (u += '<p class="det"><i class="fa fa-envelope-o"></i><a href="mailto:' + f + '" class="qtPlaces-button" target="_blank">' + f + "</a></p>"), "" != b && (u += '<p class="det"><i class="fa fa-compass"></i> <a href="https://www.google.com/maps/dir/Current+Location/' + m.split(" ").join("+") + '" class="qtPlaces-button" target="_blank">' + b + "</a></p>"), u += '<i class="fa fa-close close"></i></div></div>', (a.marker = new RichMarker({
                            position: T,
                            map: v.map,
                            draggable: !1,
                            content: u
                        })) && (a.click(function(e) {
                            e.preventDefault();
                            var t = w(this),
                                a = t.attr("data-markerid"),
                                o = t.attr("data-mapid"),
                                s = w("#" + o);
                            w("#" + o + " .qtPlaces-mapmarker").removeClass("active"), w("#" + o + " #mapmarker" + a).addClass("active");
                            var r = t.attr("data-lat"),
                                i = t.attr("data-lon");
                            T = new google.maps.LatLng(r, i), v.map.setCenter(T), v.map.panTo(T), "1" === t.attr("data-autozoom") && v.map.setZoom(5), w(window).width() < 1024 && v.closest(".qtPlaces-container").removeClass("open").find(".qtPlaces-menuswitch i").addClass("fa-bars").removeClass("fa-close")
                        }), v.on("click", ".qtPlaces-mapmarker .close", function(e) {
                            e.preventDefault(), w(this).closest(".qtPlaces-mapmarker").removeClass("active")
                        }))
                    }
                }), v.map.fitBounds(v.bounds), v.animate({
                    opacity: "1"
                }, 800)
            }).delay(1e3).promise().done(function() {
                w("a.qtIndicator").click(function(e) {
                    e.preventDefault();
                    var t = w(this).attr("data-mapct");
                    w("#" + w(this).attr("data-mapct")).click()
                })
            })
        }
    }, w.fn.qtPlaceMenuswitch = function() {
        return w("body").off("click", ".qtPlaces-menuswitch"), w("body").on("click", ".qtPlaces-menuswitch", function(e) {
            e.preventDefault();
            var t = w(this);
            t.closest(".qtPlaces-container").toggleClass("open"), t.find("i").toggleClass("fa-bars").toggleClass("fa-close")
        }), !0
    }, w.fn.qtPlaceFilterResults = function(e, o) {
        return w("#" + e + " .qtPlaces-entry").each(function(e, t) {
            var a = w(t);
            a.hasClass(o) ? a.show().promise().done(function() {
                a.animate({
                    opacity: 1
                }, 500)
            }) : a.animate({
                opacity: 0
            }, 500).promise().done(function() {
                a.hide()
            })
        }), w("#" + e + " .qtPlaces-mapmarker").each(function(e, t) {
            var a = w(t);
            a.hasClass(o) ? a.show().promise().done(function() {
                a.animate({
                    opacity: 1
                }, 500)
            }) : a.animate({
                opacity: 0
            }, 500).promise().done(function() {
                a.hide()
            })
        }), !0
    }, w.fn.qtPlaceFilter = function(e) {
        return void 0 === e && (e = ".qtPlaces-container"), w("body").off("click", e + " [data-placefilter]"), w("body").on("click", e + " [data-placefilter]", function(e) {
            e.preventDefault();
            var t = w(this),
                a = t.attr("data-targetmap"),
                o = t.attr("data-placefilter");
            t.hasClass("active") ? (t.removeClass("active"), w.fn.qtPlaceFilterResults(a, "all")) : (t.siblings().removeClass("active"), t.addClass("active"), w.fn.qtPlaceFilterResults(a, o))
        }), !0
    }, w.fn.qtPlaceAutoBg = function(e) {
        void 0 === e && (e = ".qtPlaces-container"), w(e + " [data-qtautobg]").each(function(e) {
            var t = w(this),
                a = t.attr("data-qtautobg");
            t.css({
                "background-image": "url(" + a + ")"
            })
        })
    }, w.fn.qtPlacesInit = function() {
        w.fn.qtPlaceMenuswitch(), w.fn.qtPlaceFilter(), w.fn.qtPlaceAutoBg(), w.fn.qtPlaceDynamicMaps()
    };
    var e = [{
            featureType: "landscape",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            stylers: [{
                hue: "#00aaff"
            }, {
                saturation: -100
            }, {
                gamma: 2.15
            }, {
                lightness: 12
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                visibility: "on"
            }, {
                lightness: 24
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 57
            }]
        }],
        t = [{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 21
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#000000"
            }, {
                lightness: 40
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }];
    w.fn.qtDynamicMaps = function(e) {
        var t, a;
        void 0 === e && (e = "body"), w(e + " .qt_dynamicmaps").each(function(e, t) {
            var a = w(t),
                o = a.attr("data-coord").split(","),
                s = o[0],
                r = o[1],
                i = a.attr("id"),
                n = a.attr("data-colors"),
                l = a.attr("data-height"),
                p = a.attr("data-locationname");
            a.height(l);
            var c = new google.maps.Map(document.getElementById(i), {
                    zoom: 16,
                    height: l,
                    center: new google.maps.LatLng(s, r),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }),
                g = new google.maps.InfoWindow,
                y, e, d, h;
            y = new google.maps.Marker({
                position: new google.maps.LatLng(s, r),
                map: c
            }), google.maps.event.addListener(y, "click", (d = y, h = e, function() {
                g.setContent(p), g.open(c, d)
            }))
        })
    }, w.fn.QtPlacesStyles = function() {
        var a = "";
        w("[data-qtplaces-styles]").each(function(e, t) {
            a += w(t).data("qtplaces-styles")
        }), w("head").append('<style id="qtplaces-styles">' + a + "<style>")
    }, w(window).ready(function() {
        "undefined" != typeof google && (w.fn.qtDynamicMaps(), w.fn.qtPlacesInit(), w.fn.QtPlacesStyles())
    })
}(jQuery);
//# sourceMappingURL=script-min.js.map