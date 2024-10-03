function thumbOver(which) {
	//alert("qqq");	
	which.style.filter="alpha(opacity=100)";
	
	//var img = which.src;
	//var index = img.lastIndexOf('/');
	//var filename = img.substring(index+5,img.length-4);
	
	//var filename = which.name;	
	//document.getElementById("title").innerHTML = unescape(filename);
	
	//alert(which.src);
	var filepath = which.src;
	var filename = filepath.substring(filepath.lastIndexOf("tn_"), filepath.length);
	
	var imgname = "Titel";
	
	//Cultuurschappen
	if (filename == escape("tn_161.jpg")) imgname = "Stadsuitzicht met steigers";	
	if (filename == escape("tn_162.jpg")) imgname = "Kruispunt";
	if (filename == escape("tn_schilderijen 01 001.jpg")) imgname = "Stroom";
	if (filename == escape("tn_schilderijen 01 002.jpg")) imgname = "Struiken";
	if (filename == escape("tn_schilderijen 01 003.jpg")) imgname = "Prikkeldraad";
	if (filename == escape("tn_schilderijen 01 004.jpg")) imgname = "Poort / Moeder of Vrouw";
	if (filename == escape("tn_schilderijen 01 005.jpg")) imgname = "Sneeuwvlekken in kleur";
	if (filename == escape("tn_schilderijen 01 006.jpg")) imgname = "Glas-in-loodraam";
	if (filename == escape("tn_schilderijen 01 007.jpg")) imgname = "Tripitaka";
	if (filename == escape("tn_schilderijen 01 012.jpg")) imgname = "Zonder titel";
	if (filename == escape("tn_schilderijen 01 014.jpg")) imgname = "Mens en nood";
	if (filename == escape("tn_schilderijen 01 015.jpg")) imgname = "Nacht in de singel";
	if (filename == escape("tn_schilderijen 03 darius 126.jpg")) imgname = "Stadsuitzicht";	   
	//schilderijen 03 darius 133.jpg -> landschappen	
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 007.jpg")) imgname = "Vrouw (deel 1 van drieluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 008.jpg")) imgname = "Vrouw-Droom-Stad (drieluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 009.jpg")) imgname = "Droom (deel 2 van drieluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 010.jpg")) imgname = "Stad (deel 3 van drieluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 011.jpg")) imgname = "Bomenlandschap in maanlicht";	  
	//schilderijen 04 en schilderijen amsterdam 013.jpg -> weg	
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 014.jpg")) imgname = "Zenderstoornissen";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 016.jpg")) imgname = "Zenderstoornissen II";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 017.jpg")) imgname = "Graanveld / Zeelandschap";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 020.jpg")) imgname = "Prikkeldraad II";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 021.jpg")) imgname = "Regendruppels op ruit";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 022.jpg")) imgname = "Slingers";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 023.jpg")) imgname = "Steden / Sterren";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 025.jpg")) imgname = "Cultuurschappen / Amsterdam";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 026.jpg")) imgname = "Amsterdam in de nacht";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 027.jpg")) imgname = "Amsterdam in de nacht II";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 028.jpg")) imgname = "Amsterdams cultuurschap";
		
	
	// Landschappen
	if (filename == escape("tn_01.jpg")) imgname = "Berglandschap Zwitserland";
	if (filename == escape("tn_107.jpg")) imgname = "Zeelandschap";
	if (filename == escape("tn_108.jpg")) imgname = "Stadsdroom";
	if (filename == escape("tn_129.jpg")) imgname = "Odysseus' land";
	if (filename == escape("tn_2.jpg")) imgname = "Ottomaanse grafstenen";
	if (filename == escape("tn_213 a.jpg")) imgname = "Golgotha 3-luik (deel 1)";
	if (filename == escape("tn_213 b.jpg")) imgname = "Golgotha 3-luik (deel 2)";
	if (filename == escape("tn_213.jpg")) imgname = "Golgotha 3-luik";
	if (filename == escape("tn_252.jpg")) imgname = "Eenzame accaciaboom in landschap";
	if (filename == escape("tn_253.jpg")) imgname = "Ruig landschap met bomen";
	if (filename == escape("tn_267.jpg")) imgname = "Boomgaardenlandschap";
	if (filename == escape("tn_273.jpg")) imgname = "Landschap";
	if (filename == escape("tn_279.jpg")) imgname = "Cypressenlandschap";
	if (filename == escape("tn_30.jpg")) imgname = "Jonge kersenbomen in bloesemtijd";
	if (filename == escape("tn_308.jpg")) imgname = "Berglandschap met rivier";
	if (filename == escape("tn_314.jpg")) imgname = "Impressielandschap langs de IJssel";
	if (filename == escape("tn_324.jpg")) imgname = "Bomenlandschap in de wind";
	if (filename == escape("tn_326.jpg")) imgname = "Landschap";
	if (filename == escape("tn_49 I.jpg")) imgname = "Berglandschap";
	if (filename == escape("tn_50.jpg")) imgname = "Man&Zoon landschap met bergen";
	if (filename == escape("tn_53 I.jpg"))	imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_53 II.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_54 10.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 6.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 7.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 8.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 9.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 B.jpg")) imgname = "Zwitserse landschappen (diverse stukken)";
	if (filename == escape("tn_54 C 2.jpg")) imgname = "Vadus Mittagsspitze";
	if (filename == escape("tn_54 C 3.jpg")) imgname = "Vadus Mittagsspitze";
	if (filename == escape("tn_54 C.jpg")) imgname = "Vadus Mittagsspitze";
	if (filename == escape("tn_54 C4.jpg")) imgname = "Vadus Mittagsspitze";
	if (filename == escape("tn_54 I.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_54 II.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_54 III.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_54 IIII.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_54 IIIII.jpg")) imgname = "Churwalden landschap (Zwitserland)";
	if (filename == escape("tn_7.jpg")) imgname = "Het droomhuis";
	if (filename == escape("tn_schilderijen 01 008.jpg")) imgname = "Vuile was";
	if (filename == escape("tn_schilderijen 01 030.jpg")) imgname = "Ooijs landschap";
	if (filename == escape("tn_schilderijen 01 106.jpg")) imgname = "Onheilspellend luchtlandschap";
	if (filename == escape("tn_schilderijen 01 125.jpg")) imgname = "Landhuis";
	if (filename == escape("tn_schilderijen 02 039.jpg")) imgname = "Eikenboom in de nacht";
	if (filename == escape("tn_schilderijen 02 045.jpg")) imgname = "Aan de IJssel";
	if (filename == escape("tn_schilderijen 02 058.jpg")) imgname = "Paranoialandschap / Man en zoon";
	if (filename == escape("tn_schilderijen 02 085.jpg")) imgname = "Bomen in  de najaarsnacht";
	if (filename == escape("tn_schilderijen 03 darius 047.jpg")) imgname = "Sneeuwlandschap met warme lucht";
	
	
	//Zelfportretten
	if (filename == escape("tn_10.jpg")) imgname = "Portret (Jezus)";
	if (filename == escape("tn_104.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_105.jpg")) imgname = "Portret als zelfportret";
	if (filename == escape("tn_106.jpg")) imgname = "Zelfportret als Michelangelo";
	if (filename == escape("tn_122.jpg")) imgname = "Zelfportret (als gek)";
	if (filename == escape("tn_127.png")) imgname = "Zelfportret &agrave; la Goya";
	if (filename == escape("tn_130.jpg")) imgname = "Zelfportret met rode achtergrond";
	if (filename == escape("tn_136.jpg")) imgname = "Zelfportret met 1 arm";
	if (filename == escape("tn_144.jpg")) imgname = "Zelfportret met hoed en ster";
	if (filename == escape("tn_16.jpg")) imgname = "Zelfportret met de \"wond\" / Kijk, kijk, ongelovige";
	if (filename == escape("tn_166.jpg")) imgname = "Zelfportret als gestenigde monnik";
	if (filename == escape("tn_167.jpg")) imgname = "Zelfportret in winterweer";
	if (filename == escape("tn_172.jpg")) imgname = "Zelfportret zonder voortanden";
	if (filename == escape("tn_255.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_35.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_61.jpg")) imgname = "Zelfportret als monnik";
	if (filename == escape("tn_64 a.jpg")) imgname = "Zelfportret (onverzorgd haar)";
	if (filename == escape("tn_64 b.jpg")) imgname = "Zelfportret (onverzorgd haar)";
	if (filename == escape("tn_65.jpg")) imgname = "Zelfportret (barok)";
	if (filename == escape("tn_66.jpg")) imgname = "Zelfportret (blauw hemd)";
	if (filename == escape("tn_70.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_71 II.jpg")) imgname = "Zelfportret met sik";
	if (filename == escape("tn_71 III.jpg")) imgname = "Zelfportret met sik";
	if (filename == escape("tn_71.jpg")) imgname = "Zelfportret met sik";
	if (filename == escape("tn_84.jpg")) imgname = "Zelfportret (aan het schilderen)";
	if (filename == escape("tn_85 II.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_85.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_96.jpg")) imgname = "Zelfportret als stier of satan";
	if (filename == escape("tn_schilderijen 01 126.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_schilderijen 02 060.jpg")) imgname = "Derwisch";
	if (filename == escape("tn_schilderijen 03 darius 128.jpg")) imgname = "Zelfportret met rode baard";
	//schilderijen 03 darius 136.jpg ->weg
	if (filename == escape("tn_schilderijen 03 darius 188.jpg")) imgname = "Zelfportret (onverzorgd haar)";
	if (filename == escape("tn_schilderijen 03 darius 191.jpg")) imgname = "Zelfportret";
	if (filename == escape("tn_168.jpg")) imgname = "Zelfportret zittend op stoel";
	if (filename == escape("tn_schilderijen 03 darius 187.jpg")) imgname = "Kaal zelfportret als oude man";
	
	
	//Portretten
	if (filename == escape("tn_103.jpg")) imgname = "Portret (Jezus)";
	if (filename == escape("tn_109.jpg")) imgname = "Russisch meisje";
	//if (filename == escape("tn_113.jpg")) {	
	if (filename == escape("tn_116.jpg")) imgname = "Intellectueel";
	if (filename == escape("tn_117.jpg")) imgname = "Vrouw";
	if (filename == escape("tn_118.jpg")) imgname = "Geopereerde";
	//if (filename == escape("tn_119.jpg")) {	
	if (filename == escape("tn_128.jpg")) imgname = "Jongensportret";
	if (filename == escape("tn_132.jpg")) imgname = "Kaal mannenportret";
	if (filename == escape("tn_134.jpg")) imgname = "de Man / de Ambtenaar";
	if (filename == escape("tn_135.jpg")) imgname = "de Iman / de Rabijn";
	if (filename == escape("tn_151.jpg")) imgname = "Portret (boers portret)";
	if (filename == escape("tn_153.jpg")) imgname = "Psycho portret";
	//if (filename == escape("tn_55.jpg")) {	
	if (filename == escape("tn_156.jpg")) imgname = "Jongemannenportret met platte neus";
	//if (filename == escape("tn_235 a.jpg")) {
	//if (filename == escape("tn_235 b.jpg")) {
	//if (filename == escape("tn_235 c.jpg")) {	
	if (filename == escape("tn_258.jpg")) imgname = "Casje";
	if (filename == escape("tn_270.jpg")) imgname = "Jongens portret (puber)";
	if (filename == escape("tn_34.jpg")) imgname = "Dubbelportret-traanogen";
	if (filename == escape("tn_55.jpg")) imgname = "Meisjesportret met hand naar schouder";
	if (filename == escape("tn_56.jpg")) imgname = "Vrouw / meisje";
	if (filename == escape("tn_57.jpg")) imgname = "Oude man met stok (portret)";
	if (filename == escape("tn_58.jpg")) imgname = "Boerin";
	if (filename == escape("tn_59.jpg")) imgname = "Bruidegom";
	//if (filename == escape("tn_60.jpg")) {	
	if (filename == escape("tn_62.jpg")) imgname = "Jongensportret (melancholische ogen)";
	if (filename == escape("tn_63.jpg")) imgname = "Kidnapper";
	if (filename == escape("tn_73.jpg")) imgname = "Portret verwonde jongen";
	if (filename == escape("tn_74.jpg")) imgname = "Travestiet";
	if (filename == escape("tn_76.jpg")) imgname = "Portret van oosterling";
	if (filename == escape("tn_77.jpg")) imgname = "Vrouwenportret met hand voor gezicht";
	if (filename == escape("tn_78.jpg")) imgname = "Portret van schele man";
	if (filename == escape("tn_79.jpg")) imgname = "Meisjesportret met 2 staartjes";
	if (filename == escape("tn_80.jpg")) imgname = "Meisjesportret";
	if (filename == escape("tn_92.jpg")) imgname = "Passolini jongen";
	//if (filename == escape("tn_schilderijen 01 085.jpg")) {	
	//if (filename == escape("tn_schilderijen 02 015.jpg")) {	
	if (filename == escape("tn_schilderijen 02 016.jpg")) imgname = "Portretten landschap";
	if (filename == escape("tn_schilderijen 02 037.jpg")) imgname = "Jongen met scheve hals";
	if (filename == escape("tn_schilderijen 02 062.jpg")) imgname = "de Bokser";
	//if (filename == escape("tn_schilderijen 02 071.jpg")) {
	if (filename == escape("tn_schilderijen 02 083.jpg")) imgname = "Meisjesportret met hoofd naar links leunend";
	
	
	// Intermenselijke relaties / Verhoudingen
	if (filename == escape("tn_138.jpg")) imgname = "Bevruchtingsspel (zwangerschap/spiegelbeeld)";
	if (filename == escape("tn_139.jpg")) imgname = "Spel voor schuine horizon (evenwichtsspel)";
	if (filename == escape("tn_141.jpg")) imgname = "Vrouw met paard in bed / paard als man";
	if (filename == escape("tn_142.jpg")) imgname = "Met rug gekeerd in bed";
	if (filename == escape("tn_190.jpg")) imgname = "Liefdesspel (wanhoop)";
	if (filename == escape("tn_191 B.jpg")) imgname = "Liefdesspel (de val)";
	if (filename == escape("tn_191.jpg")) imgname = "Liefdesspel (dood)";
	if (filename == escape("tn_192.jpg")) imgname = "Bokje springen I 3 pers.";
	if (filename == escape("tn_193.jpg")) imgname = "Bokje springen II 2 pers.";
	if (filename == escape("tn_194.jpg")) imgname = "Voor het doel";
	if (filename == escape("tn_195.jpg")) imgname = "Liefdesspel";
	if (filename == escape("tn_196.jpg")) imgname = "Bokje springen III 2 pers.";
	if (filename == escape("tn_197.jpg")) imgname = "Bokje springen IIII 5 pers.";	
	//204.jpg -> weg	
	if (filename == escape("tn_206.jpg")) imgname = "Drie grati&euml;n";
	if (filename == escape("tn_214 b.jpg")) imgname = "de Nacht";
	if (filename == escape("tn_214.jpg")) imgname = "de Nacht";
	if (filename == escape("tn_216.jpg")) imgname = "de Nachtmerrie";
	if (filename == escape("tn_234 A.jpg")) imgname = "Vrouw";
	if (filename == escape("tn_234 B.jpg")) imgname = "Man";
	if (filename == escape("tn_24.jpg")) imgname = "Schreeuw (2-luik)";
	if (filename == escape("tn_26.jpg")) imgname = "Zondaars / zondigen";
	if (filename == escape("tn_271.jpg")) imgname = "Naar andere richtingen";
	if (filename == escape("tn_28.jpg")) imgname = "Op de rug dragend (2-luik)";
	if (filename == escape("tn_283.jpg")) imgname = "Omhelzende mannen / trots";
	if (filename == escape("tn_285.jpg")) imgname = "Zwevende twee";
	if (filename == escape("tn_29.jpg")) imgname = "Zwevenden III (tweeluik)";
	if (filename == escape("tn_291.jpg")) imgname = "Trappen af";
	if (filename == escape("tn_3.jpg")) imgname = "Het evenwicht in de relatie";
	if (filename == escape("tn_309.jpg")) imgname = "Tweelingen / Twee&euml;n";
	if (filename == escape("tn_315.jpg")) imgname = "Muze / Waternimpf / Marloes";
	if (filename == escape("tn_317 II.jpg")) imgname = "Melaatse";
	//317.jpg -> weg	
	if (filename == escape("tn_32.jpg")) imgname = "De vallenden";
	if (filename == escape("tn_323.jpg")) imgname = "Solidair zijn / steun";
	if (filename == escape("tn_paarden schilderijen 091.jpg")) imgname = "Droom in bed";
	if (filename == escape("tn_schilderijen 01 044.jpg")) imgname = "Zwevenden (tweeluik)";
	if (filename == escape("tn_schilderijen 01 060.jpg")) imgname = "Fantasievrouwen";
	if (filename == escape("tn_schilderijen 01 065.jpg") ||
	filename == escape("tn_schilderijen 01 066.jpg") ||
	filename == escape("tn_schilderijen 01 068.jpg") || 
	filename == escape("tn_schilderijen 01 070.jpg") ||
	filename == escape("tn_schilderijen 01 071.jpg") ||
	filename == escape("tn_schilderijen 01 075.jpg") ||
	filename == escape("tn_schilderijen 01 078.jpg") ||
	filename == escape("tn_schilderijen 01 086.jpg") ||
	filename == escape("tn_schilderijen 01 089.jpg") ||
	filename == escape("tn_schilderijen 01 111.jpg") ||
	filename == escape("tn_schilderijen 01 117.jpg") ||
	filename == escape("tn_schilderijen 01 118.jpg") ||
	filename == escape("tn_schilderijen 01 120.jpg") ||
	filename == escape("tn_schilderijen 01 122.jpg") ||
	filename == escape("tn_schilderijen 01 129.jpg") ||
	filename == escape("tn_schilderijen 01 130.jpg")) imgname = "Paradoxale relaties";
	if (filename == escape("tn_schilderijen 01 080.jpg")) imgname = "Aan ziektebed";
	if (filename == escape("tn_schilderijen 01 104.jpg")) imgname = "Drie gezusters";
	if (filename == escape("tn_schilderijen 01 115.jpg")) imgname = "Meisje met hond";
	if (filename == escape("tn_schilderijen 01 127.jpg")) imgname = "Hond als wachter";
	if (filename == escape("tn_schilderijen 01 128.jpg")) imgname = "Verlokking";
	if (filename == escape("tn_schilderijen 02 066.jpg")) imgname = "Droom (met paarden)";
	if (filename == escape("tn_schilderijen 02 079.jpg")) imgname = "Bokje springen";
	if (filename == escape("tn_schilderijen 02 103.jpg")) imgname = "Gesprek in het nachtlandschap";
	if (filename == escape("tn_schilderijen 03 darius 063.jpg")) imgname = "Schepping van Venus";
	if (filename == escape("tn_schilderijen 03 darius 095.jpg") ||
	filename == escape("tn_schilderijen 03 darius 096.jpg") ||
	filename == escape("tn_schilderijen 03 darius 103.jpg")) imgname = "Drie figuren";
	if (filename == escape("tn_schilderijen 03 darius 118.jpg")) imgname = "Groen Caf&eacute;";
	if (filename == escape("tn_schilderijen 03 darius 125.jpg")) imgname = "Naamlozen / de etalages (2-luik)";
	if (filename == escape("tn_schilderijen 03 darius 132.jpg")) imgname = "Wanhopigen";
	if (filename == escape("tn_schilderijen 03 darius 134.jpg")) imgname = "Melancholische vrouw";
	if (filename == escape("tn_schilderijen 03 darius 135.jpg")) imgname = "Verhouding / Twee vrouwen";
	if (filename == escape("tn_schilderijen 03 darius 137.jpg")) imgname = "De eerste dagen van het paradijs";
	if (filename == escape("tn_schilderijen 03 darius 138.jpg")) imgname = "God";
	if (filename == escape("tn_schilderijen 03 darius 194.jpg")) imgname = "De vallenden (tweeluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 018.jpg")) imgname = "de Liefde / de Mythe / Opportuun";
	//schilderijen 04 en schilderijen amsterdam 019.jpg -> weg	
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 051.jpg")) imgname = "Gezelschap (hond met vrouw in bed)";
	
	
	// Studies / Tekeningen
	if (filename == escape("tn_01 b.jpg")) imgname = "de Nachtmerrie";
	if (filename == escape("tn_150.jpg")) imgname = "Compositie met schelpen";
	if (filename == escape("tn_169.jpg")) imgname = "Poppetje";
	if (filename == escape("tn_205.jpg")) imgname = "Monique";
	if (filename == escape("tn_224.jpg")) imgname = "Monique in antiek landschap";
	if (filename == escape("tn_229.jpg")) imgname = "Collage";
	if (filename == escape("tn_230 A.jpg")) imgname = "Futuristische natuurmoord";
	if (filename == escape("tn_230 B.jpg")) imgname = "Futuristische natuurmoord II";
	if (filename == escape("tn_230 C.jpg")) imgname = "Dambordcompositie met geel groen zwart";
	if (filename == escape("tn_231 B.jpg")) imgname = "Stilleven met schedel van ram";
	if (filename == escape("tn_231.jpg")) imgname = "Stilleven met schedel van ram II";
	if (filename == escape("tn_232 A.jpg")) imgname = "Stilleven met glazen";
	if (filename == escape("tn_232 B.jpg")) imgname = "Stilleven";
	if (filename == escape("tn_232 C.jpg")) imgname = "Stilleven II";
	if (filename == escape("tn_232 D.jpg")) imgname = "Stilleven III";
	if (filename == escape("tn_232 E.jpg")) imgname = "Stilleven IV";
	if (filename == escape("tn_232 F.jpg")) imgname = "Stilleven V";
	if (filename == escape("tn_232 G.jpg")) imgname = "Stilleven I";
	if (filename == escape("tn_232 H.jpg")) imgname = "Stilleven II";
	if (filename == escape("tn_232 I.jpg")) imgname = "Stilleven III";
	if (filename == escape("tn_232 J.jpg")) imgname = "Stilleven IV";
	if (filename == escape("tn_232.jpg")) imgname = "Analytisch-kubistisch stilleven";
	if (filename == escape("tn_239.jpg")) imgname = "Model";
	if (filename == escape("tn_240.jpg")) imgname = "Model";
	if (filename == escape("tn_242.jpg")) imgname = "Potloodstudie aubergine/paprika";
	if (filename == escape("tn_244.jpg")) imgname = "Man op stoel";
	if (filename == escape("tn_250.jpg")) imgname = "Stilleven glas met krant";
	if (filename == escape("tn_251.jpg")) imgname = "Stilleven versie 2 George Cross";
	if (filename == escape("tn_254.jpg")) imgname = "Studie met paardenkastanje en bramen";
	if (filename == escape("tn_256.jpg")) imgname = "Witte bloem met rode achtergrond";
	if (filename == escape("tn_259.jpg")) imgname = "Meisje met lingerie";
	if (filename == escape("tn_260 A.jpg")) imgname = "Dierenstudie";
	if (filename == escape("tn_260B.jpg")) imgname = "Dierenstudie";
	if (filename == escape("tn_262 b.jpg")) imgname = "Model &eacute;tude";
	if (filename == escape("tn_262.jpg")) imgname = "Model &eacute;tude II";
	if (filename == escape("tn_268.jpg")) imgname = "Afro man met rode achtergrond";
	if (filename == escape("tn_310.jpg")) imgname = "Marloes op stoel";
	if (filename == escape("tn_316.jpg")) imgname = "Marloes";
	if (filename == escape("tn_318.jpg")) imgname = "Treurnis";
	if (filename == escape("tn_322.jpg")) imgname = "Studie met bewegende armen";
	if (filename == escape("tn_40.jpg")) imgname = "Dode merel";
	if (filename == escape("tn_81.jpg")) imgname = "Vrouw met rood haar";
	if (filename == escape("tn_82.jpg")) imgname = "Vrouw met linkerarm op heup";
	if (filename == escape("tn_paarden schilderijen 006.jpg")) imgname = "Hond in de wind";
	if (filename == escape("tn_paarden schilderijen 087.jpg")) imgname = "Vechtende stieren";
	if (filename == escape("tn_paarden schilderijen 089.jpg")) imgname = "Man&stier";
	if (filename == escape("tn_paarden schilderijen 104.jpg")) imgname = "Honden en buit";
	if (filename == escape("tn_paarden schilderijen 105.jpg")) imgname = "Vrouw met stier";
	if (filename == escape("tn_schilderijen 01 026.jpg")) imgname = "Gauguinesque vrouw";
	if (filename == escape("tn_schilderijen 01 036.jpg")) imgname = "Slapende vrouw met moza&iuml;kdekbed";
	if (filename == escape("tn_schilderijen 01 037.jpg")) imgname = "Liggende vrouw met appel";
	if (filename == escape("tn_schilderijen 01 038.jpg")) imgname = "Liggende vrouw met rood kapje";
	if (filename == escape("tn_schilderijen 01 062.jpg")) imgname = "Aalscholverkopstudie";
	if (filename == escape("tn_schilderijen 01 063.jpg")) imgname = "Meisje in bed boek lezend";
	if (filename == escape("tn_schilderijen 01 069.jpg")) imgname = "Liggende Afro-dite";
	if (filename == escape("tn_schilderijen 01 072.jpg")) imgname = "Drinkend wachtend";
	if (filename == escape("tn_schilderijen 01 073.jpg")) imgname = "Model kijkend naar links";
	if (filename == escape("tn_schilderijen 01 074.jpg")) imgname = "Hond zich verschonend";
	if (filename == escape("tn_schilderijen 01 076.jpg")) imgname = "Schaduwen";
	if (filename == escape("tn_schilderijen 01 079.jpg")) imgname = "In bed voor 't raam";
	if (filename == escape("tn_schilderijen 01 084.jpg")) imgname = "Zittend op kruk";
	if (filename == escape("tn_schilderijen 01 090.jpg")) imgname = "Masturberende";
	if (filename == escape("tn_schilderijen 01 091.jpg")) imgname = "Vrouw starend naar buiten naar Postweg";
	if (filename == escape("tn_schilderijen 01 092.jpg")) imgname = "Oude man (rood)";
	if (filename == escape("tn_schilderijen 01 093.jpg")) imgname = "Negroide schoonheid";
	if (filename == escape("tn_schilderijen 01 095.jpg")) imgname = "Blondine";
	if (filename == escape("tn_schilderijen 01 098.jpg")) imgname = "Model armen op hoofd";
	if (filename == escape("tn_schilderijen 01 099.jpg")) imgname = "Ongestelde";
	if (filename == escape("tn_schilderijen 01 100.jpg")) imgname = "Monumentaal model";
	if (filename == escape("tn_schilderijen 01 102.jpg")) imgname = "Model op stoel";
	if (filename == escape("tn_schilderijen 01 107.jpg")) imgname = "Theo naast Vincents bed";
	if (filename == escape("tn_schilderijen 01 113.jpg")) imgname = "Liggend zwanger";
	if (filename == escape("tn_schilderijen 01 114.jpg")) imgname = "Vrouw in angst en twijfel";
	if (filename == escape("tn_schilderijen 01 119.jpg")) imgname = "Hond in sneeuw";
	if (filename == escape("tn_schilderijen 01 123.jpg")) imgname = "Twee honden";
	if (filename == escape("tn_schilderijen 01 124.jpg")) imgname = "Model met rood haar";
	if (filename == escape("tn_schilderijen 02 043.jpg")) imgname = "Roodharig model";
	if (filename == escape("tn_schilderijen 02 065.jpg")) imgname = "Dode merel";
	if (filename == escape("tn_schilderijen 02 066.jpg")) imgname = "Droom (met paarden)";
	if (filename == escape("tn_schilderijen 02 070.jpg")) imgname = "Zwanger in landschap";
	if (filename == escape("tn_schilderijen 02 077.jpg")) imgname = "Pubermodel";
	if (filename == escape("tn_schilderijen 02 078.jpg")) imgname = "Melancholisch landschap met paardenstandbeeld";
	if (filename == escape("tn_schilderijen 02 098.jpg")) imgname = "Vrouw met paarsdonkere achtergrond";
	if (filename == escape("tn_schilderijen 02 120.jpg")) imgname = "Zonnende";
	if (filename == escape("tn_schilderijen 02 124.jpg")) imgname = "Liggende eenzame";
	if (filename == escape("tn_schilderijen 02 130.jpg")) imgname = "Model in perspectief";
	if (filename == escape("tn_schilderijen 02 134.jpg")) imgname = "Sorrow";
	if (filename == escape("tn_schilderijen 02 135.jpg")) imgname = "In elkaar gezakte";	
	//schilderijen 02 169.jpg -> weg	
	if (filename == escape("tn_schilderijen 03 darius 005.jpg")) imgname = "Modelstudie van achter gezien";
	if (filename == escape("tn_schilderijen 03 darius 006.jpg")) imgname = "Modelstudie";
	if (filename == escape("tn_schilderijen 03 darius 014.jpg")) imgname = "Model &eacute;tude";	
	//schilderijen 03 darius 019.jpg -> weg	
	if (filename == escape("tn_schilderijen 03 darius 020.jpg")) imgname = "Vrouwelijk torsostudie";
	if (filename == escape("tn_schilderijen 03 darius 022.jpg")) imgname = "Vrouwelijk naakt";
	if (filename == escape("tn_schilderijen 03 darius 023.jpg")) imgname = "Vrouwelijk naakt II";
	if (filename == escape("tn_schilderijen 03 darius 024.jpg")) imgname = "Anna";
	if (filename == escape("tn_schilderijen 03 darius 025.jpg")) imgname = "Mollig model";
	if (filename == escape("tn_schilderijen 03 darius 026.jpg")) imgname = "Zwanger modelstudie";
	if (filename == escape("tn_schilderijen 03 darius 028.jpg")) imgname = "Liggende veteraan";
	if (filename == escape("tn_schilderijen 03 darius 042.jpg")) imgname = "Compositie met verftubes";
	if (filename == escape("tn_schilderijen 03 darius 046.jpg")) imgname = "Aan het strand liggende";
	if (filename == escape("tn_schilderijen 03 darius 048.jpg")) imgname = "Roze man (van voren gezien)";
	if (filename == escape("tn_schilderijen 03 darius 049.jpg")) imgname = "Roze man (van achter gezien)";
	if (filename == escape("tn_schilderijen 03 darius 051.jpg")) imgname = "Collage / compositie";
	if (filename == escape("tn_schilderijen 03 darius 057.jpg")) imgname = "Compositie met schelpen";
	if (filename == escape("tn_schilderijen 03 darius 088.jpg")) imgname = "Liggende vrouw met armen naar achter steunend";
	if (filename == escape("tn_schilderijen 03 darius 090.jpg")) imgname = "Anthonius";
	if (filename == escape("tn_schilderijen 03 darius 091.jpg")) imgname = "Vrouw liggend, van achter gezien";
	if (filename == escape("tn_schilderijen 03 darius 092.jpg")) imgname = "Klassiek mannelijk model";
	if (filename == escape("tn_schilderijen 03 darius 094.jpg")) imgname = "Naamloos (vrouw)";
	if (filename == escape("tn_schilderijen 03 darius 097.jpg")) imgname = "Man met geamputeerd been";
	if (filename == escape("tn_schilderijen 03 darius 099.jpg")) imgname = "Naamloos (man)";
	if (filename == escape("tn_schilderijen 03 darius 100.jpg")) imgname = "Shaman";
	if (filename == escape("tn_schilderijen 03 darius 101.jpg")) imgname = "Modeltekening";
	if (filename == escape("tn_schilderijen 03 darius 102.jpg")) imgname = "Dubbelportret";
	if (filename == escape("tn_schilderijen 03 darius 104.jpg")) imgname = "Zelfbeeld als gevangene";
	if (filename == escape("tn_schilderijen 03 darius 105.jpg")) imgname = "Model";
	if (filename == escape("tn_schilderijen 03 darius 107.jpg")) imgname = "Model in studio";
	if (filename == escape("tn_schilderijen 03 darius 109.jpg")) imgname = "Klassiek model met armen naar rechts wijzend";
	if (filename == escape("tn_schilderijen 03 darius 110.jpg")) imgname = "Minotaurus";
	if (filename == escape("tn_schilderijen 03 darius 111.jpg")) imgname = "Zittende man";
	if (filename == escape("tn_schilderijen 03 darius 112.jpg")) imgname = "Verschonen";
	if (filename == escape("tn_schilderijen 03 darius 113.jpg")) imgname = "Staande man";
	if (filename == escape("tn_schilderijen 03 darius 114.jpg")) imgname = "Model / vrouw";
	if (filename == escape("tn_schilderijen 03 darius 116.jpg")) imgname = "Stilleven met krant, glazen en boomwortels";
	if (filename == escape("tn_schilderijen 03 darius 117.jpg")) imgname = "Zwanger model (met blauwe achtergrond)";
	if (filename == escape("tn_schilderijen 03 darius 175.jpg")) imgname = "Schaamte";
	if (filename == escape("tn_schilderijen 03 darius 176.jpg")) imgname = "Wanhoop-gevallen";
	if (filename == escape("tn_schilderijen 03 darius 177.jpg")) imgname = "Naar de verte starende";
	if (filename == escape("tn_schilderijen 03 darius 181.jpg")) imgname = "H&uuml;lya";
	if (filename == escape("tn_schilderijen 03 darius 182.jpg")) imgname = "Feith";
	if (filename == escape("tn_schilderijen 03 darius 183.jpg")) imgname = "&Ouml;zden";
	if (filename == escape("tn_schilderijen 03 darius 184.jpg")) imgname = "Model met een been op stoel";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 001.jpg")) imgname = "2x2=5 / Studie naar Leonardo";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 005.jpg")) imgname = "Laatste avondmaal / verfmaal";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 006.jpg")) imgname = "Bevruchte koningin";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 015.jpg")) imgname = "Stilleven met ramskop";	
	
	
	// Wachtenden / Naamlozen
	if (filename == escape("tn_1.jpg")) imgname = "Een-zaam-heid";
	if (filename == escape("tn_111.jpg")) imgname = "Serie van wachtenden (vrouwen)";
	if (filename == escape("tn_112.jpg")) imgname = "Wachtenden in de rij (vijf figuren)";
	if (filename == escape("tn_14.jpg")) imgname = "Etalage (tweeluik)";
	if (filename == escape("tn_160 a.jpg")) imgname = "Wachtenden (vijf mannen)";
	if (filename == escape("tn_160 b.jpg")) imgname = "Wachtenden (zes mannen)";
	if (filename == escape("tn_160 c.jpg")) imgname = "Wachtenden (zeven mannen)";
	if (filename == escape("tn_18.jpg")) imgname = "Wachtenden";
	if (filename == escape("tn_184.jpg")) imgname = "Serie Wachtenden visite/gesprek";
	if (filename == escape("tn_220.jpg")) imgname = "Serie van Wachtenden";
	if (filename == escape("tn_264.jpg")) imgname = "Serie van Wachtenden (vijf mannen)";
	if (filename == escape("tn_294.jpg")) imgname = "Serie Wachtenden (rondom cirkel)";
	if (filename == escape("tn_31.jpg")) imgname = "Torso's  Naamlozen-etalage";
	//315.jpg -> weg	
	if (filename == escape("tn_schilderijen 01 009.jpg")) imgname = "Wachtenden VII (vijf mannen en een vrouw)";
	if (filename == escape("tn_schilderijen 01 010.jpg")) imgname = "Wachtenden (met zelfbeeld)";
	if (filename == escape("tn_schilderijen 01 034.jpg")) imgname = "Vadus Mittagsspitze";
	if (filename == escape("tn_schilderijen 01 081.jpg")) imgname = "Serie Wachtenden (rondom cirkel)";
	if (filename == escape("tn_schilderijen 01 082.jpg")) imgname = "Wachtenden zwangeren";
	if (filename == escape("tn_schilderijen 01 094.jpg")) imgname = "Sterke kerel";
	if (filename == escape("tn_schilderijen 01 097.jpg")) imgname = "Versieren";
	if (filename == escape("tn_schilderijen 02 059.jpg")) imgname = "Troostend gesprek";
	if (filename == escape("tn_schilderijen 02 091.jpg")) imgname = "Wachtenden (vijf mannen)";
	if (filename == escape("tn_schilderijen 02 116.jpg")) imgname = "Olympia in drie gedaantes";
	if (filename == escape("tn_schilderijen 02 118.jpg")) imgname = "Wachtenden (vijf mannen)";
	if (filename == escape("tn_schilderijen 02 156.jpg")) imgname = "Wachtenden (zeven mannen)";
	if (filename == escape("tn_schilderijen 03 darius 055.jpg")) imgname = "Solidariteit";
	//schilderijen 03 darius 087.jpg -> weg
	if (filename == escape("tn_schilderijen 03 darius 093.jpg")) imgname = "Parade";	
	//schilderijen 04 en schilderijen amsterdam 045.jpg -> weg	
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 046.jpg")) imgname = "De grote &eacute;talage";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 047.jpg")) imgname = "Drie grati&euml;n";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 048.jpg")) imgname = "Wachtenden in de rij (vier figuren)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 049.jpg")) imgname = "Wachtenden in de rij (vijf figuren)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 052.jpg")) imgname = "Wachtenden in binnenplaats";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 053.jpg")) imgname = "Wachtenden / XN";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 054.jpg")) imgname = "Versiering";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 056.jpg")) imgname = "Vier kleurige figuren op een rij";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 059.jpg")) imgname = "Wachtenden in binnenplaats (zeven figuren)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 061.jpg")) imgname = "Parade / drie knapen";	
	 
	
	// Individuen
	if (filename == escape("tn_101.jpg")) imgname = "Playboy-boy";
	if (filename == escape("tn_121.jpg")) imgname = "Werkend meisje";
	if (filename == escape("tn_123.jpg")) imgname = "Wanhoop";
	if (filename == escape("tn_124.jpg")) imgname = "Torso";
	if (filename == escape("tn_125.jpg")) imgname = "Man in embryohouding";
	if (filename == escape("tn_126.jpg")) imgname = "Heilige Moeder&Zoon";
	if (filename == escape("tn_137.jpg")) imgname = "Portret (Solzjenitsyn)";
	if (filename == escape("tn_146.jpg")) imgname = "Slaapwandelaar";
	if (filename == escape("tn_148 A.jpg")) imgname = "De Val";
	if (filename == escape("tn_148 B.jpg")) imgname = "De Val";
	if (filename == escape("tn_157.jpg")) imgname = "Man schilderij ophangend";
	if (filename == escape("tn_159.jpg")) imgname = "Stad&Vrouw";
	if (filename == escape("tn_171.jpg")) imgname = "Liggende eenzame";
	if (filename == escape("tn_174.jpg")) imgname = "Meisje met dubbelportret";
	if (filename == escape("tn_19.jpg")) imgname = "Liggende man";
	if (filename == escape("tn_202.jpg")) imgname = "Schreeuw";
	if (filename == escape("tn_237.jpg")) imgname = "Meisje in het water";
	if (filename == escape("tn_241.jpg")) imgname = "Gebogen vrouw";
	if (filename == escape("tn_246.jpg")) imgname = "Pasgeborene";
	if (filename == escape("tn_248.jpg")) imgname = "Angstig gehurkte man op stoel";
	if (filename == escape("tn_249.jpg")) imgname = "Kruipende vrouw";
	if (filename == escape("tn_265.jpg")) imgname = "Man portret";
	if (filename == escape("tn_27 a.jpg")) imgname = "Een-Zaamheid (Eenheid Eenzaamheid)";
	if (filename == escape("tn_274.jpg")) imgname = "Leunende blauwe man";
	if (filename == escape("tn_275.jpg")) imgname = "Model met nachtblauwe achtergrond";
	//290 b.jpg -> weg	
	if (filename == escape("tn_290.jpg")) imgname = "Man in embryohouding";
	if (filename == escape("tn_319.jpg")) imgname = "De vallende / in zijn droom";
	if (filename == escape("tn_320.jpg")) imgname = "Speelse jongen";
	if (filename == escape("tn_321.jpg")) imgname = "Andersgeborene";
	if (filename == escape("tn_86.jpg")) imgname = "Schreeuw";
	if (filename == escape("tn_88.jpg")) imgname = "Diagonale horizon";
	if (filename == escape("tn_97.jpg")) imgname = "Maanlicht kapsel";
	if (filename == escape("tn_paarden schilderijen 091.jpg")) imgname = "In bed als paard";
	if (filename == escape("tn_schilderijen 01 011.jpg")) imgname = "Loser / zonder toeschouwer";
	if (filename == escape("tn_schilderijen 01 020.jpg")) imgname = "Allegorie van het geloof";
	if (filename == escape("tn_schilderijen 01 021.jpg")) imgname = "Man met hond";
	if (filename == escape("tn_schilderijen 01 022.jpg")) imgname = "Vrouw met hond";
	if (filename == escape("tn_schilderijen 01 023.jpg")) imgname = "Oude vrouw in kou";
	if (filename == escape("tn_schilderijen 01 024.jpg")) imgname = "Hondse man";
	if (filename == escape("tn_schilderijen 01 025.jpg")) imgname = "Hondse vrouw";
	if (filename == escape("tn_schilderijen 01 027.jpg")) imgname = "Hangende man";
	if (filename == escape("tn_schilderijen 01 028.jpg")) imgname = "Val in droom";
	if (filename == escape("tn_schilderijen 01 031.jpg")) imgname = "Angela / Sorrow";
	if (filename == escape("tn_schilderijen 01 032.jpg")) imgname = "Nabucco II / Zelfportret";
	if (filename == escape("tn_schilderijen 01 035.jpg")) imgname = "Verlegen model";
	if (filename == escape("tn_schilderijen 01 039.jpg")) imgname = "Liggende";
	if (filename == escape("tn_schilderijen 01 040.jpg")) imgname = "Hondse vermoeidheid";
	if (filename == escape("tn_schilderijen 01 041.jpg")) imgname = "Man in gekruiste vorm";
	if (filename == escape("tn_schilderijen 01 042.jpg")) imgname = "Zittende man met licht van rechts";
	if (filename == escape("tn_schilderijen 01 045.jpg")) imgname = "Zittende (handen vast)";
	if (filename == escape("tn_schilderijen 01 046.jpg")) imgname = "Zittende in gedachten";
	if (filename == escape("tn_schilderijen 01 047.jpg")) imgname = "Afro-schoonheid";
	if (filename == escape("tn_schilderijen 01 048.jpg")) imgname = "Afro-schoonheid";
	if (filename == escape("tn_schilderijen 01 049.jpg")) imgname = "Opstaan";
	if (filename == escape("tn_schilderijen 01 050.jpg")) imgname = "Liefdespaar";
	if (filename == escape("tn_schilderijen 01 051.jpg")) imgname = "Opstaande man";
	if (filename == escape("tn_schilderijen 01 052.jpg")) imgname = "Man met slang";
	if (filename == escape("tn_schilderijen 01 059.jpg")) imgname = "Gebogen man";
	if (filename == escape("tn_schilderijen 01 064.jpg")) imgname = "Zwanger in zorgen";
	if (filename == escape("tn_schilderijen 01 067.jpg")) imgname = "Plassen aan hek / grens";
	if (filename == escape("tn_schilderijen 01 077.jpg")) imgname = "Beeld aan water";
	if (filename == escape("tn_schilderijen 01 083.jpg")) imgname = "Plassende";
	if (filename == escape("tn_schilderijen 01 087.jpg")) imgname = "Schoonspringer";
	if (filename == escape("tn_schilderijen 01 088.jpg")) imgname = "Bidder";
	if (filename == escape("tn_schilderijen 01 096.jpg")) imgname = "Wanhopige";
	if (filename == escape("tn_schilderijen 01 101.jpg")) imgname = "Zwarte figuur op stoel";
	if (filename == escape("tn_schilderijen 01 105.jpg")) imgname = "Anthonius";
	if (filename == escape("tn_schilderijen 01 108.jpg")) imgname = "Laatste ridder met zijn zwaard";
	if (filename == escape("tn_schilderijen 01 109.jpg")) imgname = "Op z'n kop (man)";
	if (filename == escape("tn_schilderijen 01 110.jpg")) imgname = "Op z'n kop (vouw)";
	if (filename == escape("tn_schilderijen 01 116.jpg")) imgname = "Trots (blauwzwanger)";
	if (filename == escape("tn_schilderijen 01 121.jpg")) imgname = "In zichzelf gezonken";
	if (filename == escape("tn_schilderijen 02 029.jpg")) imgname = "Schoonspringer in daling";
	if (filename == escape("tn_schilderijen 02 044.jpg")) imgname = "Model voor schildersezel";
	if (filename == escape("tn_schilderijen 02 048.jpg")) imgname = "Wanhopigen (blauw figuur)";
	if (filename == escape("tn_schilderijen 02 067.jpg")) imgname = "Verdwaald op snelweg";
	if (filename == escape("tn_schilderijen 02 075.jpg")) imgname = "Magische krachten of regenboog";
	//schilderijen 02 081.jpg -> weg
	if (filename == escape("tn_schilderijen 02 089.jpg")) imgname = "Vuur en vlam van zee";
	if (filename == escape("tn_schilderijen 02 092.jpg")) imgname = "Kosmosfiguur";
	if (filename == escape("tn_schilderijen 02 105.jpg")) imgname = "Compositie met vier figuren";
	if (filename == escape("tn_schilderijen 02 106.jpg")) imgname = "Vrouw / Man / Slang";
	if (filename == escape("tn_schilderijen 02 119.jpg")) imgname = "Naar buiten starende";
	if (filename == escape("tn_schilderijen 02 131.jpg")) imgname = "De val";
	if (filename == escape("tn_schilderijen 02 132.jpg")) imgname = "Liggend / slapend naakt";
	if (filename == escape("tn_schilderijen 02 133.jpg")) imgname = "Betreurende liggende";
	if (filename == escape("tn_schilderijen 03 darius 033.jpg")) imgname = "Pan met geit in landschap";
	if (filename == escape("tn_schilderijen 03 darius 034.jpg")) imgname = "Liefdesspel op wiel";
	if (filename == escape("tn_schilderijen 03 darius 036.jpg")) imgname = "Eenzame";
	if (filename == escape("tn_schilderijen 03 darius 040.jpg")) imgname = "Verloren koninkrijk";
	if (filename == escape("tn_schilderijen 03 darius 041.jpg")) imgname = "De schilder en de dynamiek";
	if (filename == escape("tn_schilderijen 03 darius 050.jpg")) imgname = "Wanhoop";
	if (filename == escape("tn_schilderijen 03 darius 053.jpg")) imgname = "de Melancholie of de Wandeling";
	if (filename == escape("tn_schilderijen 03 darius 098.jpg")) imgname = "het Slachthuis";
	if (filename == escape("tn_schilderijen 03 darius 108.jpg")) imgname = "Vliegende Hollander";
	if (filename == escape("tn_schilderijen 03 darius 119.jpg")) imgname = "Naamloos";
	if (filename == escape("tn_schilderijen 03 darius 140.jpg")) imgname = "Naamloos";
	if (filename == escape("tn_schilderijen 03 darius 141.jpg")) imgname = "Op het einde";
	if (filename == escape("tn_schilderijen 03 darius 142.jpg")) imgname = "Verzet tegen val";
	if (filename == escape("tn_schilderijen 03 darius 143.jpg")) imgname = "Archa&iuml;sche figuur";
	if (filename == escape("tn_schilderijen 03 darius 144.jpg")) imgname = "Met zichzelf bezig";
	if (filename == escape("tn_schilderijen 03 darius 145.jpg")) imgname = "Badende";
	if (filename == escape("tn_schilderijen 03 darius 146.jpg")) imgname = "Slapende schoonheid";
	if (filename == escape("tn_schilderijen 03 darius 147.jpg")) imgname = "Ingreske figuur";
	if (filename == escape("tn_schilderijen 03 darius 148.jpg")) imgname = "Verdrietig";
	if (filename == escape("tn_schilderijen 03 darius 149.jpg")) imgname = "Man met sik";
	if (filename == escape("tn_schilderijen 03 darius 150.jpg")) imgname = "Kadaverfiguur";
	if (filename == escape("tn_schilderijen 03 darius 151.jpg")) imgname = "Slachthuis";
	if (filename == escape("tn_schilderijen 03 darius 152.jpg")) imgname = "Hangende";
	if (filename == escape("tn_schilderijen 03 darius 153.jpg")) imgname = "Torso's";
	if (filename == escape("tn_schilderijen 03 darius 154.jpg")) imgname = "de Helft";
	if (filename == escape("tn_schilderijen 03 darius 155.jpg")) imgname = "Sirene";
	if (filename == escape("tn_schilderijen 03 darius 156.jpg")) imgname = "Sirene II";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 024.jpg")) imgname = "Achterbuurtkinderen";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 043.jpg")) imgname = "de Droom en de val";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 050.jpg")) imgname = "Vrouw in het donker";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 057.jpg")) imgname = "Model met twee handen op hoofd";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 058.jpg")) imgname = "Blauwzwangere";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 060.jpg")) imgname = "Armen op 't hoofd";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 062.jpg")) imgname = "Man met rechterarm leunend";
	
	
	
	// Paardenschilderijen
	if (filename == escape("tn_114.jpg")) imgname = "Paarden met rood paard op de achtergrond";
	if (filename == escape("tn_115.jpg")) imgname = "Naar Foto Finish";
	if (filename == escape("tn_167_2.jpg")) imgname = "Paard / Vrouw / Business (compositie)";
	if (filename == escape("tn_20.jpg")) imgname = "Vechtende paarden";
	if (filename == escape("tn_21.jpg")) imgname = "Rode droom van blauw paard II";
	if (filename == escape("tn_217.jpg")) imgname = "Fotofinish";
	if (filename == escape("tn_263.jpg")) imgname = "Werkpaarden";
	if (filename == escape("tn_266.jpg")) imgname = "Dalend paard";
	if (filename == escape("tn_269.jpg")) imgname = "Hoef krabbend paard";
	if (filename == escape("tn_274_2.jpg")) imgname = "Struikelend paard";
	if (filename == escape("tn_276.jpg")) imgname = "Paarden in perspectief (met parende paardenachtergrond)";
	if (filename == escape("tn_278.jpg")) imgname = "Hinnikende";
	if (filename == escape("tn_282.jpg")) imgname = "Leed / Wil (paard met rode manen en staart)";
	if (filename == escape("tn_284.jpg")) imgname = "de Hinnikende";
	if (filename == escape("tn_287.jpg")) imgname = "Knielend rood paard met witte bles";
	if (filename == escape("tn_288.jpg")) imgname = "Beenkrabbend rood paard";
	if (filename == escape("tn_289.jpg")) imgname = "Blauw paard met linkerbeen omhoog";
	if (filename == escape("tn_292.jpg")) imgname = "Eenzaam paard";
	if (filename == escape("tn_293.jpg")) imgname = "Rood paard boven Nijmeegs landschap zwevend";
	if (filename == escape("tn_295.jpg")) imgname = "Springerig groen paard";
	if (filename == escape("tn_297.jpg")) imgname = "Strijdenden";
	if (filename == escape("tn_298.jpg")) imgname = "Vermoeid paard";
	if (filename == escape("tn_299.jpg")) imgname = "Circuspaard";
	if (filename == escape("tn_300.jpg")) imgname = "Paarden in de nacht";
	if (filename == escape("tn_301 II.jpg")) imgname = "Dansende";
	if (filename == escape("tn_301.jpg")) imgname = "Buigend paard";
	if (filename == escape("tn_302.jpg")) imgname = "Paardenkudde";
	if (filename == escape("tn_303.jpg")) imgname = "Los uit de sokkel";
	if (filename == escape("tn_304.jpg")) imgname = "Studie naar schrikkend paard";
	if (filename == escape("tn_312.jpg")) imgname = "Ontdekking geel paard in de nacht";
	if (filename == escape("tn_39.jpg")) imgname = "Sombere terugblik";
	if (filename == escape("tn_42.jpg")) imgname = "Ritmisch paard";
	if (filename == escape("tn_43.jpg")) imgname = "Trotse hengst";
	if (filename == escape("tn_44.jpg")) imgname = "Schoppend paard";
	if (filename == escape("tn_52.jpg")) imgname = "Groen paard";
	if (filename == escape("tn_87.jpg")) imgname = "Paard op zichzelf";
	if (filename == escape("tn_91.jpg")) imgname = "Hinnikende zwarte hengst op gele achtergrond";
	if (filename == escape("tn_93.jpg")) imgname = "Paarse paarden";
	if (filename == escape("tn_94.jpg")) imgname = "Paard in stal";
	if (filename == escape("tn_99.jpg")) imgname = "Paard met slang";
	if (filename == escape("tn_paarden schilderijen 004.jpg")) imgname = "Vallend paard";
	if (filename == escape("tn_paarden schilderijen 005.jpg")) imgname = "Buigend paard (roodgele achtergrond)";
	if (filename == escape("tn_paarden schilderijen 007.jpg")) imgname = "De galloperende blauwe (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 008.jpg")) imgname = "Liefdesgevecht (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 009.jpg")) imgname = "Galop (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 010.jpg")) imgname = "Veulen (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 011.jpg")) imgname = "De kreupele";
	if (filename == escape("tn_paarden schilderijen 012.jpg")) imgname = "Paard en gevallen ruiter (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 013.jpg")) imgname = "Zelfportret als Oosterse ruiter voor Nijmegen / de zuchtende Moor";
	if (filename == escape("tn_paarden schilderijen 016.jpg")) imgname = "Onwillige merrie (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 017.jpg")) imgname = "Rennend paard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 018.jpg")) imgname = "Contrastpaarden (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 020.jpg")) imgname = "Paard voor zee (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 021.jpg")) imgname = "Groene galloperende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 022.jpg")) imgname = "Been krabbende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 023.jpg")) imgname = "Stijgende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 024.jpg")) imgname = "Steigerende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 025.jpg")) imgname = "Grond rakende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 026.jpg")) imgname = "Rechterbeen omhoog (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 027.jpg")) imgname = "Rood galloperende in de nacht (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 028.jpg")) imgname = "Angstig geel paard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 029.jpg")) imgname = "Trots lopende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 030.jpg")) imgname = "Paarden aan zee (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 031.jpg")) imgname = "Paard van Don Quichotte (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 032.jpg")) imgname = "Slapend paard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 033.jpg")) imgname = "Opstaande (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 034.jpg")) imgname = "Schrobbende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 035.jpg")) imgname = "Grijs paard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 036.jpg")) imgname = "Springpaard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 037.jpg")) imgname = "Aandachtig paard (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 038.jpg")) imgname = "Knielende blauwe (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 040.jpg")) imgname = "Naar het voer toe (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 041.jpg")) imgname = "Likkende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 042.jpg")) imgname = "Krabbende (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 043.jpg")) imgname = "Masturbator (paarden serie)";
	if (filename == escape("tn_paarden schilderijen 053.jpg")) imgname = "Hinnekend paard (boven Nijmegen)";
	if (filename == escape("tn_paarden schilderijen 054.jpg")) imgname = "Schoppend paard";
	if (filename == escape("tn_paarden schilderijen 059.jpg")) imgname = "Triest paard";
	if (filename == escape("tn_paarden schilderijen 069.jpg")) imgname = "Verzorgende paarden";
	if (filename == escape("tn_paarden schilderijen 072.jpg")) imgname = "Neerzijgende";
	if (filename == escape("tn_paarden schilderijen 073.jpg")) imgname = "Knielend groenpaars paard";
	//paarden schilderijen 079.jpg -> weg	
	if (filename == escape("tn_paarden schilderijen 080.jpg")) imgname = "Ritmisch rood paard";
	if (filename == escape("tn_paarden schilderijen 081.jpg")) imgname = "Schriksprong";
	if (filename == escape("tn_paarden schilderijen 014.jpg") ||
	filename == escape("tn_paarden schilderijen 015.jpg")) imgname = "Speelse verlegenheid";
	if (filename == escape("tn_paarden schilderijen 094.jpg")) imgname = "Enthousiaste hengst";
	if (filename == escape("tn_paarden schilderijen 096.jpg")) imgname = "Ritmisch paard (tek. naar Leonardo)";
	if (filename == escape("tn_paarden schilderijen 097.jpg")) imgname = "Dromen";
	if (filename == escape("tn_paarden schilderijen 098.jpg")) imgname = "Fotofinish";
	if (filename == escape("tn_paarden schilderijen 099.jpg")) imgname = "Paard in stal";
	if (filename == escape("tn_paarden schilderijen 109.jpg")) imgname = "Oud paard";
	if (filename == escape("tn_paarden schilderijen 110.jpg")) imgname = "Drachtig paard";
	if (filename == escape("tn_paarden schilderijen 111.jpg")) imgname = "Rustend paard";
	if (filename == escape("tn_schilderijen 01 057.jpg")) imgname = "Ritmische richtingen";
	if (filename == escape("tn_schilderijen 03 darius 056.jpg")) imgname = "Bevel aan paarden";
	if (filename == escape("tn_schilderijen 03 darius 073.jpg")) imgname = "Dromen";
	if (filename == escape("tn_schilderijen 03 darius 157.jpg")) imgname = "Schuine horizon";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 002.jpg") ||
	filename == escape("tn_schilderijen 04 en schilderijen amsterdam 003.jpg") ||
	filename == escape("tn_schilderijen 04 en schilderijen amsterdam 004.jpg")) imgname = "Fotofinish (tweeluik)";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 035.jpg")) imgname = "Dramatisch paard";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 036.jpg") ||
	filename == escape("tn_schilderijen 04 en schilderijen amsterdam 038.jpg") ||
	filename == escape("tn_schilderijen 04 en schilderijen amsterdam 039.jpg") ||
	filename == escape("tn_schilderijen 04 en schilderijen amsterdam 040.jpg")) imgname = "Liefde / Macht / Spel / Verraad (vierluik)";
	if (filename == escape("tn_143.jpg")) imgname = "Twee paarden voor het water";
	if (filename == escape("tn_23.jpg")) imgname = "Twee paarden voor een rots";
	if (filename == escape("tn_245.jpg")) imgname = "Rennende paarden";
	if (filename == escape("tn_286.jpg")) imgname = "Blauw paard met gouden manen";
	if (filename == escape("tn_305.jpg")) imgname = "Vos / Paard in Hollands landschap";
	if (filename == escape("tn_306.jpg")) imgname = "Blauw paard met witte bles";
	if (filename == escape("tn_313.jpg")) imgname = "Hoestend paard";
	if (filename == escape("tn_paarden schilderijen 001.jpg")) imgname = "In nachtelijke eenzaamheid";
	if (filename == escape("tn_paarden schilderijen 002.jpg")) imgname = "Twee strijdende paarden";
	if (filename == escape("tn_paarden schilderijen 107.jpg")) imgname = "Verwonde ruiter op paard";
	if (filename == escape("tn_schilderijen 04 en schilderijen amsterdam 034.jpg")) imgname = "Paard als nacht naar antieke ru&iuml;ne toe";
	
		
	
	// Paardenbeelden
	if (filename == escape("tn_paardenbeelden 001.jpg") ||
	filename == escape("tn_paardenbeelden 003.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 004.jpg") ||
	filename == escape("tn_paardenbeelden 005.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 006.jpg") ||
	filename == escape("tn_paardenbeelden 007.jpg")) imgname = "Robina";
	if (filename == escape("tn_paardenbeelden 008.jpg") ||
	//paardenbeelden 009.jpg -> weg
	filename == escape("tn_paardenbeelden 010.jpg") ||
	filename == escape("tn_paardenbeelden 011.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 013.jpg") ||
	filename == escape("tn_paardenbeelden 014.jpg") ||
	filename == escape("tn_paardenbeelden 015.jpg") ||
	filename == escape("tn_paardenbeelden 017.jpg")) imgname = "Raksh";
	if (filename == escape("tn_paardenbeelden 018.jpg") ||
	filename == escape("tn_paardenbeelden 019.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 021.jpg") ||
	filename == escape("tn_paardenbeelden 022.jpg") ||
	filename == escape("tn_paardenbeelden 023.jpg") ||
	filename == escape("tn_paardenbeelden 024.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 025.jpg") ||
	filename == escape("tn_paardenbeelden 026.jpg") ||
	filename == escape("tn_paardenbeelden 027.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 028.jpg") ||
	filename == escape("tn_paardenbeelden 029.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 030.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 033.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 034.jpg") ||
	filename == escape("tn_paardenbeelden 035.jpg") ||
	filename == escape("tn_paardenbeelden 036.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 037.jpg") ||
	filename == escape("tn_paardenbeelden 038.jpg") ||
	filename == escape("tn_paardenbeelden 039.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 040.jpg") ||
	filename == escape("tn_paardenbeelden 041.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 042.jpg") ||
	filename == escape("tn_paardenbeelden 043.jpg")) imgname = "Koppel";
	if (filename == escape("tn_paardenbeelden 044.jpg") ||
	filename == escape("tn_paardenbeelden 045.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 046.jpg") ||
	filename == escape("tn_paardenbeelden 047.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 048.jpg") ||
	filename == escape("tn_paardenbeelden 049.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 050.jpg") ||
	filename == escape("tn_paardenbeelden 051.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 052.jpg") ||
	filename == escape("tn_paardenbeelden 053.jpg")) imgname = "Sleepner";
	if (filename == escape("tn_paardenbeelden 055.jpg") ||
	filename == escape("tn_paardenbeelden 056.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 057.jpg") ||
	filename == escape("tn_paardenbeelden 058.jpg") ||
	filename == escape("tn_paardenbeelden 059.jpg") ||
	filename == escape("tn_paardenbeelden 060.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 061.jpg") ||
	filename == escape("tn_paardenbeelden 062.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 063.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 065.jpg") ||
	filename == escape("tn_paardenbeelden 066.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 067.jpg") ||
	filename == escape("tn_paardenbeelden 068.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 070.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 071.jpg") ||
	filename == escape("tn_paardenbeelden 072.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 073.jpg") ||
	filename == escape("tn_paardenbeelden 074.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 075.jpg") ||
	filename == escape("tn_paardenbeelden 076.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 077.jpg") ||
	filename == escape("tn_paardenbeelden 078.jpg") ||
	filename == escape("tn_paardenbeelden 079.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 080.jpg") ||
	filename == escape("tn_paardenbeelden 081.jpg") ||
	filename == escape("tn_paardenbeelden 082.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 084.jpg") ||
	filename == escape("tn_paardenbeelden 085.jpg")) imgname = "Branco";
	if (filename == escape("tn_paardenbeelden 087.jpg") ||
	filename == escape("tn_paardenbeelden 088.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 089.jpg") ||
	filename == escape("tn_paardenbeelden 090.jpg") ||
	filename == escape("tn_paardenbeelden 091.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 092.jpg") ||
	filename == escape("tn_paardenbeelden 093.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 094.jpg") ||
	filename == escape("tn_paardenbeelden 095.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 096.jpg") ||
	filename == escape("tn_paardenbeelden 097.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 098.jpg") ||
	filename == escape("tn_paardenbeelden 099.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 100.jpg") ||
	filename == escape("tn_paardenbeelden 101.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 102.jpg") ||
	filename == escape("tn_paardenbeelden 103.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 104.jpg") ||
	filename == escape("tn_paardenbeelden 105.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 106.jpg") ||
	filename == escape("tn_paardenbeelden 107.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 108.jpg") ||
	filename == escape("tn_paardenbeelden 109.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 110.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 112.jpg") ||
	filename == escape("tn_paardenbeelden 113.jpg") ||
	filename == escape("tn_paardenbeelden 114.jpg") ||
	filename == escape("tn_paardenbeelden 116.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 117.jpg") ||
	filename == escape("tn_paardenbeelden 118.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 119.jpg") ||
	filename == escape("tn_paardenbeelden 120.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 121.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 123.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 124.jpg") ||
	filename == escape("tn_paardenbeelden 125.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 126.jpg") ||
	filename == escape("tn_paardenbeelden 127.jpg") ||
	filename == escape("tn_paardenbeelden 128.jpg") ||
	filename == escape("tn_paardenbeelden 260.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 129.jpg") ||
	filename == escape("tn_paardenbeelden 130.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 131.jpg") ||
	filename == escape("tn_paardenbeelden 132.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 133.jpg") ||
	filename == escape("tn_paardenbeelden 134.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 136.jpg") ||
	filename == escape("tn_paardenbeelden 137.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 138.jpg") ||
	filename == escape("tn_paardenbeelden 139.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 140.jpg") ||
	filename == escape("tn_paardenbeelden 141.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 143.jpg") ||
	filename == escape("tn_paardenbeelden 144.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 145.jpg") ||
	filename == escape("tn_paardenbeelden 146.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 147.jpg") ||
	filename == escape("tn_paardenbeelden 148.jpg") ||
	filename == escape("tn_paardenbeelden 149.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 150.jpg") ||
	filename == escape("tn_paardenbeelden 151.jpg") ||
	filename == escape("tn_paardenbeelden 152.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 154.jpg") ||
	filename == escape("tn_paardenbeelden 155.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 156.jpg") ||
	filename == escape("tn_paardenbeelden 157.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 158.jpg") ||
	filename == escape("tn_paardenbeelden 159.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 160.jpg") ||
	filename == escape("tn_paardenbeelden 161.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 162.jpg") ||
	filename == escape("tn_paardenbeelden 163.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 164.jpg") ||
	filename == escape("tn_paardenbeelden 165.jpg") ||
	filename == escape("tn_paardenbeelden 166.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 167.jpg") ||
	filename == escape("tn_paardenbeelden 168.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 169.jpg") ||
	filename == escape("tn_paardenbeelden 170.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 171.jpg") ||
	filename == escape("tn_paardenbeelden 172.jpg") ||
	filename == escape("tn_paardenbeelden 173.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 174.jpg") ||
	filename == escape("tn_paardenbeelden 175.jpg") ||
	filename == escape("tn_paardenbeelden 176.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 177.jpg") ||
	filename == escape("tn_paardenbeelden 178.jpg") ||
	filename == escape("tn_paardenbeelden 179.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 180.jpg") ||
	filename == escape("tn_paardenbeelden 181.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 182.jpg") ||
	filename == escape("tn_paardenbeelden 183.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 184.jpg") ||
	filename == escape("tn_paardenbeelden 185.jpg") ||
	filename == escape("tn_paardenbeelden 186.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 187.jpg") ||
	filename == escape("tn_paardenbeelden 188.jpg") ||
	filename == escape("tn_paardenbeelden 189.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 190.jpg") ||
	filename == escape("tn_paardenbeelden 191.jpg") ||
	filename == escape("tn_paardenbeelden 192.jpg") ||
	filename == escape("tn_paardenbeelden 193.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 194.jpg") ||
	filename == escape("tn_paardenbeelden 195.jpg") ||
	filename == escape("tn_paardenbeelden 196.jpg") ||
	filename == escape("tn_paardenbeelden 197.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 198.jpg") ||
	filename == escape("tn_paardenbeelden 199.jpg") ||
	filename == escape("tn_paardenbeelden 200.jpg") ||
	filename == escape("tn_paardenbeelden 201.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 202.jpg") ||
	filename == escape("tn_paardenbeelden 203.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 204.jpg") ||
	filename == escape("tn_paardenbeelden 205.jpg")) imgname = "Veulen";
	if (filename == escape("tn_paardenbeelden 207.jpg") ||
	filename == escape("tn_paardenbeelden 208.jpg") ||
	filename == escape("tn_paardenbeelden 209.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 210.jpg") ||
	filename == escape("tn_paardenbeelden 211.jpg") ||
	filename == escape("tn_paardenbeelden 212.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 213.jpg") ||
	filename == escape("tn_paardenbeelden 214.jpg") ||
	filename == escape("tn_paardenbeelden 215.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 216.jpg") ||
	filename == escape("tn_paardenbeelden 217.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 218.jpg") ||
	filename == escape("tn_paardenbeelden 219.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 220.jpg") ||
	filename == escape("tn_paardenbeelden 221.jpg") ||
	filename == escape("tn_paardenbeelden 222.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 224.jpg") ||
	filename == escape("tn_paardenbeelden 225.jpg") ||
	filename == escape("tn_paardenbeelden 226.jpg") ||
	filename == escape("tn_paardenbeelden 227.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 228.jpg") ||
	filename == escape("tn_paardenbeelden 229.jpg") ||
	filename == escape("tn_paardenbeelden 230.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 232.jpg") ||
	filename == escape("tn_paardenbeelden 233.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 234.jpg") ||
	filename == escape("tn_paardenbeelden 235.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 236.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 238.jpg") ||
	filename == escape("tn_paardenbeelden 239.jpg") ||
	filename == escape("tn_paardenbeelden 240.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 241.jpg") ||
	filename == escape("tn_paardenbeelden 242.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 244.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 245.jpg") ||
	filename == escape("tn_paardenbeelden 246.jpg")) imgname = "Merrie";
	if (filename == escape("tn_paardenbeelden 247.jpg") ||
	filename == escape("tn_paardenbeelden 248.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 249.jpg") ||
	filename == escape("tn_paardenbeelden 250.jpg")) imgname = "Hengst";
	//paardenbeelden 251.jpg
	//paardenbeelden 252.jpg
	//paardenbeelden 253.jpg	
	if (filename == escape("tn_paardenbeelden 254.jpg")) imgname = "Hengst";
	if (filename == escape("tn_paardenbeelden 255.jpg") ||
	filename == escape("tn_paardenbeelden 256.jpg") ||
	filename == escape("tn_paardenbeelden 257.jpg") ||
	filename == escape("tn_paardenbeelden 258.jpg") ||
	filename == escape("tn_paardenbeelden 259.jpg")) imgname = "Merrie";
	 
	
	
	
	
	
	document.getElementById("title").innerHTML = unescape(imgname);
}




function thumbOut(which) {
	//alert("qqq");
	which.style.filter="alpha(opacity=80)";
	document.getElementById("title").innerHTML = "";
}