Ext.define('BeginnerGoal.view.login.Login', {
    requires: [
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.Users',
        'BeginnerGoal.store.User'
    ],
    extend: 'Ext.form.Panel',

    itemId: 'registerform',
    constructor: function () {
        this.userStore = Ext.getStore('UserStore');
        this.currentUserStore = Ext.getStore('CurrentUser');
        this.callParent();
    },

    alias: 'widget.login',
    title: 'Login',

    width: '100%',
    

    fieldDefaults: {
        labelAlign: 'side',
        labelStyle: 'font-weight: bold;',
        margin: '15 15 15 15'

    },
    layout: {
        type: 'vbox'
    },
    defaultType: 'textfield',
    items: [
        {
            name: 'userId',
            fieldLabel: 'User Id',
            dataIndex: 'userId',
            allowBlank: false
        }, {
            name: 'password',
            itemId: 'password',
            fieldLabel: 'Password',
            inputType: 'password',
        }],
    buttons: [
        {
            text: 'Login',
            handler: function () {
                var form = this.up('form'),
                    values = form.getValues(),
                    store = form.recordStore,
                    userId = values.userId,
                    data,
                    userRecord = form.userStore.findRecord('userId', userId);
                    console.dir(values);
                if (userRecord == null) {
                    Ext.Msg.alert('Error', 'User does not exist');
                } else {
                    var password = values.password;
                    if (password != userRecord.get('password')) {
                        Ext.Msg.alert('Error', 'Wrong password');
                    } else {
                        Ext.Msg.alert('Success', 'Login Successful');
                        form.currentUserStore.setData({'userId': userId});
                    }
                }
            }
        }
    ]
});
