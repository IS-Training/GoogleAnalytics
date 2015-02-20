function writeHeader(){
    var html = "";
    html +='<meta http-equiv="X-UA-Compatible" content="chrome=1">';
    html +='<meta name="description" content="Googleanalyticstraining.GitHub.io : Googleアナリティクスの概念や使い方などを解説します">';
    html +='<link rel="stylesheet" type="text/css" media="screen" href="stylesheets/stylesheet.css">';
    html +='<title>GoogleAnalyticsTraining</title>';
    html +='<!--アナリティクス-->';
    html +='<script>';
    html +='(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){';
    html +='(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),';
    html +='m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)';
    html +='})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');';
    html +='ga(\'create\', \'UA-59913539-1\', \'auto\');';
    html +='ga(\'require\', \'linkid\', \'linkid.js\');';
    html +='ga(\'require\', \'displayfeatures\');';
    html +='ga(\'send\', \'pageview\');';
    html +='</script>';
    /*PTengine*/
    html +='<!--PTengine-->';
    html +='<script type="text/javascript">';
    html +='window._pt_sp_2 = [];';
    html +='_pt_sp_2.push(\'setAccount,5da0e973\');';
    html +='var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");';
    html +='(function() {';
    html +='var atag = document.createElement(\'script\'); atag.type = \'text/javascript\'; atag.async = true;';
    html +='atag.src = _protocol + \'jsv2.ptengine.jp/pta.js\';';
    html +='var stag = document.createElement(\'script\'); stag.type = \'text/javascript\'; stag.async = true;';
    html +='stag.src = _protocol + \'jsv2.ptengine.jp/pts.js\';';
    html +='var s = document.getElementsByTagName(\'script\')[0];';
    html +='s.parentNode.insertBefore(atag, s);s.parentNode.insertBefore(stag, s);';
    html +='})();';
    html +='</script>';
    document.write(html);
}

function writeBodyHeader(){
    var html = "";

html +='<!-- HEADER -->';
html +='<div id="header_wrap" class="outer">';
html +='<header class="inner">';
html +='<a id="forkme_banner" href="https://github.com/IS-Training/GoogleAnalytics">View on GitHub</a>';
html +='<h1 id="project_title">GoogleAnalyticsTraining</h1>';
html +='<h2 id="project_tagline">Googleアナリティクスの概念や使い方などを解説します</h2>';
html +='</header>';
html +='</div>';
    document.write(html);
}

function writeFooter(){
    var html = "";
    html +="<!-- FOOTER  -->";
    html +="<div id=\"footer_wrap\" class=\"outer\">";
    html +="<footer class=\"inner\">";
    html +="<ul><li><a href =\"./index.html\">Top</li></ul>";
    html +="<p class=\"copyright\">Googleanalyticstraining.GitHub.io maintained by <a href=\"https://github.com/IS-Training\">IS-Training</a></p>";
    html +="<p>Published with <a href=\"http://pages.github.com\">GitHub Pages</a></p>";
    html +="</footer>";
    html +="</div>";
    html +="<!--CLIKEY-->";
    html +="<a title=\"Real Time Web Analytics\" href=\"http://clicky.com/100819187\"><img alt=\"Real Time Web Analytics\" src=\"//static.getclicky.com/media/links/badge.gif\" border=\"0\" /></a>";
    html +="<script src=\"//static.getclicky.com/js\" type=\"text/javascript\"></script>";
    html +="<script type=\"text/javascript\">try{ clicky.init(100819187); }catch(e){}</script>";
    html +="<noscript><p><img alt=\"Clicky\" width=\"1\" height=\"1\" src=\"//in.getclicky.com/100819187ns.gif\" /></p></noscript>";
    html +="</body>";
    html +="</html>";
    document.write(html);
}