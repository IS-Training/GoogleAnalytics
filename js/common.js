function writeHeader(){
    var html = "";
    html +='<meta http-equiv="X-UA-Compatible" content="chrome=1">';
    html +='<meta name="description" content="Googleanalyticstraining.GitHub.io : Googleアナリティクスの概念や使い方などを解説します">';
    html +='<link rel="stylesheet" type="text/css" media="screen" href="stylesheets/stylesheet.css">';
    html +='<title>GoogleAnalyticsTraining</title>';
    html +='<script>';
    html +='(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){';
    html +='(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),';
    html +='m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)';
    html +='})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');';
    html +='ga(\'create\', \'UA-59913539-1\', \'auto\');';
    html +='ga(\'send\', \'pageview\');';
    html +='</script>';
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
    html +="</body>";
    html +="</html>";
    document.write(html);
}