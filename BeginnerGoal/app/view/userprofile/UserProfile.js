Ext.define('BeginnerGoal.view.login.userprofile.UserProfile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userProfile',
    requires: [
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.CurrentUser',
        'BeginnerGoal.store.User',
        'BeginnerGoal.view.userprofle.UserProfileModel',
        'BeginnerGoal.view.userprofile.UserProfileController'
    ],
    controller: 'userprofile',
    viewModel: 'userprofile',
    listeners: {
        activate: 'onActivate'
    },
    bind: {
        title: '{title}',

    },

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
            bind: {
                html: '{userData.birthdate}'
            }
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
            bind: {
                html: '{userData.company}'
            }
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
            bind: {
                html: '{userData.email}'
            }
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
            bind: {
                html: '{userData.state}'
            }
        }
    ],
    buttons: [
        {
            text: 'Logout',
            handler: 'onLogoutButtonClick'
        }
    ]
})