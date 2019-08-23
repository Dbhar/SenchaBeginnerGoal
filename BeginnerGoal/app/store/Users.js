Ext.define('BeginnerGoal.store.Users',{
    extend: 'Ext.data.Store',
    storeId: 'UsersStore',
    model: 'BeginnerGoal.model.Users',
    autoLoad: true,
    listeners: {
        add: function(store) {
            store.sync();
        },
        load: function(store) {
            var userStore = Ext.getStore('UserStore'),
                data = Ext.Array.pluck(this.getRange(), 'data'),
                userRecords = []
            Ext.Array.forEach(data, function(item) {
               userStore.add(Ext.JSON.decode(item.value));

            });
            console.dir(userStore.getRange());
            
        }
    }
})