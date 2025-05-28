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

<table border="0" width="90%" align="center"
	<tr>
		<td width="33%" align="left"><a class="big" href="?month=10&amp;year=2008">&laquo; October</a></td>
		<td width="33%" align="center"><b>November 2008</b></td>
		<td width="33%" align="right"><a class="big" href="?month=12&amp;year=2008">December &raquo;</a></td>
	</tr>
</table>

<br>

<table border="0" width="90%" align="center">