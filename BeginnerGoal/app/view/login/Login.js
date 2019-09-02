Ext.define('BeginnerGoal.view.login.Login', {
    requires: [
        'BeginnerGoal.view.login.LoginController',
        'BeginnerGoal.view.login.LoginModel',
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.User'
    ],

    listeners: {
        activate: 'onActivate'
    },
    extend: 'Ext.form.Panel',
    alias: 'widget.login',
    controller: 'login',
    viewModel: 'login',
    itemId: 'loginform',
    title: 'Login',
    buttonAlign: 'center',
    width: '50%',
    fieldDefaults: {
        labelAlign: 'side',
        labelStyle: 'font-weight: bold;',
        margin: '15 15 15 15',
        width: '100%'
    },
    layout: {
        type: 'vbox'
    },
    defaultType: 'textfield',
    items: [
        {
            name: 'userId',
            bind: {
                value: '{userId}'
            },
            fieldLabel: 'User Id',
            dataIndex: 'userId',
            allowBlank: false
        }, {
            name: 'password',
            itemId: 'password',
            bind: {
                value: '{password}'
            },
            fieldLabel: 'Password',
            inputType: 'password'
        }, {
            name: 'rememberme',
            itemId: 'rememberme',
            bind: {
                value: '{rememberme}'
            },
            fieldLabel: 'Remember me',
            xtype: 'checkboxfield'
        }],
    buttons: [
        {
            text: 'Login',
            formBind: true,
            handler: 'onLoginButtonClick'
        }
    ]
})