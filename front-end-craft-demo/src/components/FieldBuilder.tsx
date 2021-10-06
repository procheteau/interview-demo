import React from 'react';
import '../index.css';

function FieldBuilder() {
    return (
        <div className='form'>
            <h3>Field Builder</h3>
            <form>
                <fieldset>
                    <div className="formGroup">
                        <label htmlFor="label">Label</label>
                        <input type="text" id="label" name="label"/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="type">Type</label>
                        <input type="text" id="type" name="type"/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="defaultValue">Default Value</label>
                        <input type="text" id="defaultValue" name="defaultValue"/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="choices">Choices</label>
                        <input type="text" id="choices" name="choices"/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="order">Order</label>
                        <input type="text" id="order" name="order"/>
                    </div>

                    <input type="submit" value="Submit"/><span>Or</span>
                    <input type="button" value="Cancel"/>
                </fieldset>
            </form>
        </div>
    );
}

export default FieldBuilder;
