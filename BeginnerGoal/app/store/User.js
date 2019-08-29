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
        console.log('userId ' + userId);
        if(userId != null) {
            user = this.findRecord('userId', userId);
            console.dir(user);
        }
        userData = user.data;
        return userData;
    }
})