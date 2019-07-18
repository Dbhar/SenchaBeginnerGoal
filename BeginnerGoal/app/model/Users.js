Ext.define('BeginnerGoal.model.Users',{
    extend: 'Ext.data.Model',
    fields: [
     /*   {name: 'key', type: 'string'},*/
        {name: 'value', type: 'string'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'users'
    }
});