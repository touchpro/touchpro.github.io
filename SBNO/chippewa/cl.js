//Create an array for the galleries
var arGalleries = new Array();

//Push the list of galleries into a nested array
//Parameters are Page Name, icon image, Page Title
arGalleries.push(new Array("ballroom_inside.html", "ballroom2_icon", "ballroom inside" ));
arGalleries.push(new Array("ballroom_outside.html", "ballroom_icon", "ballroom outisde" ));
arGalleries.push(new Array("bathhouse.html", "bathhouse_icon", "bathhouse" ));
arGalleries.push(new Array("boat.html", "boat_icon", "the boat" ));
arGalleries.push(new Array("bug.html", "bug_icon", "the bug" ));
arGalleries.push(new Array("burger.html", "burger_icon", "burger" ));
arGalleries.push(new Array("burger_basement.html", "burger_basement_icon", "burger basement" ));
arGalleries.push(new Array("caboose.html", "caboose_icon", "caboose" ));
arGalleries.push(new Array("cages.html", "cages_icon", "cages" ));
arGalleries.push(new Array("carousel.html", "carousel_icon", "carousel" ));
arGalleries.push(new Array("dipper.html", "dipper_icon", "big dipper" ));
arGalleries.push(new Array("ferris.html", "ferris_icon", "ferris" ));
arGalleries.push(new Array("gate.html", "gate_icon", "main gate" ));
arGalleries.push(new Array("golf.html", "golf_icon", "mini golf" ));
arGalleries.push(new Array("hotel.html", "hotel_icon", "hotel" ));
arGalleries.push(new Array("lildipper.html", "lildipper_icon", "little dipper" ));
arGalleries.push(new Array("midway.html", "midway_icon", "midway" ));
arGalleries.push(new Array("misc.html", "misc_icon", "various" ));
arGalleries.push(new Array("pavillion.html", "pavillion_icon", "pavillion" ));
arGalleries.push(new Array("pier.html", "pier_icon", "pier" ));
arGalleries.push(new Array("rockets.html", "rockets_icon", "rocket ships" ));
arGalleries.push(new Array("shelter.html", "shelter_icon", "shelter" ));
arGalleries.push(new Array("stage.html", "stage_icon", "stage" ));
arGalleries.push(new Array("wildmouse.html", "wildmouse_icon", "wildmouse" ));




//Copy/paste for new galleries
//arGalleries.push(new Array("", "", ""));

//function to display a footer on pages
function pageFooter() {
    document.write("<center> ");
    document.write("<blockquote> ");
    document.write("<p><a href=\"updates.html\"><font color=\"#000000\" size=\"4\" face=\"Arial\">");
    document.write("Updates</font></a><font color=\"#000000\" size=\"4\" face=\"Arial\">"); 
    document.write(". <a href=\"mailto:%20admin@illicitohio.com\">Contact</a> . <a href=\"about.html\">");
    document.write("About</a>"); 
    document.write(". <a href=\"links.html\">Links</a></font></p>");
    document.write("<p><font color=\"#000000\" size=\"2\" face=\"Arial\">Please ");
    document.write("contact me for image use at <a href=\"mailto:%20admin@illicitohio.com\">");
    document.write("admin@illicitohio.com</a></font></p>");
    document.write("</blockquote>");
    document.write("</center> ");

}

//function to display list of other pages
function galleryList() {
    
    document.write("<center> ");
    document.write("<blockquote> ");
    document.write("<p><font color=\"#000000\" size=\"6\" face=\"Arial\">NAVIGATION ");
    document.write("BAR</font></p>");
    document.write("<blockquote>"); 
    document.write("<p><font color=\"#000000\" size=\"3\" face=\"Arial\">Use ");
    document.write("the icons below to navigate to another page, or click <a href=\"chippewa.htm\">home</a> ");
    document.write("to return to the main menu</font></p>");
    document.write("</blockquote>");
    document.write("<p><font color=\"#000000\" face=\"Arial\"><a href=\"index.htm\">sbno.Illicitohio.com</a></font></p>");
    document.write("</blockquote>");
    document.write("</center> ");
    

    document.write("<BR><center>");
    //Loop through the galleries array and create an anchor tag for each gallery
    for (x in arGalleries){
        //Add a line break after every 15th gallery
        if ((x % 15 == 0) & (x > 0)) {
            //alert("break");
            document.write("<BR>");
        }
        
        //<a style="text-decoration:none" href="coastguard.htm"><img src="main/icons/whislnd06img600.jpg" alt="whisky island" width="50" height="40" border="0"></a>
        var anchorHTML;
        
        anchorHTML = "<span style=\"cursor:help\" title = \"" + arGalleries[x][2] + "\">\n" 
                   + "<a style=\"text-decoration:none\" href=\"" + arGalleries[x][0] +"\">\n"
                   + "<img src=\"/chippewa/main/" + arGalleries[x][1] + ".jpg\" alt=\"" + arGalleries[x][2] + "\" width=\"50\" height=\"40\" border=\"0\">\n"
                   + "</a>\n"
                   + "</span>\n"
                   ;
        
        
        document.write(anchorHTML);

    }

    document.write("<BR></center>");

}

