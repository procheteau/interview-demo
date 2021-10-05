import React from 'react';
import '../index.css';

function FieldBuilder() {
    return (
        <div className='form'>
            <h3>Field Builder</h3>
            <form>
                <label htmlFor="label">Label</label>
                <input type="text" id="label" name="label"/>
                <label htmlFor="type">Type</label>
                <input type="text" id="type" name="type"/>
                <label htmlFor="defaultValue">Default Value</label>
                <input type="text" id="defaultValue" name="defaultValue"/>
                <label htmlFor="choices">Choices</label>
                <input type="text" id="choices" name="choices"/>
                <label htmlFor="order">Order</label>
                <input type="text" id="order" name="order"/>
                <input type="submit" value="Submit"/>
                <input type="button" value="Cancel"/>
            </form>
        </div>
    );
}

export default FieldBuilder;
