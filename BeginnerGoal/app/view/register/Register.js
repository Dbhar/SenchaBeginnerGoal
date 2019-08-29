Ext.define('BeginnerGoal.view.register.Register', {
	requires: [
		'BeginnerGoal.overrides.Vtype',
		'BeginnerGoal.model.State',
		'BeginnerGoal.store.States',
		'BeginnerGoal.model.User',
		'BeginnerGoal.store.User',
		'BeginnerGoal.view.register.RegisterController'
	],
	extend: 'Ext.form.Panel',
	controller: 'register',

	itemId: 'registerform',
	constructor: function () {
		this.userStore = Ext.getStore('UserStore');
		this.callParent();
	},

	alias: 'widget.register',
	title: 'Register',

	width: '100%',
	buttonAlign: 'center',

	fieldDefaults: {
		labelAlign: 'side',
		labelStyle: 'font-weight: bold;',

	},
	layout: {
		type: 'vbox'
	},
	defaultType: 'textfield',
	items: [
		{
			xtype: 'fieldset',

			width: '100%',
			title: 'User Info',
			collapsible: false,

			defaultType: 'textfield',
			fieldDefaults: {
				msgTarget: 'under',
				margin: '0 0 20 0',
				width: '100%',
			},
			layout: {
				type: 'vbox'
			},
			items: [{
				name: 'userId',
				fieldLabel: 'User Id',
				dataIndex: 'userId',
				allowBlank: false
			}, {
				name: 'password',
				itemId: 'password',
				fieldLabel: 'Password',
				confirmPasswordField: 'confirmpassword',
				inputType: 'password',
				allowBlank: false,
				vtype: 'password',
				dataIndex: 'password'
			}, {
				name: 'confirmpassword',
				itemId: 'confirmpassword',
				fieldLabel: 'Verify Password',
				initialPasswordField: 'password',
				inputType: 'password',
				vtype: 'confirmpassword',
				dataIndex: 'confirmpassword',
				allowBlank: false
			}]
		},
		{
			xtype: 'fieldset',
			title: 'Contact Information',
			width: '100%',
			collapsible: false,

			defaultType: 'textfield',
			fieldDefaults: {
				msgTarget: 'under',
				width: '100%',
			},
			layout: {
				type: 'vbox'
			},
			items: [{
				name: 'firstname',
				itemId: 'firstname',
				fieldLabel: 'First Name',
				dataIndex: 'firstname'
			}, {
				name: 'lastname',
				itemId: 'lastname',
				fieldLabel: 'Last Name',
				dataIndex: 'lastname'
			}, {
				name: 'company',
				itemId: 'company',
				fieldLabel: 'Company',
				dataIndex: 'company'
			}, {
				name: 'email',
				itemId: 'email',
				fieldLabel: 'Email',
				allowBlank: false,
				vtype: 'email',
				dataIndex: 'email'
			}, {
				name: 'state',
				itemId: 'state',
				xtype: 'combobox',
				referrence: 'states',
				fieldLabel: 'State',
				store: {
					type: 'states'
				},
				valueField: 'abbr',
				displayField: 'state',
				queryMode: 'local',
				typeAhead: true,
				typeAheadDelay: 1,
				dataIndex: 'state'
			}, {
				name: 'birthdate',
				itemId: 'birthdate',
				fieldLabel: 'Date of Birth',
				xtype: 'datefield',
				format: 'd/m/Y',
				invalidText: 'date should be in the format dd/mm/yyyy',
				dataIndex: 'birthdate'
			}]
		}],
	buttons: [
		{
			text: 'Register',
			handler: 'onRegisterButtonClick'
		}
	]
});
