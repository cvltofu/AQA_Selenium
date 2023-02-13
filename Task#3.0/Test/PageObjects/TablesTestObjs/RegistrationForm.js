import BaseForm from '../../../Framework/Core/BaseForm.js';
import JsonHandler from '../../../Framework/Utils/JsonHandler.js';
import TextField from '../../../Framework/Core/Elements/TextField.js';
import Button from '../../../Framework/Core/Elements/Button.js';

export default class RegistrationForm extends BaseForm {
    constructor() {
        super('//button[@id="submit"]');
        this._firstNameField = new TextField(
            '//input[@id="firstName"]',
            'first name text field'
        );
        this._lastNameField = new TextField(
            '//input[@id="lastName"]',
            'second name text field'
        );
        this._emailField = new TextField(
            '//input[@id="userEmail"]',
            'email text field'
        );
        this._ageField = new TextField('//input[@id="age"]', 'age text field');
        this._salaryField = new TextField(
            '//input[@id="salary"]',
            'salary text field'
        );
        this._departmentField = new TextField(
            '//input[@id="department"]',
            'department text field'
        );
        this._submitBtn = new Button('//button[@id="submit"]', 'submit buton');
    }

    async enterDataToForm() {
        const userData = JsonHandler.getUserData(
            JsonHandler.getNumberOfTestUser()
        );

        await this._firstNameField.setText(userData.firstName);

        await this._lastNameField.setText(userData.lastName);

        await this._emailField.setText(userData.email);

        await this._ageField.setText(userData.age);

        await this._salaryField.setText(userData.salary);

        await this._departmentField.setText(userData.department);
    }

    async clickSubmit() {
        this._submitBtn.clickOn();
    }
}
