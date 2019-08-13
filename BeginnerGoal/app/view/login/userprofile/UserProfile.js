Ext.define('BeginnerGoal.view.login.userprofile.UserProfile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userProfile',
    listeners: {
        activate: function () {
            var currentUserId, userStore, currentUser, profilePanel, currentUserStore, profileContainer;
            currentUserStore = Ext.getStore('CurrentUser');
            currentUserId = Ext.getStore('CurrentUser').getUserId();
            userStore = Ext.getStore('UserStore');
            currentUser = userStore.getUser(currentUserId);
            profilePanel = Ext.create('Ext.panel.Panel', {
                title: 'User Profile for ' + currentUser.firstname + ' ' + currentUser.lastname,
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
                        forId: 'birthdate',
                        text: 'Birthdate',
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    {
                        xtype: 'component',
                        id: 'birthdate',
                        html: Ext.util.Format.date(currentUser.birthdate,'d/m/Y')
                    },
                    {
                        xtype: 'label',
                        forId: 'company',
                        text: 'Company',
                        rowspan: 1,
                        columnspan: 1,
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    {
                        xtype: 'component',
                        id: 'company',
                        html: currentUser.company
                    },
                    {
                        xtype: 'label',
                        forId: 'email',
                        text: 'Email',
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    {
                        xtype: 'component',
                        id: 'email',
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
                            loginView.layout.setActiveItem(0);
                        }
                    }
                ]
            })
            this.add(profilePanel);
        }
    }
})