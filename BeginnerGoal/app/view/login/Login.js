Ext.define('BeginnerGoal.view.login.Login', {
    requires: [
        'BeginnerGoal.view.login.LoginController',
        'BeginnerGoal.model.User',
        'BeginnerGoal.store.Users',
        'BeginnerGoal.store.User'
    ],
    constructor: function () {
        this.userStore = Ext.getStore('UserStore');
        this.currentUserStore = Ext.getStore('CurrentUser');
        this.callParent();
    },
    listeners: {
        activate: function() {
            var userId = this.currentUserStore.getUserId(),
                loginpage = this.up('#loginpage')  
            if(userId != null)
            {
                loginpage.layout.setActiveItem(1);
            }
        }
    },
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',
    controller: 'login',
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
            fieldLabel: 'User Id',
            dataIndex: 'userId',
            allowBlank: false
        }, {
            name: 'password',
            itemId: 'password',
            fieldLabel: 'Password',
            inputType: 'password'
        },{
            name: 'rememberme',
            itemId: 'rememberme',
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