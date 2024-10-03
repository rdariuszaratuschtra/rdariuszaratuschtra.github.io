Using fake directories for query string key=value pairs

NOTE: when mod_rewrite sees this rule in .htaccess:

RewriteRule ^database/landschappen$ database.php?cat=1

it will load the correct page but the page will think it is one dir higher
than it is supposed to. It will not find images and scripts. This rule:

RewriteRule ^landschappen$ database.php?cat=1

will work fine.

Solution is to use only absolute paths in database.php for images, scripts, css, etc.
However, this is rather cumbersome especially for the part where we search for the
thumb and image in the gallery folders. We are then forced to check whether the URL
exists, which is slow.
