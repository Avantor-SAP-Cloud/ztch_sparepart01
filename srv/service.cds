using { avtr.uni.ztchspares01 as my } from '../db/schema.cds';

@path : '/service/Admin'
service Admin
{
    annotate ServiceOrgs with @restrict :
    [
        { grant : [ '*' ], to : [ 'administrator' ] }
    ];

    @odata.draft.enabled
    entity ServiceOrgs as
        projection on my.ServiceOrgs;
}

annotate Admin with @requires :
[
    'authenticated-user',
    'administrator'
];
