<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">self.addEventListener('install', (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.waitUntil(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.open('teclado-cache').then((cache) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return cache.addAll([</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'./',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'./teclado-assistivo.html',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'./manifest.json',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'./icon-192.png',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>'./icon-512.png'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener('fetch', (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.respondWith(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.match(event.request).then((response) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return response || fetch(event.request);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
