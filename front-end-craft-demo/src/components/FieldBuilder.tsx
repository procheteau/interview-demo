import React, { useState, useEffect } from 'react';
import '../index.css';
import toast, { Toaster } from 'react-hot-toast';
import FieldService from "../MockService";

const notifySubmit = () => toast.success('Fields have been saved!');
const notifyClear = () => toast.success('Fields have been reset!');
const notifyCancel = () => toast.error('Exit Field Builder');

function handleSubmit(event: React.SyntheticEvent){
    event.preventDefault();
    FieldService.saveField({});
    notifySubmit();
}

function FieldBuilder() {

    useEffect(() => {
        console.log('GET request, retrieve fields: ', FieldService.getField(1));
    }, []);

    return (
        <div className="fieldBuilder">
            <h3>Field Builder</h3>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="formGroup">
                            <label htmlFor="label">Label</label>
                            <input type="text" id="label" name="label"/>
                        </div>

                        <div className="formGroup">
                            <label>Type</label>
                            <div className="checkbox-group">
                                <span>Multi-select</span>
                                <input type="checkbox" id="type" name="type" value="multi-select"/>
                                <label className="checkbox-label" htmlFor="type"> A Value is Required</label>
                            </div>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="defaultValue">Default Value</label>
                            <input type="text" id="defaultValue" name="defaultValue"/>
                        </div>

                        <div className="formGroup choices">
                            <label htmlFor="choices">Choices</label>
                            <select name="choices" id="choices" multiple>
                                <option value="asia">Asia</option>
                                <option value="australia">Australia</option>
                                <option value="westernEurope">Western Europe</option>
                                <option value="northAmerica">North America</option>
                                <option value="easternEurope">Eastern Europe</option>
                                <option value="latinAmerica">Latin America</option>
                                <option value="middleEast-africa">Middle East and Africa</option>
                            </select>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="order">Order</label>
                            <select name="order" id="order">
                                <option value="alphabetical">Display choices in Alphabetical</option>
                                <option value="reverse">Display choices in Reverse Alphabetical</option>
                            </select>
                        </div>

                        <div className="button-row">
                            <input className="submit-button" onClick={handleSubmit} type="submit" value="Submit"/>
                            <input onClick={notifyClear} type="button" value="Clear"/>
                            <input onClick={notifyCancel} type="button" value="Cancel"/>
                        </div>
                        <Toaster />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default FieldBuilder;
