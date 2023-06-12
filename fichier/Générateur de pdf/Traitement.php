#!/usr/bin/php
<?php

	$test_txt=0;
	$test_stat=0;
	$test_emp=0;

    $fichier = file("DATA.txt");
    $txt = fopen("Texte.dat","x+");
	$stats = fopen("Tableau.dat","x+");
	$employes = fopen("comm.dat","x+");
    
    foreach ($fichier as $indice => $ligne) {
		$ligne = trim($ligne);
		$mot=explode(" ",$ligne);
		$mot_2=explode("=",$mot[0]);
		$mot_3=explode(":",$mot[0]);
		
		if ($test_txt==1){
			if ($mot[0]=="FIN_TEXTE"){
				$test_txt=0;
				fwrite($txt,"</p>");
			}
			else{
				fwrite($txt,"$ligne");
			}
		}

		if ($mot[0]=="DEBUT_TEXTE"){
			$test_txt=1;
			fwrite($txt,"\n		<p>");
		}


		
		if ($mot_2[0]=="TITRE"){
			fwrite($txt,"\n		<h1>$mot_2[1]");
			foreach ($mot as $nb_mot => $content){

				if ($nb_mot>0){
					fwrite($txt,"$content ");
				}
			}
			fwrite($txt,"</h1>");
		}


		if ($mot_2[0]=="SOUS_TITRE"){
			fwrite($txt,"\n		<h2>$mot_2[1]");
			foreach ($mot as $nb_mot => $content){

				if ($nb_mot>0){
					fwrite($txt," $content ");
				}
			}
			fwrite($txt, "</h2>");
		}




		
		if ($mot_2[0]=="CODE"){
			fwrite($txt,"\n<code>$mot_2[1]");
			foreach ($mot as $nb_mot => $content){

				if ($nb_mot>0){
					fwrite($txt," $content ");
				}
			}
			fwrite($txt,"</code>");
		}





		if ($test_stat==1){
			if ($mot[0]=="FIN_STATS"){
				$test_stat=0;
				
				fwrite($stats,"\n		</tbody>");
			}
			else{
				$data= explode(",",$ligne);
				
				fwrite($stats,"\n			<tr>");
				$i=0;
				while($i<=4){
					fwrite($stats,"\n				<td>$data[$i]</td>");
					$i++;
				}

				fwrite($stats,"\n				<td class=");
				$evo=$data[4]/$data[2];
				$evo=$evo*100-100;
				if ($evo>0){
					fwrite($stats,'"green">');
					fwrite($stats,"$evo %</td>");
				}
				else{
					fwrite($stats,'"red">');
					fwrite($stats,"$evo	%</td>");
				}

				fwrite($stats,"\n			</tr>");

			}
		}


		if ($mot[0]=="DEBUT_STATS"){
			$test_stat=1;
			fwrite($stats,"\n			<tbody>");
		}








		if ($mot_3[0]=="MEILLEURS"){
			
			$transi=explode(":",$ligne);	
			$emp=explode(",",$transi[1]);

			fwrite($employes,"		<ul>\n");

			foreach ($emp as $nb_emp => $content){
				fwrite($employes,"			<li>\n");
				fwrite($employes,"				<figure>\n");
				$id_emp=explode("/",$content);
				
				fwrite($employes,'					<img src="images/');
				$id_emp[0]=strtolower($id_emp[0]);
				fwrite($employes,"$id_emp[0]");
				fwrite($employes,'.png" alt="meilleur commerciaux 1">');
				fwrite($employes,"\n					<br>\n");

				$reste=explode("=",$id_emp[1]);

				fwrite($employes,"					<figaption>\n");
				fwrite($employes,"						<b> NOM :$reste[0]</b>\n");
				fwrite($employes,"						<br>\n");
				fwrite($employes,"						CA : $reste[1]\n");
				fwrite($employes,"					</figaption>\n");
				fwrite($employes,"				</figure>\n");
				fwrite($employes,"			</li>\n");
			}

			fwrite($employes,"		</ul>\n");
		}
   	}
?>