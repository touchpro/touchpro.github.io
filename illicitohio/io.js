//Create an array for the galleries
var arGalleries = new Array();

//Push the list of galleries into a nested array
//Parameters are Page Name, icon image, Page Title
arGalleries.push(new Array("alpinehills.htm", "alpinehills", "alpine hills resort" ));
arGalleries.push(new Array("geaugalake.html", "geauga_lake_tn", "geauga lake" ));
arGalleries.push(new Array("disneypop.html", "disneycentury-tn", "disney pop century" ));
arGalleries.push(new Array("mothergoose.html", "mothergooseland-tn", "mother goose land" ));
arGalleries.push(new Array("pblerr.html", "pb_lake_erie_rr_tn", "pittsburgh lake erie rr" ));
arGalleries.push(new Array("tyson.htm", "miketysonicon", "tyson house" ));
arGalleries.push(new Array("coraopolisnike.html", "CoraopolisIcon", "coraopolis nike site" ));
arGalleries.push(new Array("elramanike.html", "ElramaIcon", "elrama nike site" ));
arGalleries.push(new Array("herminienike.html", "HerminieIcon", "hermanie nike site" ));
arGalleries.push(new Array("irwinnike.html", "IrwinIcon", "irwin nike site" ));
arGalleries.push(new Array("davids.htm", "davidsicon", "davids" ));
arGalleries.push(new Array("jaitepaper.htm", "jaiteicon", "jaite paper mill" ));
arGalleries.push(new Array("wilmingtonnike.html", "whislnd06img600", "wilmington nike site" ));
arGalleries.push(new Array("brookfield.html", "Brookfield_tn", "brookfield afs" ));
arGalleries.push(new Array("bainbridge.html", "Bainbridge_tn", "bainbridge radar" ));
arGalleries.push(new Array("rileys.html", "Rileys_Fun_tn", "rileys fun spot" ));
arGalleries.push(new Array("faymores.html", "Castle_Sept_tn", "faymores castle" ));
arGalleries.push(new Array("rexserection.html", "rex_s_erection_tn", "rexs erection" ));
arGalleries.push(new Array("coastguard.htm", "whislnd06img600", "whisky island" ));
arGalleries.push(new Array("clevelandhotel.htm", "clevehotel06img385", "cleveland hotel"));
arGalleries.push(new Array("bighouse.html", "prison001_tmbn", "Prison"));
arGalleries.push(new Array("textile.htm", "DCAO0177_tmbn", "textile"));
arGalleries.push(new Array("limatb.htm", "DCAO0106", "lima tb"));
arGalleries.push(new Array("logan.html", "DCAO0018", "logan roundhouse"));
arGalleries.push(new Array("mall1.html", "2Dcao0029", "northland mall"));
arGalleries.push(new Array("marina.html", "Dcao0258", "miami marina"));
arGalleries.push(new Array("brickspa.html", "DCAO0182", "darlington brick"));
arGalleries.push(new Array("negleytrain.html", "DCAO0154", "negley train yard"));
arGalleries.push(new Array("mill1.html", "bwmill001", "babcock wilcox"));
arGalleries.push(new Array("industrial.html", "DCAO0011", "industrial waste"));
arGalleries.push(new Array("junction.html", "junction_2005_116", "junction city"));
arGalleries.push(new Array("roseville.htm", "DCAO0095_tmbn", "roseville prison"));
arGalleries.push(new Array("blind1.html", "blind001", "blind school"));
arGalleries.push(new Array("seneca.html", "seneca001", "seneca"));
arGalleries.push(new Array("mainstreet1.html", "Dcao0088", "mainstreet"));
arGalleries.push(new Array("subway.html", "sub001", "cincinatti subway"));
arGalleries.push(new Array("gates.html", "gates02", "gates of hell"));
arGalleries.push(new Array("turnpike.htm", "DCAO0149", "turnpike hotel"));
arGalleries.push(new Array("forthayes.html", "DCAO0005", "fort hayes"));
arGalleries.push(new Array("sewer.html", "sewer02", "sewer"));
arGalleries.push(new Array("youngstown.html", "DCAO0224", "youngstown"));
arGalleries.push(new Array("ranch.html", "DCAO0131", "ranch"));
arGalleries.push(new Array("drags.html", "drag001", "drags"));
arGalleries.push(new Array("midway.html", "DCAO0140", "midway"));
arGalleries.push(new Array("capitol.html", "cap001", "capitol mfg"));
arGalleries.push(new Array("lazurus.html", "Dcao0010", "lazurus"));
arGalleries.push(new Array("bridgeroom.html", "banner1", "670"));
arGalleries.push(new Array("hartman.html", "Dcao0046", "hartman hotel"));
arGalleries.push(new Array("bridgeroom.html", "banner1", "670"));
arGalleries.push(new Array("minigolf.html", "Dcao1183", "sawmill golf"));
arGalleries.push(new Array("tunnel.html", "tunnel001", "osu tunnel"));
arGalleries.push(new Array("random.html", "dublin001", "houses"));
arGalleries.push(new Array("chippewa.html", "chipp030", "chippewa lake"));
arGalleries.push(new Array("idora.html", "idora056", "wildcat"));
arGalleries.push(new Array("moxahala.html", "M018", "moxahala"));
arGalleries.push(new Array("heritage.html", "DCAO0128", "heritage usa"));
arGalleries.push(new Array("euclid.html", "DCAO0076", "euclid beach"));
arGalleries.push(new Array("sandybeach.html", "Sandy_Beach_tn", "sandy beach"));
arGalleries.push(new Array("fantasy.html", "FF006", "fantasy farm"));
arGalleries.push(new Array("darlington.html", "darlington01", "darlington"));

