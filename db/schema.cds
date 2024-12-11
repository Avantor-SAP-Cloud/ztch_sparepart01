namespace avtr.uni.ztchspares01;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal,
    sap.common.CodeList
}
from '@sap/cds/common';

entity ServiceOrgs : managed
{
    key ID : UUID;
    Description : String(100);
}
