import React from 'react';

const FormComponent = () => {
    return (
        <div>
            <form>
                <input type={'text'} name={'user'}/>
                <input type={'text'} name={'password'}/>
                <button>reg me</button>
            </form>
        </div>
    );
};

export default FormComponent;