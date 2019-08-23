Ext.define('BeginnerGoal.view.login.userprofile.UserProfile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userProfile',
    requires: [
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.CurrentUser',
        'BeginnerGoal.store.User',
        'BeginnerGoal.view.userprofile.UserProfileController'
    ],
    controller: 'userprofile',
    listeners: {
        activate: 'onActivate'
    }
})