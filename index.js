;(function (d) {
  if (!d.visibilityState) {
    var s = d.createElement('script')
    s.src = 'https://static.tildacdn.com/js/tilda-polyfill-1.0.min.js'
    d.getElementsByTagName('head')[0].appendChild(s)
  }
})(document)
function t_onReady(func) {
  if (document.readyState != 'loading') {
    func()
  } else {
    document.addEventListener('DOMContentLoaded', func)
  }
}
function t_onFuncLoad(funcName, okFunc, time) {
  if (typeof window[funcName] === 'function') {
    okFunc()
  } else {
    setTimeout(function () {
      t_onFuncLoad(funcName, okFunc, time)
    }, time || 100)
  }
}
function t396_initialScale(t) {
  var e = document.getElementById('rec' + t)
  if (e) {
    var r = e.querySelector('.t396__artboard')
    if (r) {
      var a,
        i = document.documentElement.clientWidth,
        l = [],
        d = r.getAttribute('data-artboard-screens')
      if (d) {
        d = d.split(',')
        for (var o = 0; o < d.length; o++) l[o] = parseInt(d[o], 10)
      } else l = [320, 480, 640, 960, 1200]
      for (o = 0; o < l.length; o++) {
        var n = l[o]
        n <= i && (a = n)
      }
      var g = 'edit' === window.allrecords.getAttribute('data-tilda-mode'),
        u = 'center' === t396_getFieldValue(r, 'valign', a, l),
        c = 'grid' === t396_getFieldValue(r, 'upscale', a, l),
        t = t396_getFieldValue(r, 'height_vh', a, l),
        f = t396_getFieldValue(r, 'height', a, l),
        e =
          (!!window.opr && !!window.opr.addons) ||
          !!window.opera ||
          -1 !== navigator.userAgent.indexOf(' OPR/')
      if (!g && u && !c && !t && f && !e) {
        for (
          var s = parseFloat((i / a).toFixed(3)),
            _ = [
              r,
              r.querySelector('.t396__carrier'),
              r.querySelector('.t396__filter'),
            ],
            o = 0;
          o < _.length;
          o++
        )
          _[o].style.height = parseInt(f, 10) * s + 'px'
        for (
          var h = r.querySelectorAll('.t396__elem'), o = 0;
          o < h.length;
          o++
        )
          h[o].style.zoom = s
      }
    }
  }
}
function t396_getFieldValue(t, e, r, a) {
  var i = a[a.length - 1],
    l =
      r === i
        ? t.getAttribute('data-artboard-' + e)
        : t.getAttribute('data-artboard-' + e + '-res-' + r)
  if (!l)
    for (var d = 0; d < a.length; d++) {
      var o = a[d]
      if (
        !(o <= r) &&
        (l =
          o === i
            ? t.getAttribute('data-artboard-' + e)
            : t.getAttribute('data-artboard-' + e + '-res-' + o))
      )
        break
    }
  return l
}

;(function () {
  if (
    /bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(
      navigator.userAgent
    ) === false &&
    typeof sessionStorage != 'undefined' &&
    sessionStorage.getItem('visited') !== 'y' &&
    document.visibilityState
  ) {
    var style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML =
      '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}'
    document.getElementsByTagName('head')[0].appendChild(style)
    function t_setvisRecs() {
      var alr = document.querySelectorAll('.t-records')
      Array.prototype.forEach.call(alr, function (el) {
        el.classList.add('t-records_animated')
      })
      setTimeout(function () {
        Array.prototype.forEach.call(alr, function (el) {
          el.classList.add('t-records_visible')
        })
        sessionStorage.setItem('visited', 'y')
      }, 400)
    }
    document.addEventListener('DOMContentLoaded', t_setvisRecs)
  }
})()

t_onFuncLoad('t396_initialScale', function () {
  t396_initialScale('542068721')
})
t_onReady(function () {
  t_onFuncLoad('t396_init', function () {
    t396_init('542068721')
  })
})

t_onReady(function () {
  setTimeout(function () {
    t_onFuncLoad('t826_init', function () {
      t826_init('542068722')
    })
  })
})

if (!window.mainTracker) {
  window.mainTracker = 'tilda'
}
setTimeout(function () {
  ;(function (d, w, k, o, g) {
    var n = d.getElementsByTagName(o)[0],
      s = d.createElement(o),
      f = function () {
        n.parentNode.insertBefore(s, n)
      }
    s.type = 'text/javascript'
    s.async = true
    s.key = k
    s.id = 'tildastatscript'
    s.src = g
    if (w.opera == '[object Opera]') {
      d.addEventListener('DOMContentLoaded', f, false)
    } else {
      f()
    }
  })(
    document,
    window,
    '64212e811e0a7c9a7055ad5149b0d061',
    'script',
    'https://static.tildacdn.com/js/tilda-stat-1.0.min.js'
  )
}, 2000)
