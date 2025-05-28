<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-gb" xml:lang="en-gb">
<head>

<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="en-gb" />
<meta http-equiv="content-style-type" content="text/css" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="resource-type" content="document" />
<meta name="distribution" content="global" />
<meta name="copyright" content="2002-2006 phpBB Group" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<title>Grave Addiction Message Board &bull; Search</title>

<link rel="stylesheet" href="./styles/subsilver2/theme/stylesheet.css" type="text/css" />

<script type="text/javascript">
<!--

function popup(url, width, height)
{
   window.open(url.replace(/&amp;/g, '&'), '_popup', 'HEIGHT=' + height + ',resizable=yes,scrollbars=yes, WIDTH=' + width);
   return false;
}

function jumpto()
{
   var page = prompt('Enter the page number you wish to go to.:', '');
   var perpage = '';
   var base_url = '';

   if (page !== null && !isNaN(page) && page > 0)
   {
      document.location.href = base_url.replace(/&amp;/g, '&') + '&start=' + ((page - 1) * perpage);
   }
}

/**
* Find a member
*/
function find_username()
{
      return false;
}

/**
* Mark/unmark checklist
* id = ID of parent container, name = name prefix, state = state [true/false]
*/
function marklist(id, name, state)
{
   var parent = document.getElementById(id);
   if (!parent)
   {
      eval('parent = document.' + id);
   }

   if (!parent)
   {
      return;
   }

   var rb = parent.getElementsByTagName('input');
   
   for (var r = 0; r < rb.length; r++)
   {
      if (rb[r].name.substr(0, name.length) == name)
      {
         rb[r].checked = state;
      }
   }
}


//-->
</script>
</head>
<body class="ltr">

<a name="top"></a>

<div id="wrapheader">

   <div id="logodesc">
      <table width="100%" cellspacing="0">
      <tr>
         <td width="100%"><a href="./index.php"><img src="./styles/subsilver2/imageset/site_logo2.jpg" alt="" title="" /></a></td>
      </tr>
      </table>
   </div>

   <div id="menubar">
      <table width="100%" cellspacing="0">
      <tr>
         <td class="genmed">
                     </td>
         <td class="genmed" align="right">
            <a href="./faq.php"><img src="./styles/subsilver2/theme/images/icon_mini_faq.gif" width="12" height="13" alt="*" /> FAQ</a>
            &nbsp; &nbsp;<a href="./search.php"><img src="./styles/subsilver2/theme/images/icon_mini_search.gif" width="12" height="13" alt="*" /> Search</a>         </td>
      </tr>
      </table>
   </div>

   <div id="datebar">
      <table width="100%" cellspacing="0">
      <tr>
         <td class="gensmall">Last visit was: Fri Jun 29, 2007 3:01 am</td>
         <td class="gensmall" align="right">It is currently Fri Jun 29, 2007 3:01 am<br /></td>
      </tr>
      </table>
   </div>

</div>

<div id="wrapcentre">

      <p class="searchbar">
      <span style="float: left;"><a href="./search.php?search_id=unanswered">View unanswered posts</a> | <a href="./search.php?search_id=active_topics">View active topics</a></span>
            <span style="float: right;"><a href="./search.php?search_id=newposts">View new posts</a> | <a href="./search.php?search_id=egosearch">View your posts</a></span>
         </p>
   
   <br style="clear: both;" />

   <table class="tablebg" width="100%" cellspacing="1" cellpadding="0" style="margin-top: 5px;">
	<tr>
		<td class="row1">
			<p class="breadcrumbs"><a href="./index.php">Board index</a></p>
			<p class="datetime">All times are UTC </p>
		</td>
	</tr>
	</table>
   <br />
