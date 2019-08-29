Ext.define('BeginnerGoal.view.register.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',
    onRegisterButtonClick: function () {
        var form = this.getView(),
            values = form.getValues(),
            store = form.recordStore,
            userModel,
            userId = values.userId,
            oldRecord = form.userStore.findRecord('userId', userId);
        if (!form.isValid()) {
            Ext.Msg.alert('Error', 'Invalid form');

        } else if (oldRecord) {
            Ext.Msg.alert('Error', 'User already registered');
        } else {
            form.userStore.add(values);
            Ext.toast('Registration Successful');
            form.reset();
        }
    }
})