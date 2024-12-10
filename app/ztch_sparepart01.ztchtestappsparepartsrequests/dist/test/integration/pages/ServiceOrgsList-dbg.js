sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztchsparepart01.ztchtestappsparepartsrequests',
            componentId: 'ServiceOrgsList',
            contextPath: '/ServiceOrgs'
        },
        CustomPageDefinitions
    );
});