<div id="pagecontent">

	<form method="get" action="./search.php">
	
	<table class="tablebg" width="100%" cellspacing="1">
	<tr>
		<th colspan="4">Search query</th>
	</tr>
	<tr>
		<td class="row1" colspan="2" width="50%"><b class="genmed">Search for keywords: </b><br /><span class="gensmall">Place <strong>+</strong> in front of a word which must be found and <strong>-</strong> in front of a word which must not be found. Put a list of words separated by <strong>|</strong> into brackets if only one of the words must be found. Use * as a wildcard for partial matches.</span></td>
		<td class="row2" colspan="2" valign="top"><input type="text" style="width: 300px" class="post" name="keywords" size="30" /><br /><input type="radio" class="radio" name="terms" value="all" checked="checked" /> <span class="genmed">Search for all terms or use query as entered</span><br /><input type="radio" class="radio" name="terms" value="any" /> <span class="genmed">Search for any terms</span></td>
	</tr>
	<tr>
		<td class="row1" colspan="2"><b class="genmed">Search for author:</b><br /><span class="gensmall">Use * as a wildcard for partial matches.</span></td>
		<td class="row2" colspan="2" valign="middle"><input type="text" style="width: 300px" class="post" name="author" size="30" /></td>
	</tr>
	<tr>
		<td class="row1" colspan="2"><b class="genmed">Search in forums: </b><br /><span class="gensmall">Select the forum or forums you wish to search in. For speed all subforums can be searched by selecting the parent and setting enable search subforums below.</span></td>
		<td class="row2" colspan="2"><select name="fid[]" multiple="multiple" size="5"><option value="28">Introductions</option><option value="1">&nbsp; &nbsp;New To The Message Board?</option><option value="29">Cemetery Photography</option><option value="2">&nbsp; &nbsp;General Discussion</option><option value="3">&nbsp; &nbsp;Favorite Season For Photography</option><option value="4">&nbsp; &nbsp;Camera Types</option><option value="5">&nbsp; &nbsp;Interesting Cemeteries To Visit</option><option value="30">Ghost Hunting</option><option value="6">&nbsp; &nbsp;General Discussion</option><option value="7">&nbsp; &nbsp;Advice</option><option value="8">&nbsp; &nbsp;Your Stories</option><option value="9">&nbsp; &nbsp;Haunted Places</option><option value="10">&nbsp; &nbsp;Organized Ghost Hunts</option><option value="11">&nbsp; &nbsp;Recommended Books And Movies</option><option value="27">&nbsp; &nbsp;Recommended Video Games</option><option value="31">Urban Exploration</option><option value="12">&nbsp; &nbsp;General Discussion</option><option value="13">&nbsp; &nbsp;Tips And Tricks</option><option value="14">&nbsp; &nbsp;Interesting Locations To Visit</option><option value="32">Ouija Boards</option><option value="15">&nbsp; &nbsp;Questions?</option><option value="16">&nbsp; &nbsp;Your Stories</option><option value="20">&nbsp; &nbsp;Ouija Meet Ups</option><option value="24">&nbsp; &nbsp;General Discussion</option><option value="33">Genealogy Requests</option><option value="17">&nbsp; &nbsp;Gravestone Photo Request</option><option value="18">&nbsp; &nbsp;Cemetery Locations</option><option value="26">&nbsp; &nbsp;General Discussion</option><option value="34">States/Countries Other Than Ohio</option><option value="21">&nbsp; &nbsp;Cemeteries In Other States/Countries</option><option value="22">&nbsp; &nbsp;UE Locations In Other States/Countries</option><option value="23">&nbsp; &nbsp;Haunted Places In Other States/Countries</option><option value="35">Myths and Legends</option><option value="25">&nbsp; &nbsp;General Discussion</option><option value="36">Open Discussion</option><option value="19">&nbsp; &nbsp;Anything Goes!</option></select></td>
	</tr>
	<tr>
		<th colspan="4">Search options</th>
	</tr>
	<tr>
		<td class="row1" width="25%" nowrap="nowrap"><b class="genmed">Search subforums: </b></td>
		<td class="row2" width="25%" nowrap="nowrap"><input type="radio" class="radio" name="sc" value="1" checked="checked" /> <span class="genmed">Yes</span>&nbsp;&nbsp;<input type="radio" class="radio" name="sc" value="0" /> <span class="genmed">No</span></td>
		<td class="row1" width="25%" nowrap="nowrap"><b class="genmed">Search within: </b></td>
		<td class="row2" width="25%" nowrap="nowrap"><input type="radio" class="radio" name="sf" value="all" checked="checked" /> <span class="genmed">Post subjects and message text</span><br /><input type="radio" class="radio" name="sf" value="msgonly" /> <span class="genmed">Message text only</span> <br /><input type="radio" class="radio" name="sf" value="titleonly" /> <span class="genmed">Topic titles only</span> <br /><input type="radio" class="radio" name="sf" value="firstpost" /> <span class="genmed">First post of topics only</span></td>
	</tr>
	<tr>
		<td class="row1"><b class="genmed">Sort results by: </b></td>
		<td class="row2" nowrap="nowrap"><select name="sk"><option value="a">Author</option><option value="t" selected="selected">Post time</option><option value="f">Forum</option><option value="i">Topic title</option><option value="s">Post subject</option></select><br /><input type="radio" class="radio" name="sd" value="a" /> <span class="genmed">Ascending</span><br /><input type="radio" class="radio" name="sd" value="d" checked="checked" /> <span class="genmed">Descending</span></td>
		<td class="row1" nowrap="nowrap"><b class="genmed">Display results as: </b></td>
		<td class="row2" nowrap="nowrap"><input type="radio" class="radio" name="sr" value="posts" checked="checked" /> <span class="genmed">Posts</span>&nbsp;&nbsp;<input type="radio" class="radio" name="sr" value="topics" /> <span class="genmed">Topics</span></td>
	</tr>
	<tr>
		<td class="row1" width="25%"><b class="genmed">Limit results to previous: </b></td>
		<td class="row2" width="25%" nowrap="nowrap"><select name="st"><option value="0" selected="selected">All results</option><option value="1">1 day</option><option value="7">7 days</option><option value="14">2 weeks</option><option value="30">1 month</option><option value="90">3 months</option><option value="180">6 months</option><option value="365">1 year</option></select></td>
		<td class="row1" nowrap="nowrap"><b class="genmed">Return first: </b></td>
		<td class="row2" nowrap="nowrap"><select name="ch"><option value="-1">All available</option><option value="0">0</option><option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="200" selected="selected">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option><option value="600">600</option><option value="700">700</option><option value="800">800</option><option value="900">900</option><option value="1000">1000</option></select> <span class="genmed">characters of posts</span></td>
	</tr>
	<tr>
		<td class="cat" colspan="4" align="center"><input type="hidden" name="sid" value="9bccad866f96051ab752ba33a26113b3" />
