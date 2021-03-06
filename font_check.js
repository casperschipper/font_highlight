function mark_missing_fonts_red() {
	const rcFonts =
	[
		"anton"
		, "nimbus sans l"
		, "arimo"
		, "carlito"
		, "open sans"
		, "lato"
		, "pt sans"
		, "roboto"
		, "crimson pro"
		, "libre baskerville"
		, "merriweather"
		, "courier prime"
		, "ibm plex mono"
		, "roboto mono"
	]

	let elements = window.document.querySelectorAll("span");

	let getStyleFonts = function (elem) {
		let family = elem.style.fontFamily;
		if (family === "") {
			return [];
		} else {
			return family.split(",").map(str => str.replaceAll("\"","").trim());
		}
	};

	let fontInList = function (font) {
		let lower = font.toLowerCase();
		return rcFonts.indexOf(lower) > -1;
	}

	let simpleTest = function (elem) {
		let styleFonts = getStyleFonts(elem);
		if (styleFonts.length === 0) {
			return true;
		}
		return (styleFonts.filter(fontInList).length > 0);
	}

	let testFonts = function (elem) {
		if (simpleTest(elem)) {
		}
		else {
			elem.style.color = "red";
			elem.style.backgroundColor = "#ccff00";
		}
	};

	elements.forEach(testFonts);
}	

mark_missing_fonts_red();
