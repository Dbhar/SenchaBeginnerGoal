Ext.define('BeginnerGoal.view.login.userprofile.UserProfile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userProfile',
    layout: {
        type: 'center'
    },
    
    listeners: {
        activate: function () {
            console.log('In user profile activate');
            var currentUserId, userStore, currentUser, profilePanel, currentUserStore, profileContainer;
            currentUserStore = Ext.getStore('CurrentUser');
            console.dir('Current user store');
            console.dir(currentUserStore);
            currentUserId = Ext.getStore('CurrentUser').getUserId();
            console.log('currentUserId ' + currentUserId);
            userStore = Ext.getStore('UserStore');
            currentUser = userStore.getUser(currentUserId);
            profilePanel = Ext.create('Ext.panel.Panel',{
                title: currentUser.firstname + ' ' + currentUser.lastname,
                layout: {
                    type: 'box'
                },
                width: '50%'
            })
            this.add(profilePanel);
        }
    }
})