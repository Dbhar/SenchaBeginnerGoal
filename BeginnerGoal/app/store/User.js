Ext.define('BeginnerGoal.store.User',{
    extend: 'Ext.data.Store',
    storeId: 'UserStore',
    autoLoad: true,
    model: 'BeginnerGoal.model.User',
    listeners: {
        add: function(store) {
            store.sync();
        }
    },
    
    getUser: function(userId) {
        var user, userData;
        if(userId != null) {
            user = this.findRecord('userId', userId);
        }
        userData = user.data;
        return userData;
    }
})