<input type="hidden" name="t" value="0" />
<input class="btnlite" name="submit" type="submit" value="Search" />&nbsp;&nbsp;<input class="btnlite" type="reset" value="Reset" /></td>
	</tr>
	</table>
	
	</form>

	<br clear="all" />

	<table class="tablebg" width="100%" cellspacing="1">
	<tr>
		<th colspan="2">Recent searches</th>
	</tr>
			<tr>
			<td class="row1" colspan="2" align="center"><span class="genmed">No searches have been carried out recently.</span></td>
		</tr>
		</table>

	<br clear="all" />

	</div>

	<table class="tablebg" width="100%" cellspacing="1" cellpadding="0" style="margin-top: 5px;">
	<tr>
		<td class="row1">
			<p class="breadcrumbs"><a href="./index.php">Board index</a></p>
			<p class="datetime">All times are UTC </p>
		</td>
	</tr>
	</table>
	<br clear="all" />

	<div align="right">	<form method="post" name="jumpbox" action="./viewforum.php" onsubmit="if(document.jumpbox.f.value == -1){return false;}">

	<table cellspacing="0" cellpadding="0" border="0">
	<tr>
		<td nowrap="nowrap"><span class="gensmall">Jump to:</span>&nbsp;<select name="f" onchange="if(this.options[this.selectedIndex].value != -1){ forms['jumpbox'].submit() }">

					<option value="-1">Select a forum</option>
					<option value="28">Introductions</option>
		<option value="-1">------------------</option>			<option value="1">&nbsp; &nbsp;New To The Message Board?</option>
					<option value="29">Cemetery Photography</option>
					<option value="2">&nbsp; &nbsp;General Discussion</option>
					<option value="3">&nbsp; &nbsp;Favorite Season For Photography</option>
					<option value="4">&nbsp; &nbsp;Camera Types</option>
					<option value="5">&nbsp; &nbsp;Interesting Cemeteries To Visit</option>
					<option value="30">Ghost Hunting</option>
					<option value="6">&nbsp; &nbsp;General Discussion</option>
					<option value="7">&nbsp; &nbsp;Advice</option>
					<option value="8">&nbsp; &nbsp;Your Stories</option>
					<option value="9">&nbsp; &nbsp;Haunted Places</option>
					<option value="10">&nbsp; &nbsp;Organized Ghost Hunts</option>
					<option value="11">&nbsp; &nbsp;Recommended Books And Movies</option>
					<option value="27">&nbsp; &nbsp;Recommended Video Games</option>
					<option value="31">Urban Exploration</option>
					<option value="12">&nbsp; &nbsp;General Discussion</option>
					<option value="13">&nbsp; &nbsp;Tips And Tricks</option>
					<option value="14">&nbsp; &nbsp;Interesting Locations To Visit</option>
					<option value="32">Ouija Boards</option>
					<option value="15">&nbsp; &nbsp;Questions?</option>
					<option value="16">&nbsp; &nbsp;Your Stories</option>
					<option value="20">&nbsp; &nbsp;Ouija Meet Ups</option>
					<option value="24">&nbsp; &nbsp;General Discussion</option>
					<option value="33">Genealogy Requests</option>
					<option value="17">&nbsp; &nbsp;Gravestone Photo Request</option>
					<option value="18">&nbsp; &nbsp;Cemetery Locations</option>
					<option value="26">&nbsp; &nbsp;General Discussion</option>
					<option value="34">States/Countries Other Than Ohio</option>
					<option value="21">&nbsp; &nbsp;Cemeteries In Other States/Countries</option>
					<option value="22">&nbsp; &nbsp;UE Locations In Other States/Countries</option>
					<option value="23">&nbsp; &nbsp;Haunted Places In Other States/Countries</option>
					<option value="35">Myths and Legends</option>
					<option value="25">&nbsp; &nbsp;General Discussion</option>
					<option value="36">Open Discussion</option>
					<option value="19">&nbsp; &nbsp;Anything Goes!</option>
		
		</select>&nbsp;<input class="btnlite" type="submit" value="Go" /></td>
	</tr>
	</table>

	</form>
</div>

</div>

<!--
	We request you retain the full copyright notice below including the link to www.phpbb.com.
	This not only gives respect to the large amount of time given freely by the developers
	but also helps build interest, traffic and use of phpBB3. If you (honestly) cannot retain
	the full copyright we ask you at least leave in place the "Powered by phpBB" line, with
	"phpBB" linked to www.phpbb.com. If you refuse to include even this then support on our
	forums may be affected.

	The phpBB Group : 2006
//-->

<div id="wrapfooter">
		<span class="copyright">Powered by <a href="http://www.phpbb.com/">phpBB</a> &copy; 2000, 2002, 2005, 2007 phpBB Group
	</span>
</div>

</body>
</html>