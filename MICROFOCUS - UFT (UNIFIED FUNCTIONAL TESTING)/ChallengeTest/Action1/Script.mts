Set objBrowser = Browser("maps - Google Maps") @@ script infofile_;_ZIP::ssf3.xml_;_
Set objPage = objBrowser.Page("maps - Google Maps")
strLocations = Datatable.Value("LOCATIONS")
objPage.WebEdit("q").Set strLocations
objPage.WebButton("Buscar").Click
wait 3




