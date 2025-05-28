<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
		<link rel="stylesheet" href="css/calendar.css" type="text/css">

		<script type="text/javascript">
		
		function deleteEvent(eid, m, y) {
			var msg = "Are you sure you want to delete this event?";

			if (confirm(msg)) {
				document.location = "browse_events.php?delete=" + eid + "&month=" + m + "&year=" + y + "&from=cal";
			} else {
				return;
			}
		}

		function popup(gg, x, y) {
			flyout=window.open(gg, "flyout", "resizable=no, scrollbars=yes,width="+x+", height="+y+", top=100, left=150")
		}
		
		</script>

		<title>GraveAddiction.com Calendar Of Events</title>
</head>
<body>
<br>
<br>

<form action="login.php" method="post">

<table class="b_table" width="50%" align="center">
<tr>
<td class="box_title" colspan="2" align="center" class="calname">GraveAddiction.com Calendar Of Events - Administration</td>
</tr>
<tr>
<td class="box" align="center">Username</td>
<td class="box_value" align="center"><input type="text" name="username" size="50"></td>
</tr>
<tr>
<td class="box" align="center">Password</td>
<td class="box_value" align="center"><input type="password" name="password" size="50"></td>
</tr>
<tr>
<td colspan="2" align="center" class="box_subtitle">
<input type="submit" name="login" value="Log in">
</td>
</tr>
</table>

<p>
<table border="0" width="50%" align="center">
<tr>
<td align="center"><a href="index.php">Back to calendar</a><b>
</b></td>
</tr>
</table>
</form>

<br><br>

<center class="copyright">
	Powered by <a class="cp" href="http://indom.sourceforge.net">Datenator v0.2.4</a>
</center>

</body>
</html>