//Copy/paste for new galleries
//arGalleries.push(new Array("", "", ""));

//function to display a footer on pages
function pageFooter() {
    document.write("<center> ");
    document.write("<blockquote> ");
    document.write("<br><a href=\"updates.html\"><font color=\"#FFFFFF\" size=\"4\" face=\"Courier New\">");
    document.write("Updates</font></a><font color=\"#FFFFFF\" size=\"4\" face=\"Courier New\">"); 
    document.write(". <a href=\"mailto:%20admin@illicitohio.com\">Contact</a> . <a href=\"about.html\">");
    document.write("About</a>"); 
    document.write(". <a href=\"links.html\">Links</a></font>");
    document.write("<br><br><font color=\"#FFFFFF\" size=\"2\" face=\"Courier New\">Please ");
    document.write("contact me for image use at <a href=\"mailto:%20admin@illicitohio.com\">");
    document.write("admin@illicitohio.com</a></font>");
    document.write("</blockquote>");
    document.write("</center> ");

}

//function to display list of other pages
function galleryList() {
    
    document.write("<center> ");
    document.write("<blockquote> ");
    document.write("<br><br><font color=\"#FFFFFF\" size=\"6\" face=\"Courier New\">NAVIGATION ");
    document.write("BAR</font>");
    document.write("<blockquote>"); 
    document.write("<font color=\"#FFFFFF\" size=\"3\" face=\"Courier New\">Use ");
    document.write("the icons below to navigate to another page, or click <a href=\"index.htm\">home</a> ");
    document.write("to return to the main menu</font>");
    document.write("</blockquote>");
    document.write("<br><font color=\"#333333\" face=\"Courier New\"><a href=\"index.htm\">www.Illicitohio.com</a></font>");
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
                   + "<img src=\"/illicitohio/main/icons/" + arGalleries[x][1] + ".jpg\" alt=\"" + arGalleries[x][2] + "\" width=\"50\" height=\"40\" border=\"0\">\n"
                   + "</a>\n"
                   + "</span>\n"
                   ;
        
        
        document.write(anchorHTML);

    }

    document.write("<BR></center>");

}

