Ext.define('BeginnerGoal.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginButtonClick: function () {
        var form = this.getView(),
            viewModel = this.getViewModel(),
            currentUserStore = viewModel.get('currentUserStore'),
            userStore = viewModel.get('userStore'),
            userId = viewModel.get('userId'),
            password = viewModel.get('password'),
            loginpage = form.up('#loginpage'),
            userRecord = Ext.clone(userStore.findRecord('userId', userId));
        if (userRecord == null) {
            Ext.Msg.alert('Error', 'User does not exist');
        } else {
            if (password != userRecord.get('password')) {
                Ext.Msg.alert('Error', 'Wrong password');
            } else {
                Ext.Msg.alert('Success', 'Login Successful');
                currentUserStore.removeAll();
                if (viewModel.get('rememberme')) {
                    currentUserStore.saveLocally = true;
                }
                currentUserStore.add({ 'userId': userId });
                form.reset();
                loginpage.layout.setActiveItem(1);
            }
        }
    },
    onActivate: function () {
        var view = this.getView(),
            viewModel = this.getViewModel(),
            userId = null,
            loginpage = view.up('#loginpage');
        viewModel.set('userStore', Ext.getStore('UserStore'));
        viewModel.set('currentUserStore', Ext.getStore('CurrentUser'));
        userId = viewModel.get('currentUserStore').getUserId();
        if (userId != null) {
            loginpage.layout.setActiveItem(1);
        }
    }
})