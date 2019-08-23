Ext.define('BeginnerGoal.view.userprofile.UserProfileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userprofile',
    onActivate: function () {
        var currentUserId, userStore, currentUser, profilePanel, currentUserStore, profileContainer;
        currentUserStore = Ext.getStore('CurrentUser');
        currentUserId = Ext.getStore('CurrentUser').getUserId();
        userStore = Ext.getStore('UserStore');
        currentUser = userStore.getUser(currentUserId);
        profilePanel = Ext.create('Ext.panel.Panel', {
            title: 'User Profile for ' + currentUser.firstname + ' ' + currentUser.lastname,
            id: 'profilePanel',
            width: '100%',
            layout: {
                type: 'table',
                columns: 2,
            },
            defaults: {
                padding: '15 15 15 15'
            },
            items: [
                {
                    xtype: 'label',
                    forId: 'birthdate-info',
                    text: 'Birthdate',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    xtype: 'component',
                    id: 'birthdate-info',
                    html: Ext.util.Format.date(currentUser.birthdate, 'd/m/Y')
                },
                {
                    xtype: 'label',
                    forId: 'company-info',
                    text: 'Company',
                    rowspan: 1,
                    columnspan: 1,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    xtype: 'component',
                    id: 'company-info',
                    html: currentUser.company
                },
                {
                    xtype: 'label',
                    forId: 'email-info',
                    text: 'Email',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    xtype: 'component',
                    id: 'email-info',
                    html: currentUser.email
                },
                {
                    xtype: 'label',
                    forId: 'state',
                    text: 'State',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    xtype: 'component',
                    id: 'state',
                    html: currentUser.state
                }
            ],
            buttons: [
                {
                    text: 'Logout',
                    handler: function () {
                        var loginView = this.up('#loginpage')
                        Ext.getStore('CurrentUser').removeAll();
                        this.up('#profilePanel').destroy();
                        loginView.layout.setActiveItem(0);
                    }
                }
            ]
        })
        this.getView().add(profilePanel);
    }
})
