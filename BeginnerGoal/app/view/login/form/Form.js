Ext.define('BeginnerGoal.view.login.form.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',
    itemId: 'loginform',
    title: 'Login',
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
            inputType: 'password'
        }],
    buttons: [
        {
            text: 'Login',
            formBind: true,
            handler: function () {
                var form = this.up('#loginform'),
                    view = form.up('#loginpage'),
                    values = form.getValues(),
                    store = form.recordStore,
                    userId = values.userId,
                    data,
                    userRecord = view.userStore.findRecord('userId', userId);
                console.dir(values);
                if (userRecord == null) {
                    Ext.Msg.alert('Error', 'User does not exist');
                } else {
                    var password = values.password;
                    if (password != userRecord.get('password')) {
                        Ext.Msg.alert('Error', 'Wrong password');
                    } else {
                        Ext.Msg.alert('Success', 'Login Successful');
                        view.currentUserStore.removeAll();
                        view.currentUserStore.add({ 'userId': userId });
                        console.log(userRecord);
                        view.layout.setActiveItem(1);
                        form.destroy();
                    }
                }
            }
        }
    ]
})