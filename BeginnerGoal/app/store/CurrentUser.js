Ext.define('BeginnerGoal.store.CurrentUser', {
    extend: 'Ext.data.Store',
    storeId: 'CurrentUser',
    autoLoad: true,
    model: 'BeginnerGoal.model.CurrentUser',
    saveLocally: false,
    listeners: {
        add: function (store) {
            console.log('Save Locally ' + store.saveLocally);
            if (store.saveLocally) {
                console.log('In Current User store Saving locally');
                store.sync();
                console.dir(localStorage);
            }
        },
        remove: function(store) {
            store.sync();
        }
    },
    getUserId: function () {
        var data = Ext.Array.pluck(this.getRange(), 'data'),
            userId;
        console.dir('In Current User store getUserId method value of data is');
        console.dir(data);
        console.dir(data.length);
        if (data != null && data.length > 0) {
            console.dir('In Current User store getUserId method entered if condition where data is not null and data size is greater than 0');

            userId = data[0].userId;
        }
        return userId;
    }
})