Ext.define('BeginnerGoal.view.login.Login', {
    requires: [
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.Users',
        'BeginnerGoal.store.User'
    ],
    itemId: 'loginpage',
    constructor: function () {
        this.userStore = Ext.getStore('UserStore');
        this.currentUserStore = Ext.getStore('CurrentUser');
        this.callParent();
    },

    alias: 'widget.login',
    title: 'Login',

    width: '100%',
    extend: 'Ext.container.Container',
    layout: {
        type: 'card'
    },
    items: [
        {
            xtype: 'loginForm'
        },
        {
            xtype: 'userProfile'
        }
    ]
});
