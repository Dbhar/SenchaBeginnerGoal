Ext.define('BeginnerGoal.view.login.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginButtonClick: function () {
        var form = this.getView(),
            values = form.getValues(),
            store = form.recordStore,
            userId = values.userId,
            loginpage = form.up('#loginpage'),
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
                form.currentUserStore.removeAll();
                if(form.down('#rememberme').checked)
                {
                    form.currentUserStore.saveLocally = true;
                }
                form.currentUserStore.add({ 'userId': userId });
                form.reset();
                loginpage.layout.setActiveItem(1);
            }
        }
    }
})