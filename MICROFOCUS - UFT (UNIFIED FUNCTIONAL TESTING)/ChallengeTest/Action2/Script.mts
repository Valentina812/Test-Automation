Set objBrowser = Browser("Thales Colombia - Google") @@ script infofile_;_ZIP::ssf7.xml_;_
Set objPage1 = objBrowser.Page("Thales Colombia - Google")
Set objPage2 = objBrowser.Page("Thales International Suc.")
Set objPage3 = objBrowser.Page("Thales International Suc._3")
Set objPage4 = objBrowser.Page("Google Maps")
Set objPage5 = objBrowser.Page("Medellín, Antioquia a")

objPage1.WebEdit("q").Set "Thales Colombia" @@ script infofile_;_ZIP::ssf8.xml_;_
objPage1.WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf11.xml_;_
objPage3.WebElement("(1) 7442442").Check CheckPoint("(1) 7442442")
objPage3.WebElement("Cra. 12 ##93-8, Bogotá").Check CheckPoint("Cra. 12 ##93-8, Bogotá")
objPage3.WebElement("thalesgroup.com").Check CheckPoint("thalesgroup.com") @@ script infofile_;_ZIP::ssf14.xml_;_
objPage3.WebButton("Instrucciones sobre cómo").Click @@ script infofile_;_ZIP::ssf15.xml_;_
objPage4.WebEdit("Punto de partida Medellin").Set "Medellin" @@ script infofile_;_ZIP::ssf16.xml_;_
objPage4.WebButton("Buscar").Click


If  (objPage5.WebElement("8 h 31 min").Exist(5) and  objPage5.WebElement("9 h 21 min").Exist(5) and objPage5.WebElement("9 h 58 min").Exist(5))Then
	print "The test is successful"
	else
	print "The test is failed because the schedule of the routes has changed"
End If
 @@ script infofile_;_ZIP::ssf17.xml_;_
