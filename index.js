var lang = new Lang();

lang.init({
    defaultLang: 'en',
	currentLang: 'en'
});

lang.dynamic('en', 'langpack/en.json');
lang.dynamic('de', 'langpack/de.json');

