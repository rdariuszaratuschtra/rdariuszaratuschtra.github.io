<?php

// database values
$phpwcms["db_host"]           = "localhost";
$phpwcms["db_user"]           = "rdariusz_nl";
$phpwcms["db_pass"]           = "fXQXdqE4";
$phpwcms["db_table"]          = "rdariusz_nl";
$phpwcms["db_prepend"]        = "";
$phpwcms["db_pers"]           = 1;

// site values
$phpwcms["site"]              = "http://www.rdariusz.nl/";
$phpwcms["admin_email"]       = "info@rdariusz.nl";

// paths
$phpwcms["DOC_ROOT"]          = $_SERVER['DOCUMENT_ROOT'];
$phpwcms["root"]         		= "wcms";         //default: ""
$phpwcms["file_path"]         = "phpwcms_filestorage";    //default: "phpwcms_filestorage"
$phpwcms["templates"]         = "phpwcms_template";    //default: "phpwcms_template"
$phpwcms["content_path"]      = "content"; //default: "content"
$phpwcms["cimage_path"]       = "images";  //default: "images"
$phpwcms["ftp_path"]          = "phpwcms_ftp";     //default: "phpwcms_ftp"

// content values
$phpwcms["file_maxsize"]      = 2097152; //Bytes (50 x 1024 x 1024)
$phpwcms["content_width"]     = 538; //max width of the article content column - important for rendering multi column images
$phpwcms["img_list_width"]    = 100; //max with of the list thumbnail image
$phpwcms["img_list_height"]   = 75; //max height of the list thumbnail image
$phpwcms["img_prev_width"]    = 538; //max width of the large preview image
$phpwcms["img_prev_height"]   = 400; //max height of the large preview image
$phpwcms["max_time"]          = 1800; //logout after max_time/60 seconds

// other stuff
$phpwcms["compress_page"]     = 0; //0 = OFF, 1-9: page compression ON (1 = low level, 9 = highest level)
$phpwcms["imagick"]           = 0; //0 = GD,  1 = ImageMagick, 2 = ImageMagick 4.2.9
$phpwcms["imagick_path"]      = ""; //Path to ImageMagick (default="" - none)
$phpwcms["use_gd2"]           = 1; //0 = GD1, 1 = GD2
$phpwcms["rewrite_url"]       = 0;  //whether URL should be rewritable
$phpwcms["wysiwyg_editor"]    = 2;  //0 = no wysiwyg editor, 1 = HTMLarea, 2 = FCKeditor, 3 = browser based
$phpwcms["phpmyadmin"]        = 0;  //enable/disable phpMyAdmin in Backend
$phpwcms["default_lang"]      = "en";  //default language
$phpwcms["charset"]           = "UTF-8";  //default charset 'iso-8859-1'
$phpwcms["allow_remote_URL"]  = 0;  //0 = no remote URL in {PHP:...} replacement tag allowed, 1 = allowed
$phpwcms["gt_mod"]            = 0;  //0 = Graphical Text MOD disabled, 1 = enabled
$phpwcms["jpg_quality"]       = 75; //JPG Quality Range 25-100
$phpwcms["sharpen_level"]     = 1;  //Sharpen Level - only ImageMagick: 0, 1, 2, 3, 4, 5 -- 0 = no, 5 = extra sharp
$phpwcms["allow_ext_init"]    = 1;  //allow including of custom external scripts at frontend initialization
$phpwcms["allow_ext_render"]  = 1;  //allow including of custom external scripts at frontend rendering
$phpwcms["cache_enabled"]     = 0;        //cache On/Off - 1 = caching On / 0 = caching Off (default)
$phpwcms["cache_timeout"]     = 0;  //default cache timeout setting in seconds - 0 = caching Off
$phpwcms["imgext_disabled"]   = '';  //comma seperated list of imagetypes which should not be handled "pdf,ps"
$phpwcms["multimedia_ext"]    = 'aif,aiff,mov,movie,mp3,mpeg,mpeg4,mpeg2,wav,swf,swc,ram,ra,wma,wmv,avi,au,midi,moov,rm,rpm,mid,midi'; //comma seperated list of file extensiosn allowed for multimedia
$phpwcms["inline_download"]   = 1;  //1 = try to display download documents in new window; 0 = show safe under dialog
$phpwcms["form_tracking"]     = 1; //make a db entry for each form
$phpwcms["formmailer_set"]    = array('allow_send_copy' => 0, 'global_recipient_email' => 'form@localhost'); //for better security handling
$phpwcms["allow_cntPHP_rt"]   = 0; //allow PHP replacement tags and includes in content parts

// dynamic ssl encryption engine
$phpwcms["site_ssl_mode"]     = '0'; // tuns the SSL Support of WCMS on(1) or off (0) DEFAULT '0'
$phpwcms["site_ssl_url"]      = '';  //URL assigned to the SSL Certificate. DON'T add a slash at the End! Exp. "https://www.yourdomainhere.tld"
$phpwcms["site_ssl_port"]     = '443'; //The Port on which you SSL Service serve the secure Sites. Servers DEFAULT is '443'

// smtp values
$phpwcms['SMTP_FROM_EMAIL']   = 'info@mail.com'; // reply/from email address
$phpwcms['SMTP_FROM_NAME']    = 'phpwcms webmaster'; // reply/from name
$phpwcms['SMTP_HOST']         = 'localhost'; // SMTP server (host/IP)
$phpwcms['SMTP_PORT']         = 25; // SMTP-Server port (default 25)
$phpwcms['SMTP_MAILER']       = 'mail'; // default phpMailer: smtp, mail (default), sendmail
$phpwcms['SMTP_AUTH']         = 0; // sets SMTP_AUTH to ON/OFF
$phpwcms['SMTP_USER']         = ''; // default SMTP login (user) name
$phpwcms['SMTP_PASS']         = ''; // default SMTP password


// Try to check and uncomment the DOCUMENT_ROOT if you have problems 
// often neccessary on IIS or default MacOS X webserver settings
// Do not use backslash "\" on Windows - always replace "\" by "/"
//$_SERVER['DOCUMENT_ROOT']     = '/customers/rdariusz.nl/rdariusz.nl/httpd.www';


?>