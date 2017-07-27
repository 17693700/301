var sme = {};

sme.data = {}, sme.fn = {}, function() {
    String.prototype.Trim = function() {
        var d = this;
        d = d.replace(/^\s\s*/, "");
        var b = /\s/, c = d.length;
        while (b.test(d.charAt(--c))) ;
        return d.slice(0, c + 1);
    }, String.prototype.ReplaceAll = function(b, d, c) {
        return RegExp.prototype.isPrototypeOf(b) ? this.replace(b, d) : this.replace(new RegExp(b, c ? "gi" : "g"), d);
    };
    var a = window.sme || {};
    a = {
        "_INSTALL": function() {
            window.sme = a;
        },
        "Config": {},
        "Base": {},
        "DAO": {},
        "Business": {},
        "UI": {},
        "Page": {}
    }, a.Config = {
        "CookieDomain": "#",
        "WwwDomain": "http://www.#",
        "MyDomain": "http://my.#",
        "PassportDomain": "https://passport.#",
        "StaticsDomain": "http://static.#",
        "ShoppingCartDomain": "http://cart.#",
        "ZoroDomain": "http://item.#",
        "ezQoute": "http://ezquote.#/FramePages/FramePage.aspx?mainPage=quot_cart&amp;rdm=9cc84f1f-3a9a-4769-8e9d-d667d2ab18eb",
        "CM_ClientID": "90401709",
        "CM_Env": !0,
        "CM_Url": "data.cn.coremetrics.com",
        "CM_Domain": "#"
    }, a.Base = {
        "Verify": {
            "TestRegExp": function(b, c) {
                return b = new RegExp(b), b.test(c);
            },
            "IsEmpty": function(b) {
                return typeof b != "string" ? !1 : b.Trim() != "" ? !1 : !0;
            },
            "IsNumber": function(b) {
                return typeof b == "undefined" ? !1 : isNaN(b.toString()) ? !1 : !0;
            },
            "IsLetter": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^[A-Za-z]+$/;
                return this.TestRegExp(c, b);
            },
            "IsLowerCase": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^[a-z]+$/;
                return this.TestRegExp(c, b);
            },
            "IsUpperCase": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^[A-Z]+$/;
                return this.TestRegExp(c, b);
            },
            "IsChar": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^\w+$/;
                return this.TestRegExp(c, b);
            },
            "IsCharUnderline": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^(\w*)(\_+)(\w*)$/;
                return this.TestRegExp(c, b);
            },
            "IsTelephone": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^(\((\d{2,5})\)|\d{2,5})?(\s*)(-?)(\s*)(\d{5,9})$/;
                return this.TestRegExp(c, b);
            },
            "IsPhone": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^(\+86)?1[3,4,5,8](\d{9})$/;
                return this.TestRegExp(c, b);
            },
            "IsPassword": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^[a-zA-Z0-9~!.,={}<>;:@#$%^&*()_+]+$/;
                return this.TestRegExp(c, b);
            },
            "IsEmail": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^\w+((-\w+)|(.\w+))*@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+)*.[A-Za-z0-9]+$/;
                return this.TestRegExp(c, b);
            },
            "IsIdentityCode": function(b) {
                if (typeof b == "undefined") return !1;
                var c = /^[1-9](\d{5})(([1-9]\d)|([1,2](\d{3})))(0[1-9]|1[0,2])(0[1-9]|[1,2]\d|3[0,1])(\d{3})([0-9Xx]+)$/;
                return this.TestRegExp(c, b);
            }
        },
        "cookie": function(c, k, n) {
            if (typeof k == "undefined") {
                var e = null;
                if (document.cookie && document.cookie != "") {
                    var l = document.cookie.split(";");
                    for (var j = 0; j < l.length; j++) {
                        var d = jQuery.trim(l[j]);
                        if (d.substring(0, c.length + 1) == c + "=") {
                            e = decodeURIComponent(d.substring(c.length + 1));
                            break;
                        }
                    }
                }
                return e;
            }
            n = n || {}, n.expires = 365, k === null && (k = "", n.expires = -1);
            var f = "";
            if (n.expires && (typeof n.expires == "number" || n.expires.toUTCString)) {
                var g;
                typeof n.expires == "number" ? (g = new Date, g.setTime(g.getTime() + n.expires * 24 * 60 * 60 * 1e3)) : g = n.expires, f = "; expires=" + g.toUTCString();
            }
            var m = n.path ? "; path=" + n.path : "; path=/", h = n.domain ? "; domain="(n.domain) : "; domain=" + a.Config.CookieDomain, b = n.secure ? "; secure" : "";
            document.cookie = [ c, "=", encodeURIComponent(k), f, m, h, b ].join("");
        },
        "CheckType": {
            "IsArray": function(b) {
                return b && typeof b == "object" && typeof b.length == "number" && typeof b.splice == "function";
            }
        },
        "EncodeContent": function(b) {
            return encodeURI(b).replace(/&/g, "%26").replace(/\+/g, "%2B").replace(/\s/g, "%20").replace(/#/g, "%23");
        },
        "getQueryString": function(b) {
            var c = new RegExp("(^|&)" + b + "=([^&]*)(&|$)", "i"), d = window.location.search.substr(1).match(c);
            return d != null ? unescape(d[2]) : null;
        },
        "Event": function() {
            function c(d) {
                b.pageX = d.clientX + $(window).scrollLeft(), b.pageY = d.clientY + $(window).scrollTop();
            }
            var b = {
                "pageX": 0,
                "pageY": 0,
                "Set": function() {
                    var d = arguments;
                    if (d.length == 0) return d = null, this;
                    if (d.length == 1 && typeof d[0] == "object") {
                        for (var e in d[0]) this[e] = d[0][e];
                        return d = null, this;
                    }
                    if (d.length == 2) return opt[d[0]] = d[1], d = null, this;
                }
            };
            return function(d) {
                return typeof d != "undefined" && (d = d || event, c(d)), b;
            };
        }()
    }, a.DAO = {
        "ShoppingCart": {
            "ChangeNumItem": function(b, c, d) {
                a.UI.Loading.Show(), $.sme_Ajax({
                    "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=313&r=" + Math.random(),
                    "data": "data=" + b.join("|") + "&callback=?",
                    "success": function(e) {
                        a.UI.Loading.Close(), typeof d != "undefined" && d();
                    }
                });
            },
            "RemoveItem": function(b, c) {
                $.sme_Ajax({
                    "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=312&r=" + Math.random(),
                    "data": "data=" + b + "&callback=?",
                    "success": function(d) {
                        typeof c != "undefined" && c();
                    }
                });
            },
            "ClearCart": function(b) {
                $.sme_Ajax({
                    "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=311&r=" + Math.random(),
                    "data": "&callback=?",
                    "success": function(c) {
                        typeof b != "undefined" && b();
                    }
                });
            }
        }
    }, a.Business = {}, a.UI = {
        "Area": {
            "GetCart": function() {
                var b = a.Page.HeaderFooter;
                return $(".area-expand").hover(function() {
                    clearTimeout(b._AreaTimer), b._AreaTimer = null;
                }, function() {
                    b._AreaTimer = setTimeout(function() {
                        $(".area-expand").hide();
                    }, 200);
                }), this;
            },
            "Show": function() {
                $(".area-expand").show();
            },
            "Hide": function() {
                $(".area-expand").hide();
            }
        },
        "ShoppingCart": {
            "AddNums": function(b, c) {
                a.DAO.ShoppingCart.ChangeNumItem(b, c, function() {
                    ShowGoods();
                });
            },
            "SubNums": function(b, c) {
                a.DAO.ShoppingCart.ChangeNumItem(b, c, function() {
                    ShowGoods();
                });
            },
            "ChangeNums": function(b, c) {
                a.DAO.ShoppingCart.ChangeNumItem(b, c, function() {
                    ShowGoods();
                });
            },
            "Delete": function(b) {
                a.DAO.ShoppingCart.RemoveItem(b, function() {
                    ShowGoods();
                });
            },
            "ClearCart": function() {
                a.DAO.ShoppingCart.ClearCart(function() {
                    ShowGoods();
                }), $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            }
        },
        "MiniCart": {
            "Delete": function(b) {
                a.DAO.ShoppingCart.RemoveItem(b, function() {
                    a.UI.MiniCart.GetCart();
                });
            },
            "GetCart": function(b) {
                return $.sme_Ajax({
                    "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=318&r=" + Math.random(),
                    "data": "&callback=?",
                    "success": function(e) {
                        e.status == 1 && ($("#minicartcnt").html(e.itemcnt), $("#divShopCart").html(e.data)), $("#btnGoPay").click(function() {
                            window.parent.location = a.Config.ShoppingCartDomain + "/cart.aspx";
                        });
                        var c = a.Page.HeaderFooter;
                        $("#divShopCart").hover(function() {
                            clearTimeout(c._CartTimer), c._CartTimer = null;
                        }, function() {
                            c._CartTimer = setTimeout(function() {
                                $("#divShopCart").hide();
                            }, 200);
                        }), typeof b != "undefined" && b();
                    }
                }), this;
            },
            "ClearCart": function() {
                a.DAO.ShoppingCart.ClearCart(function() {
                    a.UI.MiniCart.GetCart(function() {
                        a.UI.MiniCart.Show();
                    });
                }), $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "Show": function() {
                $("#divShopCart").show();
            },
            "Hide": function() {
                $("#divShopCart").hide();
            }
        },
        "PopConsigneeInfo": {
            "gbClose": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "Modify": function(b) {
                this.gbClose(), $.gbox.iframe(a.Config.MyDomain + "/member/addressframe.aspx?oid=" + b, {
                    "width": 677,
                    "height": 423,
                    "unload": !0,
                    "drag": !0
                });
            }
        },
        "PopLogin": {
            "gbClose": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "login": function() {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.ShoppingCartDomain + "/member/loginframe.aspx", {
                        "width": 490,
                        "height": 281,
                        "unload": !0,
                        "drag": !0
                    });
                }, 20);
            },
            "regist": function() {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.ShoppingCartDomain + "/member/regframe.aspx", {
                        "width": 490,
                        "height": 423,
                        "unload": !0,
                        "drag": !0
                    });
                }, 20);
            }
        },
        "PassportPopLogin": {
            "gbClose": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "login": function() {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.PassportDomain + "/member/loginframe.aspx", {
                        "width": 490,
                        "height": 281,
                        "unload": !0,
                        "drag": !0,
                        "modal": !1,
                        "modalClose": !1
                    });
                }, 20);
            },
            "regist": function() {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.PassportDomain + "/member/regframe.aspx", {
                        "width": 490,
                        "height": 423,
                        "unload": !0,
                        "drag": !0,
                        "modal": !1,
                        "modalClose": !1
                    });
                }, 20);
            }
        },
        "Pop_Login": {
            "gbClose": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "login": function(b) {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.WwwDomain + "/member/loginframe.aspx?r=" + b, {
                        "width": 490,
                        "height": 281,
                        "unload": !0,
                        "drag": !0
                    });
                }, 20);
            },
            "regist": function(b) {
                this.gbClose(), setTimeout(function() {
                    $.gbox.iframe(a.Config.WwwDomain + "/member/regframe.aspx?r=" + b, {
                        "width": 490,
                        "height": 423,
                        "unload": !0,
                        "drag": !0
                    });
                }, 20);
            }
        },
        "GlobalWebsite": function() {
            var b = this;
            b._GlobalTimer = null, $("#fnGlobal").mouseenter(function() {
                clearTimeout(b._GlobalTimer), b._GlobalTimer = null, $("#divGlobal").show(), $(".global-web").addClass("global-web-on");
            }).mouseleave(function() {
                b._GlobalTimer = setTimeout(function() {
                    $("#divGlobal").hide(), $(".global-web").removeClass("global-web-on");
                }, 200);
            }), $("#divGlobal").hover(function() {
                clearTimeout(b._GlobalTimer), b._GlobalTimer = null;
            }, function() {
                b._GlobalTimer = setTimeout(function() {
                    $("#divGlobal").hide();
                }, 200);
            });
        },
        "Init": function() {
            var b = this;
            b._GlobalTimer = null, $("#fnInit").mouseenter(function() {
                clearTimeout(b._GlobalTimer), b._GlobalTimer = null, $("#divInit").show(), $("#fnInit").addClass("menu-on"), $("#fnInitArr").removeClass("arrow-on").addClass("arrow-off");
            }).mouseleave(function() {
                b._GlobalTimer = setTimeout(function() {
                    $("#divInit").hide(), $("#fnInit").removeClass("menu-on"), $("#fnInitArr").removeClass("arrow-off").addClass("arrow-on");
                }, 200);
            }), $("#divInit").hover(function() {
                clearTimeout(b._GlobalTimer), b._GlobalTimer = null;
            }, function() {
                b._GlobalTimer = setTimeout(function() {
                    $("#divInit").hide(), $("#fnInit").removeClass("menu-on"), $("#fnInitArr").removeClass("arrow-off").addClass("arrow-on");
                }, 200);
            });
        },
        "PopAreaSelector": {
            "Close": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "Show": function() {
                this.Close(), $.gbox($("#popAreaSelector").html());
            }
        },
        "Loading": {
            "Close": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "Show": function() {
                this.Close(), $.gbox($("#popLoading").html(), {
                    "isShowMask": !1
                });
            }
        },
        "MessageBox": {
            "Close": function() {
                $(".gbox-wrapper").length != 0 && $(".gbox-close").trigger("click");
            },
            "Show": function(c, b) {
                this.Close(), c.next("p").text(b), $.gbox(c.html(), {
                    "isShowMask": !1
                });
            }
        },
        "LazyLoad": {
            "_initial": null,
            "TYPE": {
                "Image": "Image",
                "Function": "Function"
            },
            "LOADANIMATION": {
                "FADEIN": "fadeIn"
            },
            "fnConfig": function() {
                var b = {}, e = function(g, f) {
                    return b[g] = f, this;
                }, d = function(f) {
                    return typeof b[f] == "undefined" ? null : b[f];
                }, c = function(f) {
                    return typeof b[f] == "undefined" ? !1 : (delete b[f], !0);
                };
                return {
                    "add": e,
                    "get": d,
                    "remove": c
                };
            }(),
            "init": function() {
                var e = {
                    "obj": null,
                    "length": 0
                }, b = function() {
                    return $("*[lazyload]");
                }, l = function() {
                    return $("img[lazyload]");
                }, n = function(q) {
                    return a.UI.LazyLoad.fnConfig.get(q);
                }, h = function(u, s) {
                    var r = {}, t, q;
                    return u.each(function(v) {
                        t = $(this), q = g($(this).attr("lazyload")), r[v] = {
                            "entity": $(this),
                            "type": q.type,
                            "lazyload": q.lazyload
                        }, e.length++;
                    }), typeof s == "boolean" && s && o(r), r;
                }, o = function(q) {
                    e.obj = q;
                }, f = function(s, r, q) {
                    e.obj == null && (e.obj = {}), handler = (new Date).getTime() / 1e3, e.obj[handler] = {
                        "entity": s,
                        "type": r,
                        "lazyload": q
                    }, e.length++;
                    return;
                }, d = function() {
                    return {
                        "left": document.documentElement.scrollLeft || document.body.scrollLeft,
                        "top": document.documentElement.scrollTop || document.body.scrollTop,
                        "width": document.documentElement.clientWidth,
                        "height": document.documentElement.clientHeight
                    };
                }, k = function(q) {
                    return {
                        "left": $(q).offset().left,
                        "top": $(q).offset().top,
                        "width": $(q).outerWidth(),
                        "height": $(q).outerHeight()
                    };
                }, g = function(s) {
                    var q = s.indexOf(":"), u = a.UI.LazyLoad.TYPE;
                    if (q <= 0) return {
                        "type": u.Image,
                        "lazyload": s
                    };
                    var t = s.slice(0, q++), r = typeof u[t] != "undefined" ? s.slice(q) : s;
                    return t = r == s ? "Image" : t, {
                        "type": t,
                        "lazyload": r
                    };
                }, j = function() {
                    var v = null, r = null, x = null, q = null, s = a.UI.LazyLoad.TYPE, u = d(), w;
                    for (i in e.obj) {
                        v = e.obj[i], r = v.entity;
                        if (r.length == 0) continue;
                        w = k(r);
                        var t = r.attr("lazyload");
                        if (p(w, u) && typeof e.obj[i] != "undefined" || t == undefined) {
                            x = v.type, q = v.lazyload;
                            if (x == s.Image) {
                                c(r, q), delete e.obj[i], e.length--;
                                continue;
                            }
                            if (x == s.Function) {
                                m(r, q), delete e.obj[i], e.length--;
                                continue;
                            }
                        }
                    }
                }, c = function(r, s) {
                    typeof c.applying == "undefined" && (c.applying = function(u, v) {
                        var t = u.attr("tagName") || u.prop("tagName");
                        t.toLowerCase() == "img" ? u.css("display", "none").attr("src", v).show().removeAttr("lazyload") : u.css("background", "url(" + s + ") no-repeat 0 0").fadeIn(800).removeAttr("lazyload");
                        return;
                    });
                    var q = new Image;
                    q.src = s, q.complete ? (c.applying(r, q.src), q = null) : q.onload = function() {
                        c.applying(r, q.src), q = null;
                    };
                }, m = function(r, q) {
                    typeof q != "function" && (q = n(q));
                    if (!q) return;
                    q.apply(r);
                }, p = function(x, v) {
                    var u = x.left + x.width / 2, s = v.left + v.width / 2, w = x.top + x.height / 2, t = v.top + v.height / 2, q = (x.width + v.width) / 2, r = (x.height + v.height) / 2;
                    return Math.abs(u - s) <= q && Math.abs(w - t) <= r;
                };
                return {
                    "getLazyObj": b,
                    "addLazyObj": f,
                    "initLazyObj": h,
                    "setLazyObj": o,
                    "isInter": p,
                    "each": j,
                    "loadImage": c
                };
            },
            "Run": function(d, b) {
                this._initial == null && (this._initial = this.init());
                var c = this._initial;
                return (typeof d == "undefined" || typeof d.length != "number" || typeof d.size != "function" || typeof d.each != "function") && c.initLazyObj(c.getLazyObj(), !0), b = b || $(window), b.scroll(function() {
                    c.each();
                }), b.resize(function() {
                    c.each();
                }), c.each(), this;
            },
            "Add": function(f, d, b, e) {
                this._initial == null && (this._initial = this.init());
                var c = this._initial;
                return c.addLazyObj(f, d, b), d == this.TYPE.Function && this.fnConfig.add(b, e), c.each(), this;
            }
        }
    }, a.Page.HeaderFooter = {
        "SearchBar": function() {
            function c(d) {
                if (typeof d != "string") return !1;
                d = d.Trim();
                if (d == "" || d == b) return !1;
                $("#categoryCode").length != 0 ? window.location = a.Config.ZoroDomain + "/s/?c=" + $("#categoryCode").val() + "&q=" + d : window.location = a.Config.ZoroDomain + "/s/?q=" + d;
            }
            var b = "请输入您要搜索的产品名称，型号，或SKU号码";
            return function(d, g) {
                var f = a.Config.ZoroDomain + "/api/suggest/v1/input_search/", k = $("#suggest_debug_time"), h = "suggest_debug_time";
                k.get(0) ? $("#debug_clear").click(function() {
                    return k.html(""), !1;
                }) : h = "";
                var e = "combo_keywords", j = "categoryCode";
                $("#searchDiv").ajaxComboBox(f, {
                    "category": j,
                    "suggest_debug": h,
                    "select_callback": function(l) {
                        $("#categoryCode").length != 0 ? window.location = a.Config.ZoroDomain + "/s/?c=" + $("#categoryCode").val() + "&q=" + d.val() : window.location = a.Config.ZoroDomain + "/s/?q=" + d.val();
                    }
                }), d.focus(function() {
                    $(this).css({
                        "color": "#000"
                    }), $(this).val() == b && $(this).val("");
                }), d.blur(function() {
                    $(this).css({
                        "color": "#aaa"
                    }), $(this).val() == "" && $(this).val(b);
                }), d.keypress(function(l) {
                    l = l || event;
                    if (l.keyCode == 13) return c($(this).val()), !1;
                }), g.bind("click", function() {
                    c(d.val());
                });
            };
        }(),
        "BindArea": function(c) {
            var b = this;
            b._AreaTimer = null, $("." + c).hover(function() {
                var d = $(this);
                clearTimeout(d._AreaTimer), d._AreaTimer = null, a.UI.Area.GetCart().Show();
            }, function() {
                b._AreaTimer = setTimeout(function() {
                    a.UI.Area.Hide();
                }, 200);
            });
        },
        "SelectProvince": function(c, b) {
            a.Base.cookie("provinceid", c), a.Base.cookie("provincename", b);
        },
        "SelectCity": function(c, b) {
            a.Base.cookie("cityid", c), a.Base.cookie("cityname", b);
        },
        "SelectArea": function(c, b) {
            a.Base.cookie("areaid", c), a.Base.cookie("areaname", b);
        },
        "BindMiniCart": function() {
            a.UI.MiniCart.GetCart(a.UI.MiniCart.Hide());
            var b = this;
            b._CartTimer = null, $("#fnMyShopcart").mouseenter(function() {
                var c = $(this);
                clearTimeout(c._CartTimer), c._CartTimer = null, a.UI.MiniCart.GetCart(function() {
                    a.UI.MiniCart.Show();
                });
            }).mouseleave(function() {
                b._CartTimer = setTimeout(function() {
                    a.UI.MiniCart.Hide();
                }, 200);
            });
        },
        "BindNav": function() {
            var d = $("#category"), b = $("#J_category"), c = function() {
                $.sme_Ajax({
                    "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=1&r=" + Math.random(),
                    "data": "&callback=?",
                    "success": function(f) {
                        var e = f.data;
                        b.attr("load", "1").html(e), b.find("li").Jdropdown({
                            "delay": 50
                        });
                    }
                });
            };
            d.one("mouseover", function() {
                var e = $("#J_category").attr("load");
                e || c();
            }), b.attr("auto") != "0" && d.Jdropdown({
                "delay": 50
            });
        },
        "SetLoginLink": function() {
            return location.href = a.Config.PassportDomain + "/member/login.aspx?returl=" + escape(location.href).replace(/\//g, "%2F"), !1;
        },
        "SetRegisterLink": function() {
            return location.href = a.Config.PassportDomain + "/member/register.aspx?returl=" + escape(location.href), !1;
        },
        "SetCurrentUserOut": function() {
            var b = [];
            $.sme_Ajax({
                "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=10&r=" + Math.random(),
                "data": "&callback=?",
                "success": function(c) {
                    window.location = a.Config.WwwDomain;
                }
            });
        },
        "SetCurrentUserInfo": function() {
            var b = [];
            $.sme_Ajax({
                "url": a.Config.WwwDomain + "/ajax/AjaxHandler.ashx?ct=9&r=" + Math.random(),
                "data": "&callback=?",
                "success": function(c) {
                    c.status == 1 ? (b.push('<a href="javascript:;" onclick="javascript:sme.Page.HeaderFooter.SetCurrentUserOut();" class="logout weaken-link">[退出]</a>'), b.push('<p class="user-name">欢迎回来，' + c.username + "&nbsp;</p>"), $("#divWelcome").hide(), $("#divUserInfoPanel").parent().removeClass("first")) : (b.push('<p class="user-name">欢迎来到固安捷，请<a class="prominent-link" href="javascript:sme.Page.HeaderFooter.SetLoginLink();">登录</a>或<a class="prominent-link" href="javascript:sme.Page.HeaderFooter.SetRegisterLink();">免费注册</a></p>'), $("#divUserInfoPanel").parent().addClass("first")), $("#divUserInfoPanel").html(b.join(""));
                }
            });
        },
        "AddFavorite": function(c, d) {
            var b = c, e = d;
            document.all && window.external ? window.external.AddFavorite(b, e) : window.sidebar ? window.sidebar.addPanel(e, b, "") : $.gbox.alert("浏览器不支持，请手动加入收藏夹", {
                "ok": function() {
                    this.hide();
                }
            });
        },
        "Scroll": function(j, c) {
            var g = document.getElementById(j);
            if (!g) return;
            if (/msie (\d+\.\d+)/i.test(navigator.userAgent)) {
                var f = window.innerHeight, h = document;
                typeof f != "number" && (document.compatMode == "CSS1Compat" ? f = document.documentElement.clientHeight : f = document.body.clientHeight);
                var b = window.pageYOffset || h.documentElement.scrollTop || h.body.scrollTop;
                c.addclass && (g.className = c.addclass), g.style.position = "absolute", c.show && (g.style.top = b + f - c.top + "px", g.style.display = "block"), window.attachEvent("onscroll", function() {
                    var d = window.pageYOffset || h.documentElement.scrollTop || h.body.scrollTop;
                    g.style.top = d + f - c.top + "px", c.autoHidden && (d == 0 ? g.style.display = "none" : g.style.display = "block");
                });
            } else {
                var g = document.getElementById(j);
                typeof f != "number" && (document.compatMode == "CSS1Compat" ? f = document.documentElement.clientHeight : f = document.body.clientHeight), c.show && (g.style.display = "block");
                var e = f - c.top;
                g.style.top = e + "px", window.addEventListener("scroll", function() {
                    c.autoHidden && ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) == 0 ? g.style.display = "none" : g.style.display = "block");
                }, !1);
            }
        }
    }, a._INSTALL();
}(), $(function() {
    try {
        document.execCommand("BackgroundImageCache", !1, !0);
    } catch (a) {}
    $("#top").length > 0 && sme.Page.HeaderFooter.SetCurrentUserInfo(), $(".cart-bar").length > 0 && sme.Page.HeaderFooter.BindMiniCart(), sme.Page.HeaderFooter.BindNav(), $("#iptSearch").length != 0 && sme.Page.HeaderFooter.SearchBar($("#iptSearch"), $("#btnSearch")), sme.UI.LazyLoad.Run(), sme.Page.HeaderFooter.Scroll("backtop", {
        "autoHidden": !0,
        "top": 100
    }), $("#fnGlobal").length > 0 && sme.UI.GlobalWebsite(), sme.UI.Init();
}), function(a) {
    a.fn.Jdropdown = function(h, g) {
        if (!this.length) return;
        typeof h == "function" && (g = h, h = {});
        var j = a.extend({
            "event": "mouseover",
            "current": "hover",
            "delay": 0
        }, h || {}), f = j.event == "mouseover" ? "mouseout" : "mouseleave";
        a.each(this, function() {
            var b = null, c = null, d = !1;
            a(this).bind(j.event, function() {
                if (d) clearTimeout(c); else {
                    var e = a(this);
                    b = setTimeout(function() {
                        e.addClass(j.current), d = !0, g && g(e);
                    }, j.delay);
                }
            }).bind(f, function() {
                if (d) {
                    var e = a(this);
                    c = setTimeout(function() {
                        e.removeClass(j.current), d = !1;
                    }, j.delay);
                } else clearTimeout(b);
            });
        });
    };
}(jQuery), jQuery.extend({
    "sme_Ajax": function(a) {
        if (a.url == undefined) return;
        a.type == undefined && (a.type = "POST"), a.cache == undefined && (a.cache = !1), a.dataType == undefined && (a.dataType = "jsonp"), a.success == undefined && (a.success = function(b) {
            alert(b);
        }), a.data == undefined && (a.data = ""), $.ajax(a);
    }
});