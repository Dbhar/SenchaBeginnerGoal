Ext.define('BeginnerGoal.view.userprofile.UserProfileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userprofile',
    onActivate: function () {
        var viewModel = this.getViewModel();
        viewModel.set('currentUserStore', Ext.getStore('CurrentUser'));
        viewModel.set('userStore', Ext.getStore('UserStore'));
    },
    onLogoutButtonClick: function () {
        var view = this.getView(),
            loginView = this.getView().up('#loginpage'),
            viewModel = this.getViewModel();
        viewModel.get('currentUserStore').removeAll();
        viewModel.set('currentUserStore', null);
        viewModel.set('userData', null);
        viewModel.set('title', null);
        loginView.layout.setActiveItem(0);
    }
})
