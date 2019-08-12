Ext.define('BeginnerGoal.store.User',{
    extend: 'Ext.data.Store',
    storeId: 'UserStore',
    model: 'BeginnerGoal.model.User',
    getUser: function(userId) {
        var user, userData;
        console.log('userId ' + userId);
        if(userId != null) {
            user = this.findRecord('userId', userId);
        }
        console.dir(user);
        userData = user.data;
        console.log('userData ' + userData);
        return userData;
    }
})