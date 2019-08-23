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
                store.sync();
            }
        },
        clear: function(store) {
            store.sync();
        }
    },
    getUserId: function () {
        var data = Ext.Array.pluck(this.getRange(), 'data'),
            userId;
        if (data != null && data.length > 0) {
            userId = data[0].userId;
        }
        return userId;
    }
})