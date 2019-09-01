Ext.define('BeginnerGoal.view.register.Register', {
	requires: [
		'BeginnerGoal.overrides.Vtype',
		'BeginnerGoal.model.State',
		'BeginnerGoal.store.States',
		'BeginnerGoal.model.User',
		'BeginnerGoal.store.User',
		'BeginnerGoal.view.register.RegisterController',
		'BeginnerGoal.view.register.RegisterModel'

	],
	extend: 'Ext.form.Panel',
	controller: 'register',
	viewModel: 'register',
	listeners: {
		afterrender: 'onAfterRender'
	},

	itemId: 'registerform',

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
				bind: {
					value: '{user.userId}'
				},
				allowBlank: false
			}, {
				name: 'password',
				itemId: 'password',
				fieldLabel: 'Password',
				confirmPasswordField: 'confirmpassword',
				inputType: 'password',
				allowBlank: false,
				bind: {
					value: '{user.password}'
				},
				vtype: 'password',
				dataIndex: 'password'
			}, {
				name: 'confirmpassword',
				itemId: 'confirmpassword',
				fieldLabel: 'Verify Password',
				initialPasswordField: 'password',
				inputType: 'password',
				bind: {
					value: '{user.confirmpassword}'
				},
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
				bind: {
					value: '{user.firstname}'
				},
				dataIndex: 'firstname'
			}, {
				name: 'lastname',
				itemId: 'lastname',
				fieldLabel: 'Last Name',
				bind: {
					value: '{user.lastname}'
				},
				dataIndex: 'lastname'
			}, {
				name: 'company',
				itemId: 'company',
				fieldLabel: 'Company',
				bind: {
					value: '{user.company}'
				},
				dataIndex: 'company'
			}, {
				name: 'email',
				itemId: 'email',
				fieldLabel: 'Email',
				allowBlank: false,
				bind: {
					value: '{user.email}'
				},
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
				bind: {
					value: '{user.state}'
				},
				typeAhead: true,
				typeAheadDelay: 1,
				dataIndex: 'state'
			}, {
				name: 'birthdate',
				itemId: 'birthdate',
				fieldLabel: 'Date of Birth',
				xtype: 'datefield',
				format: 'd/m/Y',
				bind: {
					value: '{user.birthdate}'
				},
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
