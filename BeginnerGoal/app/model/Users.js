Ext.define('BeginnerGoal.model.Users',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'value', type: 'string'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'users'
    }
});