<?php

/**
 * Project: canzalon.github.io
 * @author Christopher Anzalone
 * File: contentServer.php
 */


error_reporting(0);

$params = $_GET;

// if ($params["name"] != "contentView")
// {
// 	die("document \"".$params["name"]."\" not found.");
// }

switch ($params["page"])
{
	case "name":
		$file = "./index.html";
		break;
	case "about":
		$file = "./about.html";
		break;
	case "portfolio":
		$file = "./portfolio.html";
		break;
	case "resume":
		$file = "./resume.html";
		break;
	default: echo "Bad Request.";
}

$fh = fopen($file, "r") or die ("Unable to open file $file");

$output = fread($fh, filesize($file));

fclose($fh);

echo $output;


?>