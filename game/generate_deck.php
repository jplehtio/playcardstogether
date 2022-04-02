<?php

function generate_deck(){

	try{
		$dbConfig = parse_ini_file("database.conf");
		$db = new PDO("mysql:host={$dbConfig["server"]};dbname={$dbConfig["dbname"]}", "{$dbConfig["user"]}", "{$dbConfig["password"]}");
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$stmt = $db->prepare("SELECT * FROM text_cards");
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_ASSOC);
		$cards = $stmt->fetchAll();

		shuffle($cards);

		$outstr = "";
		for( $i = count($cards) - 1; $i >= 0; $i--){
			$outstr = ("{title:\"" . htmlspecialchars($cards[$i]["cardtitle"]) . "\", description:\"" . htmlspecialchars($cards[$i]["carddescription"]) . "\"}") . $outstr;
			if ( $i > 0 ){
				$outstr = "," . $outstr;
			}
		}

		return $outstr;

	} catch(PDOEXception $e) {
		return;
	}

	return;
}

?>