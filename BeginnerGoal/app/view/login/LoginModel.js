Ext.define('BeginnerGoal.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',
    data: {
        userId: null,
        password: null,
        rememberme: null,
        currentUserStore: null,
        userStore: null
    }
})