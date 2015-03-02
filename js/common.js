function writeHeader(){
    var html = "";
    html +='<meta http-equiv="X-UA-Compatible" content="chrome=1">';
    html +='<meta name="description" content="Googleanalyticstraining.GitHub.io : Googleアナリティクスの概念や使い方などを解説します">';
    html +='<!-- Latest compiled and minified CSS -->';
    html +='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">';
    html +='<!-- Optional theme -->';
    html +='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">';
    html +='<!-- Latest compiled and minified JavaScript -->';
    html +='<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>';
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
    html +='<style>body { padding-top: 70px; }</style>';
    document.write(html);
}

function writeBodyHeader(){
    var html = "";

html +='<nav class="navbar navbar-inverse navbar-fixed-top">';
html +='<div class="container">';
html +='<div class="navbar-header">';
html +='<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">';
html +='<span class="sr-only">Toggle navigation</span>';
html +='<span class="icon-bar"></span>';
html +='<span class="icon-bar"></span>';
html +='<span class="icon-bar"></span>';
html +='</button>';
html +='<a class="navbar-brand" href="#">GoogleAnalyticsTraining</a>';
html +='</div>';
html +='<div id="navbar" class="collapse navbar-collapse">';
html +='<ul class="nav navbar-nav">';
html +='<li class="active"><a href="./index.html">Home</a></li>';
html +='<li><a href="./introduction.html">About</a></li>';
html +='<li><a href="./terminology.html">term</a></li>';
html +='<li><a href="./basic-tutorial.html">basic</a></li>';
html +='<li><a href="./high-level-tutorial.html">advanced</a></li>';
html +='<li><a href="./QandA.html>QandA</a></li>';
html +='<li><a href="./test.html">test</a></li>';
html +='<li><a href="./reference.html">reference</a></li>';
html +='</ul>';
html +='</div><!--/.nav-collapse -->';
html +='</div>';
html +='</nav>';

html +='<div class="container">';
html +='<!-- HEADER -->';
html +='<div id="header_wrap" class="outer">';
html +='<a id="forkme_banner" href="https://github.com/IS-Training/GoogleAnalytics">View on GitHub</a>';
html +='</div>';
    document.write(html);
}

function writeFooter(){
    var html = "";
    html +="<!-- FOOTER  -->";
    html +="<div id=\"footer_wrap\" class=\"outer\">";
    html +="<ul><li><a href =\"./index.html\">Top</li></ul>";
    html +="<p class=\"copyright\">Googleanalyticstraining.GitHub.io maintained by <a href=\"https://github.com/IS-Training\">IS-Training</a></p>";
    html +="<p>Published with <a href=\"http://pages.github.com\">GitHub Pages</a></p>";
    html +="</div>";
    html +="</div><!-- /.container -->";
    html +="</body>";
    html +="</html>";
    document.write(html);
}