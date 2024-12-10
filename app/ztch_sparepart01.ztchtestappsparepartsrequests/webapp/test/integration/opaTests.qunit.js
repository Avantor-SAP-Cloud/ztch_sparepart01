sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchsparepart01/ztchtestappsparepartsrequests/test/integration/FirstJourney',
		'ztchsparepart01/ztchtestappsparepartsrequests/test/integration/pages/ServiceOrgsList',
		'ztchsparepart01/ztchtestappsparepartsrequests/test/integration/pages/ServiceOrgsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ServiceOrgsList, ServiceOrgsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchsparepart01/ztchtestappsparepartsrequests') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheServiceOrgsList: ServiceOrgsList,
					onTheServiceOrgsObjectPage: ServiceOrgsObjectPage
                }
            },
            opaJourney.run
        );
    }
);