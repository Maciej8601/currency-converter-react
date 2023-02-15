import "./style.css";
import React, { useState } from "react";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState('');


    const [newValue, setNewValue] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log({ recalc });
    };

    const onSelectChange = ({ target }) => setNewValue(target.value);
    const brandNewValue = newValue;
    const newNumber = newTaskContent;
    const currencyName = { onSelectChange };
    let recalc = newNumber / brandNewValue;

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p>
                <label>Wpisz kwotę w PLN:
                    <input
                        name="value"
                        type="number"
                        className="form__in"
                        min="0.01"
                        step="0.01"
                        placeholder="Ile chcesz wymienić?"
                        value={newTaskContent}
                        onChange={({ target }) => setNewTaskContent(target.value)}
                        required
                    />
                </label>
            </p>
            <label>Wybierz walutę:
                <select
                    className="form__in"
                    value={newValue}
                    onChange={onSelectChange}
                >
                    <option value="4.71" label=" EUR" >EUR</option>
                    <option value="4.77" label=" USD" >USD</option>
                    <option value="4.76" label=" CHF" >CHF</option>
                </select>
            </label>
            <button className="form__recalc">Przelicz</button>
            <p>
                Otrzymasz
                <span> {recalc.toFixed(2)}</span>
            </p>
        </form>
    )
};

export default Form;