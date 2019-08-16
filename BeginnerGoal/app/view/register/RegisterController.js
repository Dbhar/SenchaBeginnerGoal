Ext.define('BeginnerGoal.view.register.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',
    onRegisterButtonClick: function () {
        var form = this.getView(),
            values = form.getValues(),
            store = form.recordStore,
            userModel,
            userId = values.userId,
            data,
            oldRecord = form.userStore.findRecord('userId', userId);
        if (!form.isValid()) {
            Ext.Msg.alert('Error', 'Invalid form');
        }

        if (oldRecord) {
            Ext.Msg.alert('Error', 'User already registered');
        } else {
            form.userStore.add(values);
            data = Ext.Array.pluck(form.userStore.getRange(), 'data');
            form.usersStore.add({ 'value': Ext.JSON.encode(data) });
        }
    }
})