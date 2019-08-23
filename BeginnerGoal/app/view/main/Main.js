/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BeginnerGoal.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],
    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,
    items: [
        {
            title: 'Login',
            iconCls: 'fa-user',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'container',
                itemId: 'loginpage',
                layout: {
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'login'
                    },
                    {
                        xtype: 'userProfile'
                    }
                ]
            }]
        },
        {
            title: 'Register',
            iconCls: 'fa-user-plus',
            xtype: 'register'
        }]
});
