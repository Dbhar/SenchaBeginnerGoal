Ext.define('BeginnerGoal.view.register.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',
    onRegisterButtonClick: function () {
        var form = this.getView(),
            viewModel = this.getViewModel(),
            store = viewModel.get('store'),
            data = Ext.clone(viewModel.get('user')),
            userId = data.userId,
            oldRecord = store.findRecord('userId', userId);
        if (!form.isValid()) {
            Ext.Msg.alert('Error', 'Invalid form');
        } else if (oldRecord) {
            Ext.Msg.alert('Error', 'User already registered');
        } else {
            store.add(data);
            Ext.toast('Registration Successful');
            form.reset();
        }
    },
    onAfterRender: function() {
        this.getViewModel().set('store', Ext.getStore('UserStore'));

    }
})